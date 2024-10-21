import mongoose, { Document, Schema } from "mongoose";

interface ITodo extends Document {
  // Interface of the todo model
  title: string;
  isCompleted: boolean;
}

//Mongoose Schema
const todoSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
});

//Mongoose Model
const Todo = mongoose.model<ITodo>("Todo", todoSchema); // Model with the interface

export default Todo;
