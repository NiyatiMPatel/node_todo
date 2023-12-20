import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();

export const connectToMongo = async () => {
 try {
  await mongoose.connect(process.env.URI)
  // console.log("file: mongoose.js:9 ~ connectToMongo:", "Connected to mongo");
 } catch (error) {
  console.log("file: mongoose.js:11 ~ connectToMongo ~ error:", error);
  throw error;
 }
}