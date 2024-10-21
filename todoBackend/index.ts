import express, { Request, Response } from "express";
import todoRouter from "./routes/todoRoutes";
import bodyParser from "body-parser";
import cors from "cors";
import connectDB from "./config/mongoDB";
const PORT = process.env.PORT || 8080;

// Express App
const app = express();

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// API Route
app.use("/todo", todoRouter);

// MongoDB Connection
connectDB();

// Testing Route For Server Is Running Or Not
app.get("/", (req: Request, res: Response) => {
  res.send({ msg: "server running" });
});

// Listening to the server
app.listen(PORT, () => {
  console.log(`Server started at PORT: ${PORT}`);
});
