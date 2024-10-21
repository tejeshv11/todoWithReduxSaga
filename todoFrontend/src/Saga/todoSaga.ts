// Importing all the necessary modules and libraries
import { call, put, takeEvery } from "redux-saga/effects"; // Import necessary saga effects
import {
  setTodos,
  addTodo,
  deleteTodo,
  updateTodo,
  setError,
} from "../Features/todoReducer";
import axios from "axios";

const API_URL = "http://localhost:8000"; // Adjust the URL as needed

// Define types for the actions
// CreateTodoAction Interface
interface CreateTodoAction {
  type: "CREATE_TODO";
  title: string;
}

// RemoveTodoAction Interface
interface RemoveTodoAction {
  type: "REMOVE_TODO";
  id: string;
}

// EditTodoAction Interface
interface EditTodoAction {
  type: "EDIT_TODO";
  todo: {
    _id: string;
    title: string;
  };
}

// Worker saga for fetching todos
function* fetchTodos() {
  try {
    const response = yield call(axios.get, `${API_URL}/todo/`);
    yield put(setTodos(response.data.todos)); // Dispatch the action to set todos
  } catch (error) {
    yield put(setError(error.message)); // Dispatch the error
  }
}

// Worker saga for creating a todo
function* createTodo(action: CreateTodoAction) {
  try {
    const response = yield call(axios.post, `${API_URL}/todo/add`, {
      title: action.title,
    });
    yield put(addTodo(response.data)); // Dispatch the action to add the new todo
  } catch (error) {
    yield put(setError(error.message)); // Dispatch the error
  } finally {
  }
}

// Worker saga for removing a todo
function* removeTodo(action: RemoveTodoAction) {
  try {
    yield call(axios.delete, `${API_URL}/todo/delete/${action.id}`);
    yield put(deleteTodo(action.id)); // Dispatch the action to remove the todo
  } catch (error) {
    yield put(setError(error.message)); // Dispatch the error
  } finally {
  }
}

// Worker saga for editing a todo
function* editTodo(action: EditTodoAction) {
  try {
    const response = yield call(
      axios.patch,
      `${API_URL}/todo/update/${action.todo._id}`,
      {
        title: action.todo.title,
      }
    );
    yield put(updateTodo(response.data)); // Dispatch the action to update the todo
  } catch (error) {
    yield put(setError(error.message)); // Dispatch the error
  } finally {
  }
}

// Watcher saga
export function* watchTodoSagas() {
  yield takeEvery("FETCH_TODOS", fetchTodos);
  yield takeEvery("CREATE_TODO", createTodo);
  yield takeEvery("REMOVE_TODO", removeTodo);
  yield takeEvery("EDIT_TODO", editTodo);
}
