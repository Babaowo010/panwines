import React from "react";
import ReactDOM from "react-dom/client";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./index.css";
import App from "./App";
import { RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { router } from "./rout/rout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
