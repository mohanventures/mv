import React from "react";
import "./Header.css";
import {NavLink} from "react-router-dom"
// import Contact from "../Contact-us/Contact-us"

function Header() {
  return (
    <header>
      <nav id="nav-bar">
        <div className="right-section">
          <a href="/">
            <h2 id="logo"> Mohan Ventures </h2>
          </a>
        </div>
        <div className="left-section">
          <span>
            <a href="/#card-section">Services</a>
          </span>
          <span className="about-us">
            <a href="/#intro-content">About us</a>
          </span>
          <span className="contact">
          <NavLink to="/contact">Contact</NavLink>
          </span>
          <span className="get-started">
            <a href="/" className="header-atag">
              Get Starded
            </a>
          </span>
        </div>
      </nav>
    </header>
  );
}

export default Header;
