import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Mongo connection successful");
  } catch (error) {
    console.error("Error in connecting to MongoDB", error);
    throw new Error("Error in connecting to MongoDB");
  }
};

export default connect;
