import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  render() {
    return (
      <form id="form-data" action="/" method="post" >
        <h3 className="form-heading">Contact with us</h3>
        <span className="name-label">Your Name:</span> <br />
        <input type="text" name="full-name" placeholder="Your Name" className="name-input" />
        <br />
        <span className="name-label">Email:</span> <br />
        <input type="email" name="email" placeholder="Email" className="name-input" /> <br />
        <span className="name-label">Phone</span>
        <br />
        <input
          type="tel"
          name="phoneNumber"
          placeholder="Phone"
          className="name-input"
        />
        <br />
        <span className="name-label">Message</span> <br />
        <textarea rows="5" name="message" cols="50" placeholder="type your message here" className="name-input"></textarea>
        <button type="submit" className="btn btn-outline-success btn-lg form-button">Submit</button>
      </form>
    );
  }
}



export default Form;
