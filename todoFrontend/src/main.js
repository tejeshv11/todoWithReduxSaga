"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const client_1 = require("react-dom/client");
const App_jsx_1 = __importDefault(require("./App.jsx"));
require("./index.css");
const react_redux_1 = require("react-redux");
const store_js_1 = __importDefault(require("../src/Stores/store.js"));
(0, client_1.createRoot)(document.getElementById("root")).render((0, jsx_runtime_1.jsx)(react_redux_1.Provider, { store: store_js_1.default, children: (0, jsx_runtime_1.jsx)(App_jsx_1.default, {}) }));
