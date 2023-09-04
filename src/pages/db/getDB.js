import { connectDB } from "./connectDB";

let cachedDb = null;

export async function getDB() {
  if (cachedDb) {
    return cachedDb;
  }

  const client = await connectDB();
  const db = client.db("instagram-clone");
  cachedDb = db;
  return db;
}
