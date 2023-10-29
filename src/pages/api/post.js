import { connectToDb } from "@/db";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { image, email } = req.body;
      const db = await connectToDb();
      const collection = db.collection("instagram_Posts");

      await collection.insertOne({ image, createdBy: email, createdAt: new Date() });
      console.log("Post created by", email, "and inserted into MongoDB");
      res.status(200).end();
    } catch (error) {
      console.error("Error creating post:", error);
      res.status(500).json({ error: "Failed to create post" });
    }
  } else {
    res.status(405).end();
  }
}