import { connectDB, getDB } from "../../db";

connectDB();

export default async (req, res) => {
  if (req.method === "POST") {
    const { email, password } = req.body;

    try {
      const db = getDB();
      const user = await db.collection("users").findOne({ email, password });

      if (user) {
        res.status(200).json({ message: "Вход выполнен успешно" });
      } else {
        res.status(401).json({ message: "Ошибка аутентификации" });
      }
    } catch (error) {
      console.error("Ошибка при запросе к базе данных:", error);
      res.status(500).json({ message: "Внутренняя ошибка сервера" });
    }
  } else {
    res.status(405).end();
  }
};
