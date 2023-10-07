import { connectToDb } from "@/db";

const authHandler = async (req, res) => {
  if (req.method === "POST") {
    try {
      const { name, username, email, password } = req.body; // Извлекаем name, username, email и password из запроса
      const db = await connectToDb();
      const collection = db.collection("instagram_Users");

      // Вставляем данные в коллекцию instagram_Users
      await collection.insertOne({ name, username, email, password });

      console.log("User data inserted into MongoDB");
      return res.status(200).json({ message: "User registered successfully" });
    } catch (error) {
      console.error("Database error:", error);
      return res.status(500).json({ error: "Database error" });
    }
  } else {
    return res.status(405).end();
  }
};

export default authHandler;
