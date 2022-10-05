import React from "react";
import Heading from "../../common/Heading";
import "./bbservices.css";
import BbservicesCard from "./BbservicesCard";

const Bbservices = () => {
  return (
    <>
      <section className="bbservices background">
        <div className="container">
          <Heading
            title="WE PROMISE TO DELIVER"
            subtitle="Our goal is to provide you maximum benefits, Great Experience with low prices"
          />
          <BbservicesCard />
        </div>
      </section>
    </>
  );
};

export default Bbservices;
