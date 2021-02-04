import React from "react";
import styled from 'styled-components';
import street from '../assets/charlie-green-yAMPbrx-vQE-unsplash.jpg'

function About() {

    const AboutBox = styled.div`
        display: flex;
        flex-direction: column;
    `;

    const Heading = styled.h1`
        position: relative;
        top: 80px;
        color: #e3e3e3;
        text-align: center;
        font-family: Didot, sans-serif;
        z-index: 2;
    `;

    const Paragraph = styled.p`
        position: relative;
        text-align: center;
        margin: 100px;
        font-family: Didot, sans-serif;
        font-size: 25px;
        color: #e3e3e3;
        z-index: 2;
    `;


    const StreetImg = styled.img`
        position: relative;
        top: -90px;
        margin: auto;
        height: 250px;
        width: auto;
        z-index: 2;
    `;

    return(

        <AboutBox>
            <Heading>About Shop Local</Heading>

            

            <Paragraph>Shop Local is a site that was born in a time when gathering en mass has become , hopefully temporarily, a thing of the past.
                As businesses reopen and as lockdown lifts, there will be a need to organise and track times that are available for consumers to be able to enter businesses.
                bla bla bla...
            </Paragraph>

            <StreetImg src={street} alt="high-street"></StreetImg>


        </AboutBox>
    )
}

export default About;