
import { connectToDb } from "@/db";

export default async function handler(req, res) {
    if (req.method === "POST") {
      try {
        const { postId, text } = req.body; 
        const db = await connectToDb();
        const collection = db.collection("comments");
        await collection.insertOne({ postId, text, createdAt: new Date() });
        console.log("Comment inserted into MongoDB");
        res.status(200).end();
      } catch (error) {
        console.error("Error creating comment:", error);
        res.status(500).json({ error: "Failed to create comment" });
      }
    } else {
      res.status(405).end();
    }
  }