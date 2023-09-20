const { MongoClient } = require("mongodb");

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connectToDb() {
  // Connect the client to the server
  await client.connect();
  console.log("Pinged your deployment. You successfully connected to MongoDB!");
  return client.db("instagram_clone");
}

module.exports = { connectToDb };
