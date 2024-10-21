// Importing the necessary models and libraries
import { Request, Response } from "express";
import Todo from "../models/todoModel";

// Function to get all the todos
const getTodo = async (req: Request, res: Response) => {
  try {
    const todos = await Todo.find({}); //Getting all the todos
    return res.status(200).json({ todos });
  } catch (error) {
    console.error(error); // Log the error for debugging
    return res
      .status(500)
      .json({ error: "An error occurred while fetching todos." });
  }
};

//Function to add a new todo
const addTodo = async (req: Request, res: Response) => {
  const { title } = req.body; // Extract title from the request body
  try {
    const newTodo = new Todo({ title }); // Create a new todo with the title
    await newTodo.save(); // Save the todo to the database
    res.status(201).json(newTodo); // Return the created todo
  } catch (error) {
    console.error("Error adding todo:", error); // Log the error for debugging
    res.status(500).send("Internal Server Error");
  }
};

//Function to delete a todo
const deleteTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params; // Getting the id from the query parameters

    //Find by Id and delete function with error handling
    Todo.findByIdAndDelete(id).then((deletedTodo) => {
      if (!deletedTodo) {
        return res.status(404).send({ message: "Todo not found" });
      }
      res.status(200).send({ message: "Todo deleted successfully" });
    });
  } catch (error) {
    console.log(error); // Log the error for debugging
    return res
      .status(500)
      .json({ error: "An error occurred while deleting the todo." }); // Error Handling
  }
};

//Function to update a todo
const updateTodo = async (req: Request, res: Response) => {
  const { id } = req.params; // Get id directly from req.params
  const { title } = req.body; // Getting the title from the input provided by the client

  // Check if id is defined i.e todo exists
  try {
    //Updation of the Todo
    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { title },
      { new: true }
    );
    if (!updatedTodo) {
      return res.status(404).send("Todo not found");
    }
    res.send(updatedTodo);
  } catch (error) {
    console.error("Error updating todo:", error); // Log the error for debugging
    res.status(500).send("Internal Server Error");
  }
};

//Exporting all the functions
export { getTodo, addTodo, deleteTodo, updateTodo };
