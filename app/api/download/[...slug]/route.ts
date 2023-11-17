/**
 * const command = new GetObjectCommand({
 *   Bucket: `olsen-park`,
 *   Key: "sermons/2023/The Courage of Jesus-10-22-23-10/The Courage of Jesus-10-22-23-10.mp3",
 * });
 * const signedUrl = await getSignedUrl(s3, command, { expiresIn: 3600 });
 */
/**
 *
 * @param slug: Used as an object key in s3 bucket e.g. sermons/2023/<sermon_name>/<filename>
 *              Need to figure out way to validate slugs
 * @returns
 */
export const GET = async (
  req: Request,
  { params }: { params: { slug: string[] } }
) => {
  const { slug } = params;
  const res = await fetch(
    `https://olsen-park.s3.us-east-2.amazonaws.com/${encodeURIComponent(
      slug.join("/")
    )}`,
    { cache: "no-store" } // Cannot cache objects > 2 MB
  );

  return res;
};
