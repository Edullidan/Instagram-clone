import { connectToDb } from "@/db";

const loginHandler = async (req, res) => {
  if (req.method === "POST") {
    try {
      const { email, password } = req.body;
      const db = await connectToDb();
      const collection = db.collection("instagram_Users");

      const user = await collection.findOne({ email, password });

      if (user) {
        return res.status(200).json({ message: "Authorization successful" });
      } else {
        return res
          .status(401)
          .json({ error: "The username or password you entered is incorrect" });
      }
    } catch (error) {
      console.error("Database error:", error);
      return res.status(500).json({ error: "Database error" });
    }
  } else {
    return res.status(405).end();
  }
};

export default loginHandler;
