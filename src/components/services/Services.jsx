import React from "react";
import busImg2 from "../../assets/bus-img2.jpg";
import Back from "../common/Back";
import "../home/bbservices/bbservices.css";
import BbservicesCard from "../home/bbservices/BbservicesCard";

const Services = () => {
  return (
    <>
      <section className="services mb">
        <Back
          name="Services"
          title="Services - All Services Provided By BUS BOOKING"
          cover={busImg2}
        />
        <div className="bbservices container">
          <BbservicesCard />
        </div>
      </section>
    </>
  );
};

export default Services;
