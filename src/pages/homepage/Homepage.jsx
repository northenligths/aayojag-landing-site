import React from "react";
import AboutUs from "../../components/aboutUs/AboutUs";
import EventTypes from "../../components/eventTypes/EventTypes";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import HeroSection from "../../components/heroSection/HeroSection";
import Location from "../../components/location/Location";
import "./homepage.css";

const Homepage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutUs />
      <EventTypes />
      <Location />
      <Footer />
    </div>
  );
};

export default Homepage;
