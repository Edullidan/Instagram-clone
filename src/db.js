import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Mongo connection successful");
  } catch (error) {
    throw new Error("Error in connentcing to mongoDB");
  }
};

export default connect;
