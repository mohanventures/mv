import React from "react"
import "./Business-developement.css"
import paint from "../../assets/images/paint.jpg"


function Business() {
    return(
        <div  id="business-section">
            <div className="business-details">
                <h2>Business Development & Distribution:</h2>
                <p className="business-content">With a well-established Sales & Distribution channel in North India, Mohan Ventures optimizes partners’ or clients’ Time-to-Market and Revenue growth, building a strong brand portfolio in the process. We have a portfolio of global as well as domestic products ranging from anti-corrosion coating solutions to sports and fitness goods. </p>
            </div>
            <div>
                <img src={paint} alt="paint box" className="paintBox"/>
            </div>
        </div>
    )
}


export default Business;