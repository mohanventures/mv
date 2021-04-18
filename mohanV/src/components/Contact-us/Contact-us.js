import React from "react";
import "./Contact-us.css";

function Contact() {
  return (
    <div id="contact-main">
      <div  className="phone-number">
        <div>
          <h3>Phone:</h3>
        </div>
        <div>
          <p>xxxxxxxxxxx</p>
          <p>xxxxxxxxxxx</p>
        </div>
      </div>
      <div className="email-id">
      <div>
          <h3>Email:</h3>
        </div>
        <div>
          <p>xxxxxxxxxxx@mv.com</p>
          <p>xxxxxxxxxxx@mv.com</p>
        </div>
      </div>
      <div  className="address">
      <div>
          <h3>Address:</h3>
        </div>
        <div>
          <p>loreaum ipsum </p>
          <p>loreaum ipsum </p>
          <p>loreaum ipsum </p>
          <p>loreaum ipsum </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
