
import React from "react";
import { Link } from "react-router-dom";
import basket from "../assets/shopping-basket.png";
import logo from "../assets/Logo.png";
import './navBar.css';



function NavBar() {

    return(
        <div className="header">

                <div className="logo-container">
                    <Link style={{Text}} to="/"><img id="logo" src={logo} alt="logo"/></Link>
                </div>
                <div className="nav-left-container">
                    <li>
                        <Link className="nav-link" to="/service">All Services</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/category">All Categories</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/shop">All Shops</Link>
                    </li>
                </div>

                <div className="nav-right-container">
                    <li>
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/shop">Shop</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/basket"><img id="basket" src={basket} alt="basket"/></Link>
                    </li>
                </div>

        </div>
    )
}

export default NavBar;