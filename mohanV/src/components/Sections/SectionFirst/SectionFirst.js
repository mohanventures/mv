import React from "react";
import bussinessImage from "../../../assets/images/bussiness.jpg"
import consulting from "../../../assets/images/consulting.jpeg"
import "./SectionFirst.css";
import {NavLink} from "react-router-dom"

function Sectionfirst() {
  return (
    <section id="card-section" >
      <div className="card first-card">
        <img src={bussinessImage} className="card-img-top edu-img" alt="bussiness developement" />
        <div className="card-body">
          <h5 className="card-title">Business Developement</h5>
          <ul className="list-item">
            <li>Your content</li>
            <li>Your content</li>
            <li>Your content</li>
          </ul>
          <NavLink to="/business-developement" className="btn btn-primary card-button">
          Click Here
          </NavLink>
        </div>
      </div>

      <div className="card first-card middle-card">
        <img src={consulting} className="card-img-top edu-img" alt="consulting" />
        <div className="card-body">
          <h5 className="card-title">Consulting</h5>
          <ul className="list-item">
            <li>Your content</li>
            <li>Your content</li>
            <li>Your content</li>
          </ul>
          <NavLink to="/consulting" className="btn btn-primary card-button">
          Click Here
          </NavLink>
        </div>
      </div>

      <div className="card first-card">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHbpGGSXssSgeEOCUQrAR9vC67wfcJOM_gtA&usqp=CAU" className="card-img-top edu-img" alt="Education Servicess" />
        <div className="card-body">
          <h5 className="card-title">Education Services</h5>
          <ul className="list-item">
            <li>Your content</li>
            <li>Your content</li>
            <li>Your content</li>
          </ul>
          <NavLink to="/education-services" className="btn btn-primary card-button">
          Click Here
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default Sectionfirst;
