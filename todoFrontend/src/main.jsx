// Importing Modules and Libraries
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "../src/Stores/store.ts";

// Root Element of React
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
