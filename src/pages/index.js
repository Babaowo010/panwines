import React from "react";
import Navbar from "../components/nav/nav";
import Middle from "../components/body/body";
import Area from "../components/box/box";
import Vagan from "../components/first/first";
import Neon from "../components/peck/peck";

function Home() {
  return (
    <div className="page-div">
      <Navbar home={true} />
      <Middle />
      <Area />
      <Vagan />
      <Neon />
    </div>
  );
}

export default Home;
