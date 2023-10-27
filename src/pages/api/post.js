import { connectToDb } from "@/db";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { text ,userId} = req.body;
      const db = await connectToDb();
      const collection = db.collection("instagram_Posts");
      await collection.insertOne({ text, createdAt: new Date(), userId});
      console.log("Data inserted into MongoDB");
      res.status(200).end();
    } catch (error) {
      console.error("Error creating post:", error);
      res.status(500).json({ error: "Failed to create post" });
    }
  } else {
    res.status(405).end();
  }
}