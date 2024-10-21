//Importing all the necessary modules and libraries
import React, { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";

// React Functional Component: AddTodo
const AddTodo: React.FC = () => {
  //useState Hook for title
  const [title, setTitle] = useState<string>("");

  // Redux useDispatch for dispatching the data to store
  const dispatch = useDispatch();

  // onSubmit Function for Adding Todo
  const handleAddTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title.trim()) {
      dispatch({ type: "CREATE_TODO", title }); // Dispatch the createTodo action
      setTitle(""); // Clear the input field
    }
  };
  
  return (
    <form onSubmit={handleAddTodo}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new todo"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodo;
