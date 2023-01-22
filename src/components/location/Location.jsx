import React from "react";
import "./location.css";

const Location = () => {
  return (
    <div className="mt-5">
      <h1 style={{ fontSize: "40px" }} className="mx-2">
        <i>Location</i>
      </h1>
      <span style={{ color: "#6a6b7c", fontSize: "25px" }} className="px-3">
        Address:
      </span>
      <p style={{ color: "#171822", fontSize: "16px" }} className="px-3">
        Sanjay Gandhi Nagar Colony Cottonmill Varanasi
      </p>

      <span style={{ color: "#6a6b7c", fontSize: "25px" }} className="px-3">
        Phone:
      </span>
      <p style={{ color: "#171822", fontSize: "16px" }} className="px-3">
        8840036604,7985132661{" "}
      </p>
      <span style={{ color: "#6a6b7c", fontSize: "25px" }} className="px-3">
        Email:
      </span>
      <p style={{ color: "#171822", fontSize: "16px" }} className="px-3">
        aayojageventplanner@gmail.com
      </p>
    </div>
  );
};

export default Location;
