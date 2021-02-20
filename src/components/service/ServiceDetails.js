import React, { useEffect, useState } from "react";
import {useParams, BrowserRouter as Router} from 'react-router-dom';


const ServiceDetails = () => {

    const serviceId = useParams().serviceId;

    const [service, setService]= useState(null);
    useEffect(() => {
        fetch(`http://localhost:8080/services/${serviceId}`)
        .then(res => res.json())
        .then(data => setService(data))
    }, [])
    


    if (!service){
        return <p>Loading...</p>
    }
    return (
        <div className="service-text">
            <h4>{service.name}</h4>
            <p>{service.description}</p>
            <p>£{service.price}</p>
            <p>{service.duration} mins</p>
        </div>
    )

}

export default ServiceDetails;