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
        <div>
            <h4>{shop.name}</h4>
            <p>{shop.address}</p>
            <p>{shop.postcode}</p>
            <p>{shop.town}</p>
            <p>{shop.openingHour}</p>
            <p>{shop.closingHour}</p>
            <p>{shop.telephoneNumber}</p>
            <p>{shop.email}</p>  
            <img src={shop.image} alt="no available"/>
            {/* <p>{shop.services[0].name}</p>
            <p>{shop.categories[0].name}</p> */}
        </div>
    )

}

export default ShopDetails;