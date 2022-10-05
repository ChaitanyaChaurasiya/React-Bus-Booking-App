import React from "react";
import busImg3 from "../../assets/bus-img3.jpg";
import Back from "../common/Back";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <section className="contact mb">
        <Back
          name="Contact Us & Feedback"
          title="Get Helps & Friendly Support, Also Provide Your Valuable Feedback"
          cover={busImg3}
        />
        <div className="container">
          <form className="shadow">
            <h4>Fillup The Form</h4> <br />
            <div>
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Email" />
            </div>
            <input type="text" placeholder="Subject" />
            <textarea cols="30" rows="10"></textarea>
            <button>Submit Request</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;

//covw={img}
