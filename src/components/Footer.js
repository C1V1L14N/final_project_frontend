import React from "react";
import styled from 'styled-components';

function Footer() {

    const Footer = styled.footer`
    height: 100px;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    position: absolute;
    bottom: 0;
    `;

    const FooterList1 = styled.a`
        position: relative;
        margin-left: auto;
        padding: 20px;
        right: 0;
        color: #333333;
        font-family: Didot, sans-serif;
        font-size: 25px;
    `;

    const FooterList2 = styled.a`
    position: relative;
    padding: 20px;
    right: 0;
    color: #333333;
    font-family: Didot, sans-serif;
    font-size: 25px;
    `;

    const Slogan = styled.p`
    position: relative;
    padding: 0;
    justify-content: right;
    color: #333333;
    font-family: Didot, sans-serif;
    font-size: 25px;
    top: -40px;
    left: 10px;
    `;


    return(
        <Footer>
            <Slogan>Shop Quality. Shop Friendly. Shop Local.</Slogan>

            <FooterList1 href="/">Contact</FooterList1>
            
            <FooterList2 href="/">Project Brief</FooterList2>

        </Footer>
    )
}

export default Footer;