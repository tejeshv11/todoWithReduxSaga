//Importing all the necessary modules and libraries
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//Intercaces
//Todo Interface
interface Todo {
  _id: string;
  title: string;
}

//TodoState Interface
interface TodoState {
  todos: Todo[];
  error: string | null;
}

// Initial State of the Slice
const initialState: TodoState = {
  todos: [], //  Todo array
  error: null,
};

// Creating Slice of todoReducer
const todoReducer = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // Reducer for fetching all the todos
    setTodos: (state, action: PayloadAction<Todo[]>) => {
      state.todos = action.payload; // Set the fetched todos
    },

    // Reducer for adding a todo
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload); // Add the new todo to the state
    },

    // Reducer for deleting a todo
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo._id !== action.payload); // Remove the deleted todo
    },

    // Reducer for deleting a todo
    updateTodo: (state, action: PayloadAction<Todo>) => {
      const index = state.todos.findIndex(
        (todo) => todo._id === action.payload._id
      );
      if (index !== -1) {
        state.todos[index] = action.payload; // Update the todo
      }
    },

    // Reducer for error
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload; // Set error message
    },
  },
});

// Export the actions
export const { setTodos, addTodo, deleteTodo, updateTodo, setError } =
  todoReducer.actions;

// Exporting todoReducer
export default todoReducer.reducer;
