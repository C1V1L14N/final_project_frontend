import React, { useState } from "react";
import axios from 'axios';
import { IconContext } from "react-icons";
import { FaWindowClose } from "react-icons/fa";
import { FaCheckSquare } from "react-icons/fa";

function NewService({ shopId, toggle }) {

    const [formServiceData, setFormServiceData] = useState({
        name: '',
        description: '',
        price: '',
        duration: ''
    });

    const handleChange = (evt) => {
        const newState = {...formServiceData};
        newState[evt.target.name] = evt.target.value;
        setFormServiceData(newState);
    }

    const handleSubmit = (evt) => {
        for(const[, value] of Object.entries(formServiceData)) {
            if(value === "" || value === null){
                return
            }
        }
        evt.preventDefault();
        onFormSubmit(formServiceData);
    }



    const onFormSubmit = () => {
        axios.post(`http://localhost:8080/services/`, formServiceData)
        .then(function(res){
            const serviceId = res.data.id;
            console.log(serviceId);
            axios.patch(`http://localhost:8080/shops/${shopId}?service=${serviceId}`)
        })
    };

 
    return(
        <div className="form-container">
            <div className="end-container">
                <h2 className="form-header" >Create New Service</h2>
                <IconContext.Provider value={{ className: "close-icon icon"}}><FaWindowClose onClick={toggle}/></IconContext.Provider>
            </div>
            <form className="form-container">
            {/* name */}
                <div className="form-wrap">
                    <label className="label" htmlFor="name">Name:</label>
                    <input className="input"
                    onChange={handleChange}
                    type="text"
                    name="name"
                    id="name"
                    placeholder="service name"
                    // value={formServiceData.name}
                    required/>
                </div>
            {/* description */}
                <div className="form-wrap">
                    <label className="label" htmlFor="description">Description:</label>
                    <input className="input"
                    onChange={handleChange}
                    type="text"
                    name="description"
                    id="description"
                    placeholder="description"
                    // value={formServiceData.description}
                    required/>
                </div>
            {/* price */}
                <div className="form-wrap">
                    <label className="label" htmlFor="price">Price:</label>
                    <input className="input"
                    onChange={handleChange}
                    type="number"
                    name="price"
                    id="price"
                    min="0"
                    placeholder="price in &pound;"
                    // value={formServiceData.price}
                    required/>
                </div>
            {/* duration */}
                <div className="form-wrap">
                    <label className="label" htmlFor="duration">Duration:</label>
                    <input className="input"
                    onChange={handleChange}
                    type="number"
                    name="duration"
                    id="duration"
                    min="0"
                    placeholder="duration in minutes"
                    // value={formServiceData.duration}
                    required/>
                </div>
            {/* submit */}
                <div className="form-wrap" id="submit-wrap">
                <IconContext.Provider value={{ className: "checked-icon icon"}}><FaCheckSquare onClick={handleSubmit}/></IconContext.Provider>
                </div>
            </form>
        </div>
    )
}

export default NewService;