import React, { useState } from 'react';
import axios from 'axios';
import { IconContext } from "react-icons";
import { FaWindowClose } from "react-icons/fa";
import { FaCheckSquare } from "react-icons/fa";

function BusinessEmail({ shop, toggle }) {

    const [formData, setFormData] = useState({
        email: shop.email
    })

    const handleChange = (evt) => {
        const newState = {...formData};
        newState[evt.target.name] = evt.target.value;
        setFormData(newState);
    }

    const handleSubmit = (evt) => {
        for(const[, value] of Object.entries(formData)) {
            if(value === "" || value === null){
                return
            }
        }
        evt.preventDefault();
        onFormSubmit(formData);
    }

    const onFormSubmit = function(){
        axios.patch(`http://localhost:8080/shops/${shop.id}?email=name`, formData)
        .then(() => window.location = `/business/${shop.id}`)
    }


    return(
        <div className="form-container">
            <div className="end-container">
                <h2 className="form-header">Edit Email Address</h2>
                <IconContext.Provider value={{ className: "close-icon icon"}}><FaWindowClose onClick={toggle}/></IconContext.Provider>
            </div>
            <form className="form-container" required>
            {/* email */}
                <div className="form-wrap">
                    <label className="label" htmlFor="email">Email address:</label>
                    <input className="input"
                    onChange={handleChange}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    value={formData.email}
                    required/>
                </div>
            {/* submit */}
                <div className="form-wrap" id="submit-wrap">
                <IconContext.Provider value={{ className: "checked-icon icon"}}><FaCheckSquare onClick={handleSubmit}/></IconContext.Provider>
                </div>
            </form>
        </div>
    );
}


export default BusinessEmail;