import { MongoClient, Db, Collection } from "mongodb";

const uri = process.env.DATABASE_URL || "";
const options = {};

let client: MongoClient;
let db: Db;

export async function connectDb(): Promise<Db> {
  if (db) return db;
  client = new MongoClient(uri, options);
  await client.connect();
  db = client.db();
  return db;
}

export async function getCollection<T = Document>(
  name: string
): Promise<Collection<T>> {
  const database = await connectDb();
  return database.collection<T>(name);
}
