//Importing all the necessary modules and libraries
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//Interface
//Todo Interface
interface Todo {
  _id: string;
  title: string;
}

//RootState Interface for useSelector
interface RootState {
  todo: {
    todos: Todo[];
  };
}

// React Component : TodoList
const TodoList: React.FC = () => {
  const dispatch = useDispatch(); //useDispatch Hook from React Redux
  const { todos } = useSelector((state: RootState) => state.todo); //useSelector Hook from React Redux

  // useEffect hook for rendering the component when todo changes
  useEffect(() => {
    dispatch({ type: "FETCH_TODOS" }); // Dispatch the fetchTodos action
  }, [dispatch]);

  // Delete Todo Function
  const handleDelete = (id: string) => {
    dispatch({ type: "REMOVE_TODO", id }); // Dispatch the removeTodo action
  };

  // Update Todo Function
  const handleUpdate = (id: string, title: string) => {
    const newTitle = prompt("Update Todo:", title);
    if (newTitle) {
      dispatch({ type: "EDIT_TODO", todo: { _id: id, title: newTitle } }); // Dispatch the editTodo action
    }
  };

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos?.map((todo) => (
          <li key={todo._id}>
            {todo.title}{" "}
            <button onClick={() => handleUpdate(todo._id, todo.title)}>
              Update
            </button>{" "}
            <button onClick={() => handleDelete(todo._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
