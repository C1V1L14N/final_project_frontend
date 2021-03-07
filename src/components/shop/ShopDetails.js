import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import {Route, useParams, BrowserRouter as Router} from 'react-router-dom';



const ShopDetails = ({shop}) => {

    // const shopId = useParams().shopId;

    
    // Removes seconds from the time format
    const removeSeconds = (time) => {
        if(time) {
            return time.replace(/:[^:]*$/,'');
        }
    }
    

    if (!shop){
        return <p>Loading...</p>
    }
    return (
        <div className="main-container">
            <div className="details-image" id="details-image-shop" >
                <h4>{shop.name}</h4>
                <img src={shop.image} alt="not available"/>
            </div>
            <div className="details">
                <p>Address: {shop.address}, {shop.town} {shop.postcode}</p>
                <p>Hours: {removeSeconds(shop.openingHour)} - {removeSeconds(shop.closingHour)}</p>
                <p>Phone: {shop.telephoneNumber}</p>
                <p>Email: {shop.email}</p>
            </div>
            <div className="additional-details">
                <div className="link-box-list">
                    <p id="text-p">Category: </p>
                    {shop.categories
                        ? shop.categories.map((category, index) => {
                            return(
                                <div key={index}>
                                    <p id="text-p">{category.name}</p>
                                </div>
                            );
                        })
                    : ""}
                </div>
                <div className="link-box-list">
                    <p id="text-p">Services: </p>
                    {shop.services
                        ? shop.services.map((service, index) => {
                            return(
                                <div key={index}>
                                    <Link className="link-box" id="text-link" to={`/service/${service.id}`}>{service.name}</Link>
                                </div>
                            );
                        })
                    : ""}
                </div>
            </div>
        </div>
    )

}

export default ShopDetails;