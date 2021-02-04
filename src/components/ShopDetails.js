import React, { useEffect, useState } from "react";
import {Route, useParams, BrowserRouter as Router} from 'react-router-dom';


const ShopDetails = () => {

    const shopId = useParams().shopId;

    const [shop, setShop]= useState(null);
    // const [serviceList, setServiceList] = useState([])

    useEffect(() => {
        fetch(`http://localhost:8080/shops/${shopId}`)
        .then(res => res.json())
        .then(data => setShop(data))
    }, [])
    


    if (!shop){
        return <p>Loading...</p>
    }
    return (
        <div className="shop-details-container">
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
            </div>
            <div className="additional-details">
            <p>Services:</p>
            {shop.services
                ? shop.services.map((service, index) => {
                    return(
                        <div key={index}>
                            <p>{service.name}</p>
                        </div>
                    );
                })
            : ""}
            <br/>
            <p>Category:</p>
            {shop.categories
                ? shop.categories.map((category, index) => {
                    return(
                        <div key={index}>
                            <p>{category.name}</p>
                        </div>
                    );
                })
            : ""}
            </div>
            
            
            {/* <p>{shop.services[0].name}</p>
            <p>{shop.categories[0].name}</p> */}
        </div>
    )

}

export default ShopDetails;