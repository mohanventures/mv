import React from "react";
import self from "../../assets/images/self.jpeg";
import "./Intro.css";

function Intro() {
  return (
    <div id="intro-content">
      <div className="glass-wrapper">
      <div>
        <img className="self-img" src={self} alt="bussiness consultant" />
      </div>
      <div className="intro-line">
          <h3>Mohan ventures</h3> <br/>
          <p>Lorem ipsum dolor sit amet,
           consectetur adipiscing elit,
           sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
      </div>
      </div>
    </div>
  );
}

export default Intro;
