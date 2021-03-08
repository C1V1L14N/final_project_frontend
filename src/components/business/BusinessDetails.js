import React, { useState } from "react";
import { Link } from "react-router-dom";
import {Route, useParams, BrowserRouter as Router} from 'react-router-dom';
import NewCategory from "../category/NewCategory";
// import CategoryEdit from "../category/CategoryDetails";
import NewService from "../service/NewService";
import BusinessAddress from "./BusinessAddress";
import BusinessHours from "./BusinessHours";
import BusinessPhone from "./BusinessPhone";
import BusinessEmail from "./BusinessEmail";
import { IconContext } from "react-icons";
import { FaPlusSquare } from "react-icons/fa";
// import { FaWindowClose } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import './business.css'



const BusinessDetails = ({shop, categoryList, serviceList}) => {

    const shopId = useParams().businessId;

    const [formIsOn, setFormIsOn] = useState('');
    
    const handleChange = (evt) => {
        setFormIsOn(evt);
        console.log(formIsOn);
    }

    // Removes seconds from the time format
    const removeSeconds = (time) => {
        if(time) {
            return time.replace(/:[^:]*$/,'');
        }
    }
    

    if (!shop){
        return <p>Loading...</p>
    }
    return (
        <div className="main-container">
            <div className="details-image" id="details-image-shop" >
                <h4>{shop.name}</h4>
                <img src={shop.image} alt="not available"/>
            </div>
            <div className="details">
                {formIsOn === "address"
                ? <BusinessAddress shop={shop} toggle={handleChange}/>
                : <div className="start-container">
                    <IconContext.Provider value={{ className: "edit-icon icon"}}><FaEdit onClick={() => handleChange('address')}/></IconContext.Provider>
                    <p className="form-header">Address: {shop.address}, {shop.town} {shop.postcode}</p>
                </div>}
                {formIsOn === "hours"
                ? <BusinessHours shop={shop} toggle={handleChange}/>
                :<div className="start-container">
                    <IconContext.Provider value={{ className: "edit-icon icon"}}><FaEdit onClick={() => handleChange('hours')}/></IconContext.Provider>
                    <p className="form-header">Hours: {removeSeconds(shop.openingHour)} - {removeSeconds(shop.closingHour)}</p>
                </div>}
                {formIsOn === "phone"
                ? <BusinessPhone shop={shop} toggle={handleChange}/>
                : <div className="start-container">
                    <IconContext.Provider value={{ className: "edit-icon icon"}}><FaEdit onClick={() => handleChange('phone')}/></IconContext.Provider>
                    <p className="form-header">Phone: {shop.telephoneNumber}</p>
                </div>}
                {formIsOn === "email"
                ? <BusinessEmail shop={shop} toggle={handleChange}/>
                : <div className="start-container">
                    <IconContext.Provider value={{ className: "edit-icon icon"}}><FaEdit onClick={() => handleChange('email')}/></IconContext.Provider>
                    <p className="form-header">Email: {shop.email}</p>
                </div>}
            </div>
            <div className="additional-details">
                <div className="link-box-list">
                        {formIsOn === "category"
                        ? <NewCategory shopId={shopId} toggle={handleChange} />
                        : <div className="additional-container">
                            <p id="text-p">Categories: </p>
                            <IconContext.Provider value={{ className: "new-icon icon"}}><FaPlusSquare onClick={() => handleChange('category')}/></IconContext.Provider>
                        </div>}
                    {shop.categories
                    ? shop.categories.map((category, index) => {
                        return(
                            <div className="additional-container" key={index}>
                                <div className="start-container">
                                    <IconContext.Provider value={{ className: "edit-icon icon"}}><FaEdit/></IconContext.Provider>
                                </div>
                                <Link className="link-box" id="text-link" to={`/category/${category.id}`}>{category.name}</Link>
                                <div className="end-container">
                                    <IconContext.Provider value={{ className: "delete-icon icon"}}><FaTrashAlt/></IconContext.Provider>
                                </div>
                            </div>
                        );
                    })
                    : ""}
                </div>
                <div className="link-box-list">
                        {formIsOn === "service"
                        ? <div className="additional-container">
                            <NewService shopId={shopId} toggle={handleChange}/>
                        </div>
                        : <div className="additional-container">
                            <p id="text-p">Services: </p>
                            <IconContext.Provider value={{ className: "new-icon icon"}}><FaPlusSquare onClick={() => handleChange('service')}/></IconContext.Provider>
                        </div>}
                    {shop.services
                    ? shop.services.map((service, index) => {
                        return(
                            <div className="additional-container" key={index}>
                                <div className="start-container">
                                    <IconContext.Provider value={{ className: "edit-icon icon"}}><FaEdit/></IconContext.Provider>
                                </div>
                                <Link className="link-box" id="text-link" to={`/service/${service.id}`}>{service.name}</Link>
                                <div className="end-container">
                                    <IconContext.Provider value={{ className: "delete-icon icon"}}><FaTrashAlt/></IconContext.Provider>
                                </div>
                            </div>
                        );
                    })
                    : ""}
                </div>
            </div>
        </div>
    )

}

export default BusinessDetails;