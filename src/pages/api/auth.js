import { NextApiRequest, NextApiResponse } from "next";
import connect from "@/db";
import User from "@/models/User";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      await connect();

      const { username, password } = req.body;

      const user = await User.findOne({ username });

      if (!user) {
        return res.status(401).json({ error: "User not found" });
      }

      const isValidPassword = await user.isValidPassword(password);

      if (!isValidPassword) {
        return res.status(401).json({ error: "Incorrect password" });
      }

      res.status(200).json({ message: "Authentication successful" });
    } catch (error) {
      console.error("Error during authentication", error);
      res.status(500).json({ error: "Error during authentication" });
    }
  } else {
    res.status(405).json({ error: "Method not supported" });
  }
}
