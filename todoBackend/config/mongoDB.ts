require("dotenv").config();
import mongoose from "mongoose";

const uri = process.env.MONGO_URL;

const connectDB = async () => {
  if (!uri) {
    throw new Error("The MONGO_URL environment variable is not set.");
  }
  mongoose
    .connect(uri)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Could not connect to MongoDB:", err));
};

export default connectDB;
