import express from "express";
import { Request, Response } from "express";
import {
  addTodo,
  getTodo,
  deleteTodo,
  updateTodo,
} from "../controllers/todoControllers";
const router = express.Router();

// Route : Get all todos
router.get("/", (req: Request, res: Response) => {
  getTodo(req, res);
});

// Route : Add new todo
router.post("/add", (req: Request, res: Response) => {
  addTodo(req, res);
});

// Route : Delete a todo
router.delete("/delete/:id", (req: Request, res: Response) => {
  deleteTodo(req, res);
});

// Route : Update a todo
router.patch("/update/:id", (req: Request, res: Response) => {
  updateTodo(req, res);
});

export default router;
