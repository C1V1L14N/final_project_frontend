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
            <div className="shop-image">
                <img src={shop.image} alt="no available"/>
            </div>
            <div className="details">
                <h4>{shop.name}</h4>
                <p>{shop.address}</p>
                <p>{shop.postcode}</p>
                <p>{shop.town}</p>
                <p>{shop.openingHour}</p>
                <p>{shop.closingHour}</p>
                <p>{shop.telephoneNumber}</p>
                <p>{shop.email}</p>
                Category:
                {shop.categories
                    ? shop.categories.map((category, index) => {
                        return(
                            <div key={index}>
                                {category.name}
                            </div>
                        );
                    })
                : ""}
            </div>
            <div className="additional-details">
            <p>Services:</p>
            {shop.services
                ? shop.services.map((service, index) => {
                    return(
                        <div key={index}>
                            <Link id="image-link" to={`/service/${service.id}`}><p>{service.name}</p></Link>
                        </div>
                    );
                })
            : ""}
            

            <br/>
            
            
            </div>
            
            
            {/* <p>{shop.services[0].name}</p>
            <p>{shop.categories[0].name}</p> */}
        </div>
    )

}

export default ShopDetails;