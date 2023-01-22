import React from "react";
import AboutUs from "../../components/aboutUs/AboutUs";
import EventTypes from "../../components/eventTypes/EventTypes";
import Header from "../../components/header/Header";
import HeroSection from "../../components/heroSection/HeroSection";
import "./homepage.css";

const Homepage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutUs />
      <EventTypes />
    </div>
  );
};

export default Homepage;
