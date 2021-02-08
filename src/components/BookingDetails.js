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
    
    // Removes seconds from the time format
    const prettyDate2 = (time) => {
        var date = new Date(parseInt(time));
        return date.toLocaleTimeString(navigator.language, {
          hour: '2-digit',
          minute:'2-digit'
        });
    }


    if (!booking){
        return <p>Loading...</p>
    }
    return (
        <div className="details">
            <p>Reference number: {booking.date_booking_made}-{booking.id}</p>
            <h4>Booked services: {booking.services
                ? booking.services.map((service, index) => {
                    return(
                        <div key={index}>
                            <h4>{service.name}</h4>
                        </div>
                    );
                })
            : ""}
            </h4>
            <p>Booking for {booking.user.firstName} {booking.user.lastName} on {booking.date_of_booking}</p>
            {/* <p>at {prettyDate2(booking.arrival_time)}</p> */}
            <p>at {booking.arrival_time}</p>
            <p>{booking.comments}</p>
        </div>
    )

}

export default BookingDetails;