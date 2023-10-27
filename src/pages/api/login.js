import { connectToDb } from "@/db";

const loginHandler = async (req, res) => {
  if (req.method === "POST") {
    try {
      const { email, password } = req.body;
      const db = await connectToDb();
      const collection = db.collection("instagram_Users");

      const user = await collection.findOne({ email, password });
      const userData = {
        id: user.id, 
        name: user.name,
        email: user.email,
      };
      
      
      if (user) {
        return res.status(200).json((userData),{ message: "Authorization successful" });
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

