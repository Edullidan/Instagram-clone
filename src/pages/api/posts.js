import connect from "@/db";
import Post from "@/models/Post";

export default async function handler(req, res) {
  try {
    await connect();
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    console.error("Error in fetching posts", error);
    res.status(500).json({ error: "Error in fetching posts" });
  }
}
