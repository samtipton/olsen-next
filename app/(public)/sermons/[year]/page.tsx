import MediaCatalog from "@/app/components/MediaCatalog/MediaCatalog";
import "server-only";
import { Document } from "mongodb";
import ContentPane from "@/app/components/ContentPane/ContentPane";
import { extractVimeoIdFromRegularLink } from "@/lib/vimeoUtil";
import { Sermon, getSermonCollection } from "@/lib/getSermonCollection";

// Return a list of `params` to populate the [year] dynamic segment
export const generateStaticParams = async () => {
  const docs = await getSermonYears();
  return docs.map((doc) => {
    return {
      year: `${doc.year}`,
    };
  });
};

// TODO paginate?
const getSermonsForYear = async (year: string): Promise<Sermon[]> => {
  const sermonCollection = await getSermonCollection();
  const start = new Date(`${year}-01-01`);
  const end = new Date(`${Number(year) + 1}-01-01`);

  return (
    (await sermonCollection
      .find({})
      .filter({
        date: {
          $gte: start,
          $lt: end,
        },
      })
      .sort("date", "desc")
      // .limit(page_size
      // .skip((page - 1) * page_size)
      .toArray()) as Sermon[]
  );
};

const getSermonYears = async (): Promise<Document[]> => {
  const sermonCollection = await getSermonCollection();

  return await sermonCollection
    .aggregate([
      {
        $group: {
          _id: {
            $year: "$date",
          },
        },
      },
      {
        $project: {
          _id: 0,
          year: "$_id",
        },
      },
      {
        $sort: {
          year: 1,
        },
      },
    ])
    .toArray();
};

const getSermonsYearRange = async () => {
  const docs = await getSermonYears();
  return [docs[0].year, docs[docs.length - 1].year];
};

type SermonPageProps = {
  params: { year: string };
};

const buildMainContentUrl = (sermon: Sermon, year: string) => {
  const params = [];

  if (sermon.videoUrl) {
    params.push({ v: encodeURIComponent(sermon.videoUrl) });
  }

  if (sermon.audioFilename) {
    params.push({
      a: encodeURIComponent(`${sermon.prefix}/${sermon.audioFilename}`),
    });
  }

  if (sermon.presentationFilename) {
    params.push({
      ppt: encodeURIComponent(
        `${sermon.prefix}/${sermon.presentationFilename}`
      ),
    });
  }

  if (params.length !== 0) {
    params.push({ title: sermon.title });
  }

  const mainContentUrl = params.length
    ? `/sermons/${year}?${params
        .map((param) => `${Object.keys(param)[0]}=${Object.values(param)[0]}`)
        .join("&")}`
    : "";

  return mainContentUrl;
};

const SermonsPage = async ({ params }: SermonPageProps) => {
  const { year } = params;
  const sermons = await getSermonsForYear(year);
  const [start, end] = await getSermonsYearRange();

  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:p-2.5 md:p-2.5 sm:p-0">
      <ContentPane />
      <MediaCatalog
        catalogTitle={`Sermons ${year}`}
        catalogYearEnd={end}
        catalogYearStart={start}
        indexLinkPrefix="sermons"
        helpText={"Click on a title to watch video."}
        catalogEntries={sermons.map((sermon) => {
          // get date and subtract UTC offset (6 hours for CST)
          // this bypases browser day light's saving correction
          const date = sermon.date;
          date.setHours(sermon.date.getHours() - 6);
          return {
            title: sermon.title,
            author: sermon.author,
            date: date.toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
              timeZone: "UTC",
            }),
            primaryContentType: "video",
            content: buildMainContentUrl(sermon, year),
            extraContent: {
              ...(sermon.videoUrl && {
                video: `https://player.vimeo.com/video/${extractVimeoIdFromRegularLink(
                  sermon.videoUrl
                )}?badge=0&amp;autopause=0&amp;quality_selector=1&amp;player_id=0&amp;app_id=58479`,
              }),
              ...(sermon.audioFilename && {
                audio: `/api/download/${sermon.prefix}/${sermon.audioFilename}`,
              }),
              ...(sermon.presentationFilename && {
                ppt: `/api/download/${encodeURIComponent(
                  `${sermon.prefix}/${sermon.presentationFilename}`
                )}`,
              }),
              ...(sermon.outlineFilename && {
                outline: `/api/download/${encodeURIComponent(
                  `${sermon.prefix}/${sermon.outlineFilename}`
                )}`,
              }),
            },
          };
        })}
      />
      <script src="https://player.vimeo.com/api/player.js" async />
    </div>
  );
};

export default SermonsPage;
