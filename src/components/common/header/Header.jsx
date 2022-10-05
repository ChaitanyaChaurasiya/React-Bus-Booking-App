import React, { useState } from "react";
import "./header.css";
import { nav } from "../../data/Data";
import { Link } from "react-router-dom";
import busLogo from "../../../assets/bus-logo.png";
import { BiLogIn } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineCloseCircle } from "react-icons/ai";
const Header = () => {
  const [navList, setNavList] = useState(false);

  return (
    <>
      <header>
        <div className="container flex">
          <div className="logo flex">
            <img src={busLogo} alt="bus-logo" />
            <h1 className="logoName">BusBooking</h1>
          </div>
          <div className="nav">
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="button flex">
            <button className="btn1 flex">
              <BiLogIn className="iconSign" />
              <h3>Sign In</h3>
            </button>
          </div>

          <div className="toggle">
            <button onClick={() => setNavList(!navList)} className="btnToggle">
              {navList ? (
                <AiOutlineCloseCircle className="toggleIcon" />
              ) : (
                <GiHamburgerMenu className="toggleIcon" />
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
