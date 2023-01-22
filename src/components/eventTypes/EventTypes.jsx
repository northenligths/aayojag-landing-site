import React from "react";
import "./eventTypes.css";
import eventTypesBg from "../../assets/images/eventTypesBg.jpeg";
import { Card, Button } from "react-bootstrap";
import enterImage from "../../assets/images/entertainmentEvent.jpeg";
import corporateImage from "../../assets/images/CorporateEvent.jpeg";
import socialEvent from "../../assets/images/social event (2).webp";
import weddingImage from "../../assets/images/weddingImage.jpeg";

const EventTypes = () => {
  return (
    <div className="mt-2">
      <div className="position-relative">
        <img src={eventTypesBg} alt="" className="eventTypesBg " />
        <div className="position-absolute eventTypesHead">
          <div className="d-flex justify-content-center align-items-center flex-column">
            <h1 className="typesHeading">
              <i>Types of Events</i>
            </h1>
            <p className="eventPara">Get your event ticket/passes</p>
          </div>
          <div className="cards bg-white border rounded">
            <img src={socialEvent} alt="" className="cardsImage px-2 py-2" />
            <div className="eventHeadBg">
              <h1 className="cardsHeadText py-3">Social Events</h1>
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <ul className="eventDetails">
                <li className="py-1">Theme Parties</li>
                <li className="py-1">Birthday Parties</li>
                <li className="py-1">Anniversary Parties</li>
                <li className="py-1">BabyShower</li>
                <li className="py-1">Pool and Kitty Parties</li>
              </ul>
            </div>
          </div>
          <div className="cards bg-white border rounded my-2">
            <img src={weddingImage} alt="" className="cardsImage px-2 py-2" />
            <div className="eventHeadBg">
              <h1 className="cardsHeadText py-3">Wedding Events</h1>
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <ul className="eventDetails">
                <li className="py-1">Wedding Planning</li>
                <li className="py-1">Destination Wedding</li>
                <li className="py-1">Sangeet & Mehendi</li>
                <li className="py-1">Cocktail Evening</li>
                <li className="py-1">Reception Parties</li>
              </ul>
            </div>
          </div>
          <div className="cards bg-white border rounded my-2">
            <img src={corporateImage} alt="" className="cardsImage px-2 py-2" />
            <div className="eventHeadBg">
              <h1 className="cardsHeadText py-3">Corporate Events</h1>
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <ul className="eventDetails">
                <li className="py-1">Dealers Meeting</li>
                <li className="py-1">Promotional Activities</li>
                <li className="py-1">Family Dayout</li>
                <li className="py-1">Product Launch</li>
                <li className="py-1">TradeShows</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventTypes;
