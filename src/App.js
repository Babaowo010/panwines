import { Outlet, React, ScrollRestoration } from "react-router-dom";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import React from "react";
// import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <Outlet />
      <ScrollRestoration />
    </div>
  );
}

export default App;
