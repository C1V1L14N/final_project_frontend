import React, { useState } from "react";
import axios from 'axios';
import { IconContext } from "react-icons";
import { FaCheckSquare } from "react-icons/fa";

function NewShop({categoryList, serviceList}) {

    const [formData, setFormData] = useState({
        name: '',
        address: '',
        town: '',
        postcode: '',
        openingHour: '',
        closingHour: '',
        telephoneNumber: '',
        email: '',
        image: '',
        categories: [],
        services: []
    });

    // const serviceOptions = serviceList.map((service, index) => {
    //     return <option key={index} value={index}>{service.name}</option>
    // })

    // const categoryOptions = categoryList.map((category, index) => {
    //     return <option key={index} value={index}>{category.name}</option>
    // })

    // Handlers
    const handleChange = (evt) => {
        const newState = {...formData};
        newState[evt.target.name] = evt.target.value;
        setFormData(newState);
    }

    // const handleService = function(event) {
    //     console.log(event);
    //     const index = parseInt(event.target.value)
    //     const selectedService = serviceList[index]
    //     // console.log(selectedService);
    //     let newState = {...formData};
    //     const newService = [];
    //     newService.push(selectedService);
    //     newState['services'] = newService;
    //     setFormData(newState);
    // }

    // const handleCategory = function(event){
    //     const index = parseInt(event.target.value)
    //     const selectedCategory = categoryList[index]
    //     let newState = {...formData};
    //     const newCategory = [];
    //     newCategory.push(selectedCategory);
    //     newState['categories'] = newCategory
    //     setFormData(newState);
    // }

    const handleSubmit = (evt) => {
        console.log(formData);
        for(const[key, value] of Object.entries(formData)) {
            if(value === "" || value === null){
                return
            }
        }
        evt.preventDefault();
        onFormSubmit(formData);
    }

    const onFormSubmit = function(){
        axios.post(`http://localhost:8080/shops/`, formData)
        .then(function(res){
            const businessId = res.data.id;
            console.log(businessId)
            return businessId;
        })
        .then((businessId) => window.location = `/business/${businessId}`)
    }


    return(
        <div className="main-container">
            <h2 className="form-header">Create New Profile</h2>
            <form className="form-container">
            {/* name */}
                <div className="form-wrap">
                    <label className="label" htmlFor="name">Name:</label>
                    <input className="input"
                    onChange={handleChange}
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    required/>
                </div>
            {/* address */}
                <div className="form-wrap">
                    <label className="label" htmlFor="address">Address:</label>
                    <input className="input"
                    onChange={handleChange}
                    type="text"
                    name="address"
                    id="address"
                    placeholder="Address"
                    required/>
                </div>
            {/* town */}
                <div className="form-wrap">
                    <label className="label" htmlFor="town">Town:</label>
                    <input className="input"
                    onChange={handleChange}
                    type="text"
                    name="town"
                    id="town"
                    placeholder="Town"
                    required/>
                </div>
            {/* postcode */}
                <div className="form-wrap">
                    <label className="label" htmlFor="postcode">Postcode:</label>
                    <input className="input"
                    onChange={handleChange}
                    type="text"
                    name="postcode"
                    id="postcode"
                    placeholder="Postcode"
                    required/>
                </div>
            {/* opening hour */}
                <div className="form-wrap">
                    <label className="label" htmlFor="openingHour">Opening Hour:</label>
                    <input className="input"
                    onChange={handleChange}
                    type="time"
                    name="openingHour"
                    id="openingHour"
                    required/>
                </div>
            {/* closing hour */}
                <div className="form-wrap">
                    <label className="label" htmlFor="closingHour">Closing Hour:</label>
                    <input className="input"
                    onChange={handleChange}
                    type="time"
                    name="closingHour"
                    id="closingHour"
                    required/>
                </div>
            {/* telephone number */}
                <div className="form-wrap">
                    <label className="label" htmlFor="telephoneNumber">Telephone Number:</label>
                    <input className="input"
                    onChange={handleChange}
                    type="text"
                    name="telephoneNumber"
                    id="telephoneNumber"
                    placeholder="Telephone Number"
                    required/>
                </div>
            {/* email */}
                <div className="form-wrap">
                    <label className="label" htmlFor="email">Email address:</label>
                    <input className="input"
                    onChange={handleChange}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    required/>
                </div>
            {/* image */}
                <div className="form-wrap">
                    <label className="label" htmlFor="image">Image Link:</label>
                    <input className="input"
                    onChange={handleChange}
                    type="text"
                    name="image"
                    id="image"
                    placeholder="Image Link"
                    required/>
                </div>
                {/* services */}
                {/* <div className="form-wrap">
                    <label className="label" htmlFor="services">Select service: </label>
                    <select className="input" name="services" onChange={handleService} defaultValue="select-service">
                        <option disabled value="select-service">Select service</option>
                        {serviceOptions}
                    </select>
                </div> */}
                {/* categories */}
                {/* <div className="form-wrap">
                    <label className="label" htmlFor="categories">Select category: </label>
                    <select className="input" name="categories" onChange={handleCategory} defaultValue="select-category">
                        <option disabled value="select-category">Select category</option>
                        {categoryOptions}
                    </select>
                </div> */}
                {/* submit */}
                <div className="form-wrap" id="submit-wrap">
                    <input className="input" id="submit-btn" onClick={handleSubmit} type="submit" value="submit" required/>
                </div>
            </form>
        </div>
    );
}

export default NewShop;