import React from "react";
import Heading from "../../common/Heading";
import "./recommended.css";
import RecommendedCard from "./RecommendedCard";

const Recommended = () => {
  return (
    <>
      <section className="recommended padding">
        <div className="container">
          <Heading title="RECOMMENDED BUSES WITH BEST PRICES ONLY FOR YOU " />
          <RecommendedCard />
        </div>
      </section>
    </>
  );
};

export default Recommended;
