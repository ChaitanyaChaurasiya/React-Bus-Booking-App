import React from "react";
import Header from "../components/common/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../components/home/Home";
import Footer from "../components/common/footer/Footer";
import About from "../components/about/About";
import Services from "../components/services/Services";
import Contact from "../components/contact/Contact";
import SearchBus from "../components/searchBus/SearchBus";
import MyBooking from "../components/myBooking/MyBooking";

const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/searchbus" component={SearchBus} />
          <Route exact path="/mybooking" component={MyBooking} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default Pages;
