// Importing all the modules and Libraries
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import todoReducer from "../Features/todoReducer";
import { watchTodoSagas } from "../Saga/todoSaga";

// Create saga middleware
const sagaMiddleware = createSagaMiddleware();

// Redux Store
const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware), // Saga middleware
});

// Run the saga
sagaMiddleware.run(watchTodoSagas);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
