import React, { useState } from "react";
import "./header.css";
import logo from "../../assets/images/aayojag-logo-main.jpeg";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="header bg-light d-flex justify-content-between shadow-sm py-2 px-2 align-items-center position-relative">
      <div>
        <img src={logo} alt="" className="mainLogo" />
      </div>
      <div className="d-md-none">
        <AiOutlineMenu
          className="menuIcon"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        {menuOpen && (
          <div className="bg-dark position-absolute menuListContainer">
            <ul className="menuList d-flex flex-column justify-content-center align-items-center">
              <li className="list-items">Home</li>
              <li className="list-items">About</li>
              <li className="list-items">Contact Us</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
