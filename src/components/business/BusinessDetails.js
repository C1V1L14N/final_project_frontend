import React, { useEffect, useState } from "react";
import NewService from "../service/NewService"
import { Link } from "react-router-dom";
import {Route, useParams, BrowserRouter as Router} from 'react-router-dom';
import './business.css'



const BusinessDetails = () => {

    const shopId = useParams().businessId;

    const [shop, setShop]= useState(null);

    useEffect(() => {
        fetch(`http://localhost:8080/shops/${shopId}`)
        .then(res => res.json())
        .then(data => setShop(data))
    }, []);

    
    // Service Form Toggle
    const useToggle = (initialValue = false) => {
        const [value, setValue] = React.useState(initialValue);
        const toggle = React.useCallback(() => {
          setValue(v => !v);
        }, []);
        return [value, toggle];
    }

    const [isOn, toggleIsOn] = useToggle();


    // Add Service to Shop
    const serviceData = (serviceDetails) => {
        fetch(`http://localhost:8080/shops/${shopId}/services/`, {
            method: 'POST',
            body: JSON.stringify(serviceDetails),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(() => window.location = "/shop")
    }
    
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
                    <div className="service-element">
                            {isOn
                            ? <a className="link-box" id="red" onClick={toggleIsOn}>Cancel</a>
                            : <a className="link-box" id="green" onClick={toggleIsOn}>Add service</a>}
                    </div>
                    {isOn
                        ?  <div>
                            <NewService onSubmit={serviceData}/>
                        </div>
                    : null}
                    {shop.services
                        ? shop.services.map((service, index) => {
                            return(
                                <div className="service-element" key={index}>
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

export default BusinessDetails;