import { Collection } from "mongodb";
import clientPromise from "./mongodb";

export type Sermon = {
  title: string;
  date: Date;
  author: string;
  videoUrl: string;
  audioFilename: string;
  presentationFilename: string;
  outlineFilename: string;
  prefix: string;
};

export const getSermonCollection = async (): Promise<Collection<Sermon>> => {
  const client = await clientPromise;
  return client.db("olsen-park").collection<Sermon>("sermons");
};
