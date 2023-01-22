import React from "react";
import "./heroSection.css";
import holiBanner from "../../assets/images/holiBanner.png";

const HeroSection = () => {
  return (
    <div>
      <img src={holiBanner} alt="" className="holiBanner" />
    </div>
  );
};

export default HeroSection;
