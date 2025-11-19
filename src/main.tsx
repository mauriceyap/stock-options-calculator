import "@fontsource-variable/rubik";
import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./app";

import "./index.css";

const container = document.getElementById("root");

if (container === null) {
  throw new Error('DOM element with ID "root" was not found');
}

ReactDOM.createRoot(container).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
