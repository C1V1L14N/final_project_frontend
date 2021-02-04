import styled from 'styled-components';
import React from "react";
import { Link } from "react-router-dom";

import basket from "../assets/shopping-basket.png";
import logo from "../assets/Logo.png";





function NavBar() {

    const Header = styled.div`
        display: flex;
        flex-direction: row;
        flex-grow: 1;
        height: 110px;
    `;

    const Text = styled.p`
        color: #333333;
        text-decoration: none;

        :hover {
            color: #2c66a8;
        }
    `;

    const Li = styled.li`
        list-style-type: none;
        list-style: none;
        padding: 15px;
        text-decoration: none;
        font-family: Didot, sans-serif;
        font-size: 25px;
    `;

    const Img = styled.img`
        padding: 15px;
        position: relative;
        top: 5px;
        height: 30px;
        width: auto;
        margin-right: 50px;

        :hover {
            color: #2c66a8;
        }
    `;

    const Logo = styled.img`
    top: 5px;
    left: 5px;
    height: 100px;
    width: auto;
    position: absolute;
    `;

    const Ul = styled.ul`
        display: flex;
        flex-direction: row;
        margin-left: auto;
    `;

    const Filters = styled.ul`
    position: absolute;
    top: 70px;
    display: flex;
    flex-direction: row;
    margin: 0;
    left: -45px;
    `;


    return(
        <Header>
            <Link style={{Text}} to="/"><Logo src={logo} alt="logo"></Logo></Link>

            <Filters>
                <Li>
                    <Link className="text-decoration" to="/service"><Text>All Services</Text></Link>
                </Li>
                <Li>
                    <Link className="text-decoration" to="/category"><Text>All Categories</Text></Link>
                </Li>
                <Li>
                    <Link className="text-decoration" to="/shop"><Text>All Shops</Text></Link>
                </Li>
            </Filters>

            <Ul>
                <Li>
                    <Link className="text-decoration" to="/about"><Text>About</Text></Link>
                </Li>
                <Li>
                    <Link className="text-decoration" to="/shop"><Text>Shop</Text></Link>
                </Li>
                <Li>
                    <Link className="text-decoration" to="/basket"><Img src={basket} alt="basket"></Img></Link>
                </Li>
            </Ul>
        </Header>
    )
}

export default NavBar;