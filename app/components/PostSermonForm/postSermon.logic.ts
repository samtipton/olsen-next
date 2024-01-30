"use server";
import { getSermonCollection } from "@/lib/getSermonCollection";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { revalidatePath } from "next/cache";

const createPutObjectCommandInput = async (
  key: string,
  arrayBuffer: ArrayBuffer,
  size: number
) => {
  return new PutObjectCommand({
    Bucket: "olsen-park",
    Key: key,
    // Body: file,
    Body: Buffer.from(arrayBuffer),
    ContentLength: size,
  });
};

const removeDST = (date: Date) => {
  const summer = new Date(date);
  summer.setMonth(7);

  if (date.getTimezoneOffset() === summer.getTimezoneOffset()) {
    return new Date(date.valueOf() + 3_600_000);
  } else {
    return date;
  }
};

const createStandardizedDate = (
  month: string,
  day: string,
  year: string,
  serviceTime: string
): Date => {
  const hourAndMinute = serviceTime
    .replace(/\s*[AaPp]\.?[Mm]\.?\s*/, "")
    .split(":");

  const hour = hourAndMinute[0];
  const shortMinute = hourAndMinute[1].replace(/00+/, "0");

  const local = new Date();
  local.setMonth(+month - 1);
  local.setDate(+day);
  local.setFullYear(+year);
  local.setHours(+hour);
  local.setMinutes(+shortMinute);
  local.setSeconds(0);
  local.setMilliseconds(0);

  const utc = removeDST(local);

  return utc;
};

const createStandardizedDateString = (
  month: string,
  day: string,
  year: string,
  serviceTime: string
): string => {
  // std to 01-01-23-[9/10]
  const stdDate = `${month.length === 1 ? "0" + month : month}-${
    day.length === 1 ? "0" + day : day
  }-${year.slice(2)}-${serviceTime.replace(
    /:?\d{2}?\s*[AaPp]\.?[Mm]\.?\s*/,
    ""
  )}`;
  return stdDate;
};

export type PostSermonResponse = { message: string; errors?: string };
export const postSermon = async (
  data: FormData
): Promise<PostSermonResponse> => {
  const title = (data.get("title") as string) || "";
  const author = (data.get("author") as string) || "";
  const month = (data.get("month") as string) || "";
  const day = (data.get("day") as string) || "";
  const year = (data.get("year") as string) || "";

  const videoUrl = (data.get("videoUrl") as string) || "";
  const serviceTime = (data.get("serviceTime") as string) || "";

  const sermonAudio = data.get("sermonAudio") as File;
  const sermonPresentation = data.get("sermonPresentation") as File;
  const sermonOutline = data.get("sermonOutline") as File;

  const standardizedDate = createStandardizedDateString(
    month,
    day,
    year,
    serviceTime
  );

  const isoUtcDate = createStandardizedDate(month, day, year, serviceTime);

  const commands = [];

  if (sermonAudio && sermonAudio.size > 0) {
    commands.push(
      await createPutObjectCommandInput(
        `sermons/${year}/${standardizedDate}/${sermonAudio.name}`,
        await sermonAudio.arrayBuffer(),
        sermonAudio.size
      )
    );
  }

  // todo could check s3 to see if these objects already exist before uploading
  if (sermonPresentation.size > 0) {
    commands.push(
      await createPutObjectCommandInput(
        `sermons/${year}/${standardizedDate}/${sermonPresentation.name}`,
        await sermonPresentation.arrayBuffer(),
        sermonPresentation.size
      )
    );
  }

  if (sermonOutline.size > 0) {
    commands.push(
      await createPutObjectCommandInput(
        `sermons/${year}/${standardizedDate}/${sermonOutline.name}`,
        await sermonOutline.arrayBuffer(),
        sermonOutline.size
      )
    );
  }

  const s3client: S3Client = new S3Client({
    region: "us-east-2",
    credentials: {
      accessKeyId: process.env.OLSEN_NEXT_AWS_ACCESS_KEY_ID || "",
      secretAccessKey: process.env.OLSEN_NEXT_AWS_SECRET_ACCESS_KEY || "",
    },
  });

  const errors: any[] = [];
  const awaited = Promise.all(commands.map((c) => s3client.send(c)));
  awaited.catch((err) => {
    console.error(err);
    errors.push(err);
  });

  if (errors.length > 0) {
    return { message: "failure", errors: errors.join(",\n") };
  }

  const sermonCollection = await getSermonCollection();
  const insertResult = await sermonCollection.replaceOne(
    {
      author,
      date: isoUtcDate,
    },
    {
      author,
      date: isoUtcDate,
      title,
      videoUrl,
      audioFilename: sermonAudio ? sermonAudio.name : "",
      presentationFilename:
        sermonPresentation.name === "undefined" ? "" : sermonPresentation.name,
      outlineFilename:
        sermonOutline.name === "undefined" ? "" : sermonOutline.name,

      prefix: `sermons/${year}/${standardizedDate}`,
    },
    { upsert: true }
  );

  if (insertResult.acknowledged) {
    revalidatePath(`/sermons/${year}`);
  }

  // todo, if mongo insert fails we should undo s3 uploads
  return { message: insertResult.acknowledged ? "success" : "failure" };
};
