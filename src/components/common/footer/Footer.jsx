import React from "react";
import { footer } from "../../data/Data";
import busLogo from "../../../assets/bus-logo.png";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footerBox container">
          <div className="container1">
            <div className="box">
              <div className="logo flex1">
                <img src={busLogo} alt="bus-logo" />
                <h1>BusBooking</h1>
              </div>

              <h2>Do You Need Help With Anything?</h2>
              <p>
                Receive updates, hot deals, discounts sent straignt in your
                inbox every time
              </p>

              <div className=" flex1">
                <input type="text" placeholder="Email Address" />
                <button>Subscribe</button>
              </div>
            </div>
          </div>
          <div className="container2">
            {footer.map((val, valIndex) => (
              <div className="box" key={valIndex}>
                <h3>{val.title}</h3>
                <ul>
                  {val.text.map((items, index) => (
                    <li key={index}> {items.list} </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </footer>
      <div className="legal">
        <span>
          © 2022 Bus Booking App. Designd By Bus Booking Team Members.
        </span>
      </div>
    </>
  );
};

export default Footer;
