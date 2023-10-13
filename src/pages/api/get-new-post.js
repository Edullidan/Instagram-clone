import { connectToDb } from "@/db";

export default async function handler(req, res) {
  try {
    const db = await connectToDb();
    const collection = db.collection("instagram_posts");
    const lastLoadedDate = req.query.lastLoadedDate || new Date(0); 

    const newPosts = await collection
      .find({ createdAt: { $gt: lastLoadedDate } })
      .toArray();

    res.status(200).json(newPosts);
  } catch (error) {
    console.error("Error fetching new posts:", error);
    res.status(500).json({ error: "Failed to fetch new posts" });
  }
}
