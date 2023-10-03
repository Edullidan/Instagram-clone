import { connectToDb } from "@/db";

export default async function handler(req, res) {
  try {
    const db = await connectToDb();
    const collection = db.collection("instagram_posts");

    // Предположим, что у ваших постов есть поле "createdAt" с датой создания
    // Вы можете использовать это поле для поиска новых постов, созданных после последней загрузки
    const lastLoadedDate = req.query.lastLoadedDate || new Date(0); // По умолчанию загружаем все посты

    const newPosts = await collection
      .find({ createdAt: { $gt: lastLoadedDate } })
      .toArray();

    res.status(200).json(newPosts);
  } catch (error) {
    console.error("Error fetching new posts:", error);
    res.status(500).json({ error: "Failed to fetch new posts" });
  }
}
