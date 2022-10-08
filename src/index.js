import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// No longer supported in React18
// ReactDOM.render(<h1>My App</h1>, document.getElementById("root"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
