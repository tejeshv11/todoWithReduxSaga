// Importing Modules and Libraries
import React from "react";
import "./App.css";
import AddTodo from "./Components/AddTodo";
import TodoList from "./Components/TodoList";
TodoList;

// App Component, Contains all the component of the project
function App(): JSX.Element {
  return (
    <>
      <h1>Todo App</h1>
      <AddTodo /> {/*  AddTodo Component */}
      <TodoList /> {/*  TodoList Component */}
    </>
  );
}

export default App;
