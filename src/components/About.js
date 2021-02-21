import React from "react";
import './about.css'
// import street from '../assets/charlie-green-yAMPbrx-vQE-unsplash.jpg'
import cockburn from '../assets/cockburn-street.jpg'

function About() {


    return(

        <div className="main-container">
            <div className="details-image">
                <img src={cockburn} alt="high-street"/>
            </div>
            <div className="details">
                <h4>About Shop Local</h4>
                <p>Shop Local is a site that was born in a time when gathering en mass has become , hopefully temporarily, a thing of the past.
                    As businesses reopen and as lockdown lifts, there will be a need to organise and track times that are available for consumers to be able to enter businesses.
                    Shop Local aims to provide a service to help transition the shopping experience back to normality.</p>
            </div>
        </div>
    )
}

export default About;