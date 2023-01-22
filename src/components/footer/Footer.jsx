import React from "react";
import "./footer.css";
import logo from "../../assets/images/aayojag-logo-main.jpeg";
import { CgCopyright } from "react-icons/cg";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-dark" style={{ color: "#a0a1b5" }}>
      <div className="d-flex flex-column justify-content-center align-items-center my-2">
        <img src={logo} from alt="" className="footerLogo my-2" />
        <div className="d-flex">
          <p style={{ fontSize: "20px" }} className="px-4">
            Home
          </p>
          <p style={{ fontSize: "20px" }}>
            Contact Us{" "}
            <a href="https://instagram.com/aayojagevents?igshid=ZDdkNTZiNTM=">
              <BsInstagram />
            </a>
          </p>
        </div>
        <p>
          Copyright <CgCopyright />
          2023 All rights reserved
        </p>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
