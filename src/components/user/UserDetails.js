import React, { useEffect, useState } from "react";
import {Route, useParams, BrowserRouter as Router} from 'react-router-dom';


const UserDetails = () => {

    const userId = useParams().userId;

    const [user, setUser]= useState(null);
    useEffect(() => {
        fetch(`http://localhost:8080/users/${userId}`)
        .then(res => res.json())
        .then(data => setUser(data))
    }, [])
    


    if (!user){
        return <p>Loading...</p>
    }
    return (
        <div>
            <h4>{user.firstName}</h4>
            <p>{user.lastName}</p>
            <p>{user.age}</p>
            <p>{user.address}</p>
            <p>{user.postcode}</p>
            <p>{user.town}</p>
            <p>{user.telephoneNumber}</p>
            <p>{user.email}</p>  
            <p>{user.password}</p>
            <p>{user.access}</p>
            {/* <p>{user.booking}</p> */}
        </div>
    )

}

export default UserDetails;