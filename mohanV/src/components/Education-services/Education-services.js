import React from "react"
import "./Education-services.css"
import eduImage from "../../assets/images/edu.png"


function Education () {
    return(
        <div id="edu-main">
            <div>
                <img className="edu-image" src={eduImage} alt="education" />
            </div>
            <div className="edu-details">
                <h2>Education Services:</h2>
                <p className="edu-content"> Higher Education or Immigration on your mind? Come on-board and sail with us! With phenomenal scores and personalized programs in test preparation, we offer training across Quantitative Aptitude, English and Analytics for standard tests such as GMAT, PTE, IELTS, CAT and NAATI. </p>
            </div>
        </div>
    )
}


export default Education;