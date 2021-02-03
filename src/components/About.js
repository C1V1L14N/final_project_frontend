import React from "react";
import styled from 'styled-components';

function About() {

    const Heading = styled.h1`
        position: relative;
        top: 80px;
        color: white;
        text-align: center;
        font-family: sans-serif;
        z-index: 2;
    `;

    const Paragraph = styled.p`
        position: relative;
        text-align: center;
        margin: 100px;
        font-family: sans-serif;
        font-size: 25px;
        color: white;
        z-index: 2;
    `;

const Border = styled.div`
position: absolute;
    height: 600px;
    width: 100vw;
    background-color: #333333;
    left: -5px;
    z-index: 1;
    top: 150px;
`;

    return(

        <div>
            <Heading>About Shop Local</Heading>

            

            <Paragraph>Shop Local is a site that was born in a time when gathering en mass has become , hopefully temporarily, a thing of the past.
                As businesses reopen as lockdown lifts, there will be a need to organise and track times that are available for consumers to be able to enter businesses.
                bla bla bla...
            </Paragraph>

            <Border/>
        </div>
    )
}

export default About;