import React, { useState } from "react";
import moment from "moment";
import Heading from "../../common/Heading";
import "./main.css";
import { AiOutlineSearch } from "react-icons/ai";
import { useHistory } from "react-router-dom";

const Main = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    date: moment().format("YYYY-MM-DD"),
  });

  const handleChange = (event) => {
    event.preventDefault();
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.from !== "" && formData.to !== "" && formData.date !== "") {
      history.push(
        `/searchbus?from=${formData.from}&to=${formData.to}&date=${formData.date}`
      );
    }
  };
  return (
    <>
      <section className="main">
        <div className="container">
          <Heading
            title="Search Your Bus and Book Now "
            subtitle="Find the bus with great deal and discounts. Enjoy your Journey."
          />
          <form className="flex" onSubmit={handleSubmit}>
            <div className="box">
              <span>From</span>
              <input
                name="from"
                type="text"
                placeholder="Location"
                onChange={handleChange}
                value={formData.from}
                required={true}
              />
            </div>
            <div className="box">
              <span>To</span>
              <input
                name="to"
                type="text"
                placeholder="Destination"
                onChange={handleChange}
                value={formData.to}
                required={true}
              />
            </div>
            <div className="box">
              <span>Pick a Date</span>
              <input
                name="date"
                type="date"
                onChange={handleChange}
                min={moment().format("YYYY-MM-DD")}
                value={formData.date}
                required={true}
              />
            </div>
            <div className="box">
              <button type="submit" className="flex">
                <AiOutlineSearch className="iconSearch" />
                <h3>Search Buses</h3>
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Main;
