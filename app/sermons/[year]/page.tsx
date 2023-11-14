import clientPromise from "@mongodb";
import MediaCatalog from "@/app/components/MediaCatalog/MediaCatalog";
import "server-only";
import { WithId } from "mongodb";
import VideoPane from "@/app/components/VideoPane/VideoPane";
import { extractVimeoIdFromRegularLink } from "@/lib/vimeoUtil";

/**
 * extract to models file
 */
export type Sermon = WithId<{
  title: string;
  date: Date;
  author: string;
  videoUrl: string;
  audioFilename: string;
  presentationFilename: string;
  outlineFilename: string;
}>;

const SermonsPage = async ({ params }: { params: { year: string } }) => {
  const client = await clientPromise;
  const db = client.db("olsen-park");
  const sermons = (await db
    .collection("sermons")
    .find({})
    .filter({}) // filter by date
    .sort("date", "desc")
    .limit(26) // todo limit to quarter and paginate, query on date range?
    .toArray()) as Sermon[];

  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:p-2.5 md:p-2.5 sm:p-0">
      <VideoPane />
      <MediaCatalog
        catalogTitle={`Sermons ${params.year}`}
        catalogYearEnd={2023}
        catalogYearStart={2006}
        catalogEntries={sermons.map((sermon) => {
          return {
            title: sermon.title,
            author: sermon.author,
            date: sermon.date.toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
              second: "numeric",
            }),
            primaryContentType: "video",
            content: `/sermons/2023?v=${encodeURI(sermon.videoUrl)}&title=${
              sermon.title
            }`,
            extraContent: {
              video: `https://player.vimeo.com/video/${extractVimeoIdFromRegularLink(
                sermon.videoUrl
              )}?badge=0&amp;autopause=0&amp;quality_selector=1&amp;player_id=0&amp;app_id=58479`,
              audio: `/api/sermons/${params.year}/${sermon.title}/${sermon.audioFilename}`,
              ppt: `/api/sermons/${params.year}/${sermon.title}/${sermon.presentationFilename}`,
              outline: sermon.outlineFilename,
            },
          };
        })}
      />
      <script src="https://player.vimeo.com/api/player.js" async />
    </div>
  );
};

export default SermonsPage;
