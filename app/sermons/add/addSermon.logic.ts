"use server";
import { Sermon } from "./../../../lib/useSermonCollection";
import { MongoClient } from "mongodb";
import {
  S3Client,
  PutObjectCommand,
  PutObjectCommandInput,
} from "@aws-sdk/client-s3";
import { z } from "zod";
import { getSermonCollection } from "@/lib/useSermonCollection";

const createPutObjectCommandInput = async (key: string, file: File) => {
  return new PutObjectCommand({
    Bucket: "olsen-park",
    Key: key,
    Body: Buffer.from(await file.arrayBuffer()),
    ContentLength: file.size,
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
  console.log(utc);

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
  console.log(stdDate);
  return stdDate;
};

export const addSermon = async (prevState: any, formData: FormData) => {
  const sermonSchema = z.object({
    author: z.string().min(1),
    title: z.string().min(1),
    month: z.string().min(1),
    day: z.string().min(1),
    year: z.string().length(4),
    serviceTime: z.string(),
    videoLink: z.string().min(1),
    sermonAudio: z.any(),
  });
  const author = (formData.get("author") as string) || "";
  const title = (formData.get("title") as string) || "";
  const month = (formData.get("month") as string) || "";
  const day = (formData.get("day") as string) || "";
  const year = (formData.get("year") as string) || "";
  const serviceTime = (formData.get("serviceTime") as string) || "";
  const videoUrl = (formData.get("videoUrl") as string) || "";
  const sermonAudio = formData.get("sermonAudio") as File;
  const sermonPresentation = formData.get("sermonPresentation") as File;
  const sermonOutline = formData.get("sermonOutline") as File;

  const standardizedDate = createStandardizedDateString(
    month,
    day,
    year,
    serviceTime
  );

  const isoUtcDate = createStandardizedDate(month, day, year, serviceTime);

  const commands = [];
  if (sermonAudio.name !== "undefined") {
    commands.push(
      await createPutObjectCommandInput(
        `sermons/${year}/${standardizedDate}/${sermonAudio.name}`,
        sermonAudio
      )
    );
  }

  // todo could check s3 to see if these objects already exist before uploading
  if (sermonPresentation.name !== "undefined") {
    commands.push(
      await createPutObjectCommandInput(
        `sermons/${year}/${standardizedDate}/${sermonPresentation.name}`,
        sermonPresentation
      )
    );
  }

  if (sermonOutline.name !== "undefined") {
    commands.push(
      await createPutObjectCommandInput(
        `sermons/${year}/${standardizedDate}/${sermonOutline.name}`,
        sermonOutline
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
    return { message: "failure", errors: errors };
  }

  const sermonCollection = await getSermonCollection();
  const result = await sermonCollection.insertOne({
    author,
    date: isoUtcDate,
    title,
    videoUrl,
    audioFilename: sermonAudio.name,
    presentationFilename:
      sermonPresentation.name === "undefined" ? "" : sermonPresentation.name,
    outlineFilename:
      sermonOutline.name === "undefined" ? "" : sermonOutline.name,
    prefix: `sermons/${year}/${standardizedDate}`,
  });

  // todo, if mongo insert fails we should undo s3 uploads
  return { message: result.acknowledged ? "success" : "failure" };
};
