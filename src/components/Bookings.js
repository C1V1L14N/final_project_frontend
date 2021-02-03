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
        <div>
            <h3>Booking Component</h3>
            <Link to="/new-booking"><button className="btn">Create booking</button></Link>
            {bookingList
                ? bookingList.map((booking, index) => {
                return(
                    <div key={index}>
                    <Link to={`/booking/${booking.id}`}><button>{booking.comments}</button></Link>
                    </div>
                );
                })
                : "Loading..."}
        </div>
    )
}

export default Bookings;