import React from "react";
import Back from "../common/Back";
import Heading from "../common/Heading";
import busImg1 from "../../assets/bus-img1.jpg";
import busImg from "../../assets/bus.jpg";
import "./about.css";

const About = () => {
  return (
    <>
      <section className="about">
        <Back
          name="About Us"
          title="About Us - Know about Us Who We Are?"
          cover={busImg1}
        />
        <div className="container flex mtop">
          <div className="left ">
            <Heading
              title="Know About Bus Booking App"
              subtitle="Check out our journey from start to end"
            />

            <p>
              Bus Booking App designed in 2022 to provide the service of bus
              booking to the customers. It has interactive user interfaces which
              customers liked most. It provides great services start from ticket
              booking to the end of the journey.
            </p>
            <p>
              Bus Booking App is now world's largest online bus ticket booking
              service trusted by over millions of happy customers globally. It
              offers bus ticket booking through its website for all major
              routes. (The Purpose of information is only for demo)
            </p>
            <button className="btn2">More About Us</button>
          </div>
          <div className="right row">
            <img src={busImg} alt="bus-images" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
