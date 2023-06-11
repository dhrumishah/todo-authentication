//=============== API and PARAMS  ==============

// import express from "express";
// import mongoose from "mongoose";
// import dotenv from "dotenv";

// const app = express();
// app.use(express.json());

// dotenv.config();

// const connectionParams = {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// };

// mongoose
//   .connect(process.env.MONGO_URI, connectionParams)
//   .then(() => console.log("database connected"))
//   .catch((e) => console.log(e));

// const schema = new mongoose.Schema({
//   name: String,
//   email: String,
//   password: String,
// });

// const User = mongoose.model("User", schema);

// app.get("/", (req, res) => {
//   res.send("Nice work");
// });

// app.get("/users/all", async (req, res) => {
//   const users = await User.find({});

//   res.status(201).cookie("temp", "lol").json({
//     success: true,
//     users,
//   });
// });

// app.post("/users/new", async (req, res) => {
//   const { name, email, password } = req.body;
//   await User.create({
//     name,
//     email,
//     password,
//   });

//   res.json({
//     success: true,
//     message: "Signed up successfully",
//   });
// });

// app.listen(4000, () => {
//   console.log("Server is working");
// });

//=========== MVC =====================

import express from "express";
import userRouter from "./routes/user.js";
import taskRouter from "./routes/task.js";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors";

export const app = express();

// Using middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "PUT", "POST", "DELETE"],
    credentials: true,
  })
);
//using routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/tasks", taskRouter);

app.get("/", (req, res) => {
  res.send("Nice work");
});

app.use(errorMiddleware);
