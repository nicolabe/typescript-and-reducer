import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { TodoWrapper } from "./components/TodoContext";

ReactDOM.render(
  <React.StrictMode>
    <TodoWrapper>
      <App />
    </TodoWrapper>
  </React.StrictMode>,
  document.getElementById("root")
);
