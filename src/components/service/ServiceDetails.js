import React, { useEffect, useState } from "react";
// import {useParams, BrowserRouter as Router} from 'react-router-dom';


const ServiceDetails = ({service}) => {

    // const serviceId = useParams().serviceId;


    if (!service){
        return <p>Loading...</p>
    }
    return (
        <div className="main-container">
            <div className="details">
                <h4>{service.name}</h4>
                <p>{service.description}</p>
                <p>£{service.price}</p>
                <p>{service.duration} mins</p>
            </div>
        </div>
        
    )

}

export default ServiceDetails;