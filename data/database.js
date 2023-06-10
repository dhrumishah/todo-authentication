import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
export const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, connectionParams)
    .then(() => console.log("database connected"))
    .catch((e) => console.log(e));
};
