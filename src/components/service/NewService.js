import React, { useState } from "react";
// import axios from 'axios';
import './NewService.css';

function NewService({ shopId }) {

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
        evt.preventDefault();
        onFormSubmit(formServiceData);
    }



    const addService = () => {
        return new Promise(
            function(resolve, reject){
                resolve(
                    fetch("http://localhost:8080/services/", {
                        method: 'POST',
                        body: JSON.stringify(formServiceData),
                        headers: {
                        'Content-Type': 'application/json'
                        }
                    }).then(function(res){
                        return res.json();
                    }).then(function(res){
                        const serId = res.id;
                        console.log(serId);
                        fetch(`http://localhost:8080/shops/${shopId}/${serId}`, {
                            method: 'PATCH',
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        })
                    })
                    // .then(() => window.location = `/business/${shopId}`)
                )
            }
        )
    };

    const onFormSubmit = () => {
        addService()
    }

 
    return(
        <div className="main-container">
            <h2 className="form-header" >Create New Service</h2> 
            <form className="form-container">
                {/* name */}
                <div className="form_wrap">
                    <label className="label" htmlFor="name">Name:</label>
                    <input className="input"
                    onChange={handleChange}
                    type="text"
                    name="name"
                    id="name"
                    placeholder="service name"
                    value={formServiceData.name}
                    required/>
                </div>
                {/* description */}
                <div className="form_wrap">
                    <label className="label" htmlFor="description">Description:</label>
                    <input className="input"
                    onChange={handleChange}
                    type="text"
                    name="description"
                    id="description"
                    placeholder="description"
                    value={formServiceData.description}
                    required/>
                </div>
                {/* price */}
                <div className="form_wrap">
                    <label className="label" htmlFor="price">Price:</label>
                    <input className="input"
                    onChange={handleChange}
                    type="number"
                    name="price"
                    id="price"
                    min="0"
                    placeholder="price in &pound;"
                    value={formServiceData.price}
                    required/>
                </div>
                {/* duration */}
                <div className="form_wrap">
                    <label className="label" htmlFor="duration">Duration:</label>
                    <input className="input"
                    onChange={handleChange}
                    type="number"
                    name="duration"
                    id="duration"
                    min="0"
                    placeholder="duration in minutes"
                    value={formServiceData.duration}
                    required/>
                </div>
                {/* submit */}
                <div className="form_wrap" id="submit-wrap">
                    <input className="input" id="submit-btn" onClick={handleSubmit} type="submit" value="submit" />
                </div>
            </form>
        </div>
    )
}

export default NewService;