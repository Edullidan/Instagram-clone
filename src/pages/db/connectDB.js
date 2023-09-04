import { MongoClient } from "mongodb";

const uri =
  "MONGODB_URI=mongodb+srv://ksuigetsu777:IbbjdiRh410fZXMu@instagram-clone.wsxhdcn.mongodb.net/";
let cachedClient = null;

export async function connectDB() {
  if (cachedClient) {
    return cachedClient;
  }

  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    cachedClient = client;
    return client;
  } catch (error) {
    console.error("Ошибка при подключении к базе данных:", error);
    throw error;
  }
}
