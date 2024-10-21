"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("./App.css");
const AddTodo_1 = __importDefault(require("./Components/AddTodo"));
const TodoList_1 = __importDefault(require("./Components/TodoList"));
TodoList_1.default;
function App() {
  return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, {
    children: [
      (0, jsx_runtime_1.jsx)("h1", { children: "Todo App" }),
      (0, jsx_runtime_1.jsx)(AddTodo_1.default, {}),
      (0, jsx_runtime_1.jsx)(TodoList_1.default, {}),
    ],
  });
}
exports.default = App;
