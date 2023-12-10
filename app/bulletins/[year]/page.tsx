import { Document } from "mongodb";
import { Bulletin, getBulletinCollection } from "@/lib/getBulletinCollection";
import MediaCatalog from "@/app/components/MediaCatalog/MediaCatalog";
import ContentPane from "@/app/components/ContentPane/ContentPane";

// Return a list of `params` to populate the [year] dynamic segment
export const generateStaticParams = async () => {
  const docs = await getBulletinYears();
  return docs.map((doc) => {
    return {
      year: `${doc.year}`,
    };
  });
};

// TODO paginate?
const getBulletinsForYear = async (year: string): Promise<Bulletin[]> => {
  const bulletinCollection = await getBulletinCollection();
  const start = new Date(`${year}-01-01`);
  const end = new Date(`${Number(year) + 1}-01-01`);

  return (
    (await bulletinCollection
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
      .toArray()) as Bulletin[]
  );
};

const getBulletinYears = async (): Promise<Document[]> => {
  const bulletinCollection = await getBulletinCollection();

  return await bulletinCollection
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

const getBulletinsYearRange = async () => {
  const docs = await getBulletinYears();
  return [docs[0].year, docs[docs.length - 1].year];
};

type BulletinPageProps = {
  params: { year: string };
};

const BulletinsPage = async ({ params }: BulletinPageProps) => {
  const { year } = params;
  const bulletins = await getBulletinsForYear(year);
  const [start, end] = await getBulletinsYearRange();
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:p-2.5 md:p-2.5 sm:p-0">
      <div className="w-full h-full"></div>
      <MediaCatalog
        catalogTitle={`Bulletins ${year}`}
        catalogYearEnd={end}
        catalogYearStart={start}
        indexLinkPrefix="bulletins"
        helpText={"Click on a title to read an article."}
        catalogEntries={bulletins.map((bulletin) => {
          // get date and subtract UTC offset (6 hours for CST)
          // this bypasses browser day light's saving correction
          const date = bulletin.date;
          date.setHours(bulletin.date.getHours() - 6);
          return {
            title: bulletin.title,
            author: bulletin.author,
            date: date.toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
              timeZone: "UTC",
            }),
            primaryContentType: "link",
            content: bulletin.htmlFilename,
            extraContent: {
              pdf: `/api/download/${encodeURIComponent(
                `${bulletin.prefix}/${bulletin.pdfFilename}`
              )}`,
            },
          };
        })}
      />
    </div>
  );
};

export default BulletinsPage;
