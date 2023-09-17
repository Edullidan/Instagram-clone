import connect from "@/db";
import User from "@/models/User";

export default async function handler(nextRequest, nextResponse) {
  if (nextRequest.method === "POST") {
    try {
      await connect();

      const { username, password } = nextRequest.body;

      const user = await User.findOne({ username });

      if (!user) {
        return nextResponse.status(401).json({ error: "User not found" });
      }

      const isValidPassword = await user.isValidPassword(password);

      if (!isValidPassword) {
        return nextResponse.status(401).json({ error: "Incorrect password" });
      }

      nextResponse.status(200).json({ message: "Authentication successful" });
    } catch (error) {
      console.error("Error during authentication", error);
      nextResponse.status(500).json({ error: "Error during authentication" });
    }
  } else {
    nextResponse.status(405).json({ error: "Method not supported" });
  }
}
