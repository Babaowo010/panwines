import { React } from "react-router-dom";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/nav/nav";
import Middle from "./components/body/body";
import Area from "./components/box/box";
import Vagan from "./components/first/first";
import Neon from "./components/peck/peck";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Middle />
      <Area />
      <Vagan />
      <Neon />
    </div>
  );
}

export default App;
