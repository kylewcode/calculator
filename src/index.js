import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // (Removing this will remove background-color from Wrapper.js. 50%)(True 100%)
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
