import React, {useState, useEffect} from 'react';
// import { Link } from "react-router-dom";
import axios from 'axios';
import { IconContext } from "react-icons";
import { FaCheckSquare } from "react-icons/fa";

function NewBooking() {

    const [userList, setUserList] = useState([]);

    const getUserList = () => {
        axios.get(`http://localhost:8080/users/`)
        .then(res => {
          setUserList(res.data)
        });
      };

      const userOptions = userList.map((user, index) => {
          return <option key={index} value={index}>{user.firstName}</option>
      })
    
      useEffect(() => {
        getUserList();
      }, []);
    
      const [formData, setFormData] = useState({
        comments: '',
        user: null,
        // services: [],
        date_booking_made: '',
        date_of_booking: '',
        arrival_time: '',
        departure_time: ''
        
    });

    const handleChange = (evt) => {
        const newState = {...formData};
        newState[evt.target.name] = evt.target.value;
        setFormData(newState);
    }

    const handleUser = function(event){
        const index = parseInt(event.target.value)
        const selectedUser = userList[index]
        let copiedBooking = {...formData};
        copiedBooking['user'] = selectedUser
        setFormData(copiedBooking)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(formData);
        onFormSubmit(formData);
    }

    const onFormSubmit = function(){
        fetch("http://localhost:8080/bookings/", {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
              'Content-Type': 'application/json'
            }
        })
        .then(() => window.location = "/booking")
    }

    return(
        <div className="main-container">
            <h2 className="form-header" >Create New Booking</h2>
            <form className="form-container">
                
                <div className="form-wrap">
                    <label className="label" htmlFor="comments">Comments:</label>
                    <input className="input"
                    onChange={handleChange}
                    type="text"
                    name="comments"
                    id="name"
                    placeholder="Comments"
                    value={formData.comments}
                    required/>  
                </div>

                <div className="form-wrap">
                <label className="label" htmlFor="user">Select User: </label>
                    <select className="input" name="user" onChange={handleUser} defaultValue="select-user">
                        <option disabled value="select-user">Select a user</option>
                        {userOptions}
                    </select>
                </div>
                
                {/* SERVICES */}

                <div className="form-wrap">
                    <label className="label" htmlFor="date_booking_made">Booking issued on:</label>
                    <input className="input"
                    onChange={handleChange}
                    type="date"
                    name="date_booking_made"
                    id="date_booking_made"
                    value={formData.date_booking_made}
                    required/>
                </div>

                <div className="form-wrap">
                    <label className="label" htmlFor="date_of_booking">Booking date for:</label>
                    <input className="input"
                    onChange={handleChange}
                    type="date"
                    name="date_of_booking"
                    id="date_of_booking"
                    value={formData.date_of_booking}
                    required/>
                </div>

                <div className="form-wrap">
                    <label className="label" htmlFor="arrival_time">Arrival Time:</label>
                    <input className="input"
                    onChange={handleChange}
                    type="time"
                    name="arrival_time"
                    id="arrival_time"
                    value={formData.arrival_time}
                    required/>
                </div>

                <div className="form-wrap">
                    <label className="label" htmlFor="departure_time">Departure Time:</label>
                    <input className="input"
                    onChange={handleChange}
                    type="time"
                    name="departure_time"
                    id="departure_time"
                    value={formData.departure_time}
                    required/>
                </div>
            
                <div className="form-wrap" id="submit-wrap">
                    <input className="input" onClick={handleSubmit} type="submit" value="submit" />
                </div>
            </form>
        </div>
    )
}

export default NewBooking;