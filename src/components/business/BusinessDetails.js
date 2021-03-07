import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import {Route, useParams, BrowserRouter as Router} from 'react-router-dom';
import NewCategory from "../category/NewCategory";
import CategoryEdit from "../category/CategoryDetails";
import NewService from "../service/NewService";
import BusinessAddress from "./BusinessAddress";
import BusinessHours from "./BusinessHours";
import BusinessPhone from "./BusinessPhone";
import BusinessEmail from "./BusinessEmail";
import { IconContext } from "react-icons";
import { FaPlusSquare } from "react-icons/fa";
import { FaWindowClose } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import './business.css'



const BusinessDetails = ({shop, categoryList, serviceList}) => {

    // const [formData, setFormData] = useState({
    //     name: shop.name,
    //     address: shop.address,
    //     postcode: shop.postcode,
    //     town: shop.town,
    //     openingHour: shop.openingHour,
    //     closingHour: shop.closingHour,
    //     telephoneNumber: shop.telephoneNumber,
    //     email: shop.email,
    //     image: shop.image,
    //     categories: shop.categories,
    //     services: shop.services
    // });

    // const handleChange = (evt) => {
    //     const newState = {...formData};
    //     newState[evt.target.name] = evt.target.value;
    //     setFormData(newState);
    // }


    // Handlers
    // const handleService = function(event) {
    //     const index = parseInt(event.target.value)
    //     const selectedService = serviceList[index]
    //     let newState = {...formData};
    //     const newService = [];
    //     newService.push(selectedService);
    //     newState['services'] = newService;
    //     setFormData(newState)
    // }



    // const handleCategory = function(event){
    //     const index = parseInt(event.target.value)
    //     const selectedCategory = categoryList[index]
    //     let newState = {...formData};
    //     const newCategory = [];
    //     newCategory.push(selectedCategory);
    //     newState['categories'] = newCategory
    //     setFormData(newState)
    // }

    // const handleSubmit = (evt) => {
    //     evt.preventDefault();
    //     console.log(formData);
    //     onFormSubmit(formData);
    // }

    const shopId = useParams().businessId;

    // Add Service to Shop
    // const onFormSubmit = function(){
    //     fetch(`http://localhost:8080/shops/${shopId}`, {
    //         method: 'PATCH',
    //         body: JSON.stringify(formData),
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //     // .then(() => window.location = "/shop")
    // }

    
    // Service Form Toggle
    const useToggle = (initialValue = false) => {
        const [value, setValue] = useState(initialValue);
        const toggle = useCallback(() => {
          setValue(v => !v);
        }, []);
        return [value, toggle];
    }

    const [categoryIsOn, categoryToggleIsOn] = useToggle();
    const [serviceIsOn, serviceToggleIsOn] = useToggle();
    const [addressIsOn, addressToggleIsOn] = useToggle();
    const [hoursIsOn, hoursToggleIsOn] = useToggle();
    const [phoneIsOn, phoneToggleIsOn] = useToggle();
    const [emailIsOn, emailToggleIsOn] = useToggle();
    
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
                {addressIsOn
                ? <BusinessAddress shop={shop} toggle={addressToggleIsOn}/>
                : <div className="start-container">
                    <IconContext.Provider value={{ className: "edit-icon"}}><FaEdit onClick={addressToggleIsOn}/></IconContext.Provider>
                    <p className="form-header">Address: {shop.address}, {shop.town} {shop.postcode}</p>
                </div>}
                {hoursIsOn
                ? <BusinessHours shop={shop} toggle={hoursToggleIsOn}/>
                :<div className="start-container">
                    <IconContext.Provider value={{ className: "edit-icon"}}><FaEdit onClick={hoursToggleIsOn}/></IconContext.Provider>
                    <p className="form-header">Hours: {removeSeconds(shop.openingHour)} - {removeSeconds(shop.closingHour)}</p>
                </div>}
                {phoneIsOn
                ? <BusinessPhone shop={shop} toggle={phoneToggleIsOn}/>
                : <div className="start-container">
                    <IconContext.Provider value={{ className: "edit-icon"}}><FaEdit onClick={phoneToggleIsOn}/></IconContext.Provider>
                    <p className="form-header">Phone: {shop.telephoneNumber}</p>
                </div>}
                {emailIsOn
                ? <BusinessEmail shop={shop} toggle={emailToggleIsOn}/>
                : <div className="start-container">
                    <IconContext.Provider value={{ className: "edit-icon"}}><FaEdit onClick={emailToggleIsOn}/></IconContext.Provider>
                    <p className="form-header">Email: {shop.email}</p>
                </div>}
            </div>
            <div className="additional-details">
                <div className="link-box-list">
                        {categoryIsOn
                        ? <NewCategory shopId={shopId} toggle={categoryToggleIsOn} />
                        : <div className="additional-container">
                            <p id="text-p">Categories: </p>
                            <IconContext.Provider value={{ className: "new-icon"}}><FaPlusSquare onClick={categoryToggleIsOn}/></IconContext.Provider>
                        </div>}
                    {shop.categories
                    ? shop.categories.map((category, index) => {
                        return(
                            <div className="additional-container" key={index}>
                                <div className="start-container">
                                    <IconContext.Provider value={{ className: "edit-icon"}}><FaEdit/></IconContext.Provider>
                                </div>
                                <Link className="link-box" id="text-link" to={`/category/${category.id}`}>{category.name}</Link>
                                <div className="end-container">
                                    <IconContext.Provider value={{ className: "delete-icon"}}><FaTrashAlt/></IconContext.Provider>
                                </div>
                            </div>
                        );
                    })
                    : ""}
                </div>
                <div className="link-box-list">
                        {serviceIsOn
                        ? <div className="additional-container">
                            <NewService shopId={shopId} toggle={serviceToggleIsOn}/>
                        </div>
                        : <div className="additional-container">
                            <p id="text-p">Services: </p>
                            <IconContext.Provider value={{ className: "new-icon"}}><FaPlusSquare onClick={serviceToggleIsOn}/></IconContext.Provider>
                        </div>}
                    {shop.services
                    ? shop.services.map((service, index) => {
                        return(
                            <div className="additional-container" key={index}>
                                <div className="start-container">
                                    <IconContext.Provider value={{ className: "edit-icon"}}><FaEdit/></IconContext.Provider>
                                </div>
                                <Link className="link-box" id="text-link" to={`/service/${service.id}`}>{service.name}</Link>
                                <div className="end-container">
                                    <IconContext.Provider value={{ className: "delete-icon"}}><FaTrashAlt/></IconContext.Provider>
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