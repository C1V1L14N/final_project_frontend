import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {Route, useParams, BrowserRouter as Router} from 'react-router-dom';



const ShopDetails = () => {

    const shopId = useParams().shopId;

    const [shop, setShop]= useState(null);

    useEffect(() => {
        fetch(`http://localhost:8080/shops/${shopId}`)
        .then(res => res.json())
        .then(data => setShop(data))
    }, []);

    
    // Removes seconds from the time format
    const prettyDate2 = (time) => {
        var date = new Date(parseInt(time));
        return date.toLocaleTimeString(navigator.language, {
          hour: '2-digit',
          minute:'2-digit'
        });
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
                <p>{shop.address}</p>
                <p>{shop.postcode}</p>
                <p>{shop.town}</p>
                <p>{shop.openingHour}</p>
                <p>{shop.closingHour}</p>
                <p>{shop.telephoneNumber}</p>
                <p>{shop.email}</p>
                <div className="additional-details">
                    <p id="text-p">Category: </p>
                    <div className="link-box-list">
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
                </div>
            </div>
            <div className="additional-details">
                <p id="text-p">Services: </p>
                <div className="link-box-list">
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
            
            {/* <p>{shop.services[0].name}</p>
            <p>{shop.categories[0].name}</p> */}
        </div>
    )

}

export default ShopDetails;