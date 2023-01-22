import React from "react";
import "./aboutUs.css";
import aboutUsImage from "../../assets/images/aboutUsImage.jpeg";

const AboutUs = () => {
  return (
    <div>
      <div>
        <img src={aboutUsImage} alt="" className="aboutUsImage" />
      </div>
      <div className="aboutUsContent mx-3 mt-3">
        <h1 className="aboutUsHeading">
          <i>About Aayojag Events</i>
        </h1>
        <p className="aboutUsPara mt-4">
          Aayojag Event & Planner is a event company which plans & customise
          your event according to your wishes & needs. Aayojag events & planner
          deals in every type of event ie., social events, corporate events,
          entertainment events, weddings, theme parties,exhibitions etc.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
