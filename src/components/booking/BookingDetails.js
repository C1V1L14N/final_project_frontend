import React, { useEffect, useState } from "react";
import {useParams, BrowserRouter as Router} from 'react-router-dom';


const BookingDetails = () => {

    const bookingId = useParams().bookingId;

    const [booking, setBooking]= useState(null);
    useEffect(() => {
        fetch(`http://localhost:8080/bookings/${bookingId}`)
        .then(res => res.json())
        .then(data => setBooking(data))
    }, [])
    


    if (!booking){
        return <p>Loading...</p>
    }
    return (
        <div className="main-container">
            <h4>{booking.id}</h4>
            <p>{booking.comments}</p>
        </div>
    )

}

export default BookingDetails;