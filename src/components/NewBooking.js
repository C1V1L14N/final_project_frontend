import React, {useState, useEffect} from 'react';
// import { Link } from "react-router-dom";
import axios from 'axios';

function NewBooking() {
    
      const [formData, setFormData] = useState({
        comments: '',
        user: null,
        services: [],
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

    // Set User
    const [userList, setUserList] = useState([]);

    const getUserList = () => {
        axios.get(`http://localhost:8080/users/`)
        .then(res => {
        //   console.log(res);
            setUserList(res.data)
        });
      };

      const userOptions = userList.map((user, index) => {
          return <option key={index} value={index}>{user.firstName} {user.lastName}</option>
      })

    //   Add Service
    const [serviceList, setServiceList] = useState([]);

    const getServiceList = () => {
        axios.get(`http://localhost:8080/services/`)
        .then(res => {
        //   console.log(res);
            setServiceList(res.data)
        });
      };

      const serviceOptions = serviceList.map((service, index) => {
          return <option key={index} value={index}>{service.name}</option>
      })

    
      useEffect(() => {
        getUserList();
        getServiceList();
      }, []);

    // Handlers
    const handleUser = function(event) {
        const index = parseInt(event.target.value)
        const selectedUser = userList[index]
        let copiedBooking = {...formData};
        copiedBooking['user'] = selectedUser
        setFormData(copiedBooking)
    }

    const handleService = function(event) {
        const index = parseInt(event.target.value)
        const selectedService = serviceList[index]
        let newState = {...formData};
        const newService = [];
        newService.push(selectedService);
        newState['services'] = newService;
        // console.log(newState)
        setFormData(newState)
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
        <div>
            <h3>Create new booking</h3>
            {/* <p>Select user</p> */}
            <form onSubmit={handleSubmit}>
                {/* User */}
                <div className="form_wrap">
                    <label htmlFor="user">Name: </label>
                    <select name="user" onChange={handleUser} defaultValue="select-user">
                        <option disabled value="select-user">Select name</option>
                        {userOptions}
                    </select>
                </div>
                {/* Service */}
                <div className="form_wrap">
                    <label htmlFor="services">Select service: </label>
                    <select name="services" onChange={handleService} defaultValue="select-service">
                        <option disabled value="select-service">Select service</option>
                        {serviceOptions}
                    </select>
                </div>
                {/* Date of issuing the booking */}
                <div className="form_wrap">
                    <label htmlFor="date_booking_made">Booking issued on:</label>
                    <input 
                    onChange={handleChange}
                    type="date"
                    name="date_booking_made"
                    id="date_booking_made"
                    value={formData.date_booking_made}
                    required/>
                </div>
                {/* Date of booking */}
                <div className="form_wrap">
                    <label htmlFor="date_of_booking">Booking date for:</label>
                    <input 
                    onChange={handleChange}
                    type="date"
                    name="date_of_booking"
                    id="date_of_booking"
                    value={formData.date_of_booking}
                    required/>
                </div>
                {/* Arrival time */}
                <div className="form_wrap">
                    <label htmlFor="arrival_time">Arrival Time:</label>
                    <input 
                    onChange={handleChange}
                    type="time"
                    name="arrival_time"
                    id="arrival_time"
                    value={formData.arrival_time}
                    required/>
                </div>
                {/* Departure time */}
                <div className="form_wrap">
                    <label htmlFor="departure_time">Departure Time:</label>
                    <input 
                    onChange={handleChange}
                    type="time"
                    name="departure_time"
                    id="departure_time"
                    value={formData.departure_time}
                    required/>
                </div>
                {/* Comments */}
                <div className="form_wrap">
                    <label htmlFor="comments">Comments:</label>
                    <input 
                    onChange={handleChange}
                    type="text"
                    name="comments"
                    id="name"
                    placeholder="Comments"
                    value={formData.comments}
                    required/>  
                </div>
            
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default NewBooking;