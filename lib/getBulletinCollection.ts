import { Collection, WithId } from "mongodb";
import clientPromise from "./mongodb";

export type Bulletin = WithId<{
  title: string;
  date: Date;
  author: string;
  pdfFilename: string;
  htmlFilename: string;
  prefix: string;
}>;

export const getBulletinCollection = async (): Promise<
  Collection<Bulletin>
> => {
  const client = await clientPromise;
  return client.db("olsen-park").collection<Bulletin>("bulletins");
};
