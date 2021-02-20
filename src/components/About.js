import React from "react";
import './about.css'
import street from '../assets/charlie-green-yAMPbrx-vQE-unsplash.jpg'

function About() {


    return(

        <div id="about-box">
            <h1 className="about-heading">About Shop Local</h1>
            <p className="about-paragraph">Shop Local is a site that was born in a time when gathering en mass has become , hopefully temporarily, a thing of the past.
                As businesses reopen and as lockdown lifts, there will be a need to organise and track times that are available for consumers to be able to enter businesses.
                bla bla bla...
            </p>
            <img id="street-img" src={street} alt="high-street"/>
        </div>
    )
}

export default About;