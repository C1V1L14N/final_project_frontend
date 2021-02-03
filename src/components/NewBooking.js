import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

function NewBooking() {

    const [userList, setUserList] = useState([]);

    const getUserList = () => {
        axios.get(`http://localhost:8080/users/`)
        .then(res => {
          console.log(res);
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
        services: null,
        date_booking_made: "2021-01-25",
        date_of_booking: "2021-01-30",
        arrival_time: 1030,
        departure_time: 1130
        
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
            <p>Select user</p>
    <form onSubmit={handleSubmit}>
        <select name="user" onChange={handleUser} defaultValue="select-user">
            <option disabled value='select-user'>Select a user</option>
            {userOptions}
        </select>
        <p></p>
    <label htmlFor="comments">Comments:</label><p></p>
        <input 
        onChange={handleChange}
        type="text"
        name="comments"
        id="name"
        placeholder=""
        value={formData.comments}
        required/><p></p>
        <button type="submit">Submit</button>
    </form>
        </div>
    )
}

export default NewBooking;