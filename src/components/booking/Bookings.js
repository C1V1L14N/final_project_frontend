import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

function Bookings() {

    const [bookingList, setBookingList] = useState([]);

    const getBookingList = () => {
        axios.get(`http://localhost:8080/bookings/`)
        .then(res => {
          console.log(res);
          setBookingList(res.data)
        });
      };
    
      useEffect(() => {
        getBookingList();
      }, []);


    return(
      <div className="main-container">
        <Link id="new-form-link" to="/new-booking"><h2>Create booking</h2></Link>
        {bookingList
            ? bookingList.map((booking, index) => {
            return(
                <div key={index}>
                <Link id="text-link" to={`/booking/${booking.id}`}><div className="ind-image"><h3>{booking.comments}</h3></div></Link>
                </div>
            );
            })
            : "Loading..."}
      </div>
    )
}

export default Bookings;