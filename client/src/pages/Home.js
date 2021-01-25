import React from "react";
import Intro from "../components/Intro";
import Crypto from "../components/Crypto";
import Links from "../components/Links";
import Twitter from "../components/Twitter";

const Home = () => {
  return (
    <div style={{ width: "100%" }}>
      <Intro />
      <Crypto />
      <Twitter page="BBC News Africa" screenName="BBCAfrica" />
      <Twitter page="Ethereum" screenName="ethereum" />
      <Links />
    </div>
  );
};

export default Home;
