import '../app.css';
import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import basket from "../assets/shopping-basket.png"
import logo from "../assets/Logo.png"
import Categories from '../components/Categories'



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
            color: blue;
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


    return(
        <Header>
            <Link style={{Text}} to="/"><Logo src={logo} alt="logo"></Logo></Link>

            <Categories/>

            

            <Ul>
                <Li>
                    <Link to="/about"><Text>About</Text></Link>
                </Li>
                <Li>
                    <Link to="/shop"><Text>Shop</Text></Link>
                </Li>
                <Li>
                    <Link to="/basket"><Img src={basket} alt="basket"></Img></Link>
                </Li>
            </Ul>
        </Header>
    )
}

export default NavBar;