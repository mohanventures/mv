import React from "react"
import "./Consulting.css"
import cons from "../../assets/images/cons.png"


function Consulting () {
    return(
        <div id="consulting">
            <div className="cons-details">
                <h2 className="cons-heading">Consulting: </h2>
                <p className="cons-content">With a vast experience in developing and scaling B2B as well as Consumer Digital Products, Mohan Ventures can partner with you to devise and execute product development and Go-to-Market strategy. We have managed digital products ranging from Banking to Media OTT with more than 200 Million Monthly Active Users. </p>
            </div>
            <div>
                <img className="cons-image" src={cons} alt="consulting" />
            </div>
        </div>
    )
}


export default Consulting;