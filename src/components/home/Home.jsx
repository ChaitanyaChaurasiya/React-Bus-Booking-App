import React from "react";
import Bbservices from "./bbservices/Bbservices";
import Main from "./main/Main";
import Recommended from "./recommended/Recommended";

const Home = () => {
  return (
    <>
      <Main />
      <Bbservices />
      <Recommended />
    </>
  );
};

export default Home;
