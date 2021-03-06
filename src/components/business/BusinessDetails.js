import React, { useEffect, useState, useCallback } from "react";
import NewService from "../service/NewService"
import { Link } from "react-router-dom";
import {Route, useParams, BrowserRouter as Router} from 'react-router-dom';
import './business.css'
import NewCategory from "../category/NewCategory";



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
    
    // Removes seconds from the time format
    const removeSeconds = (time) => {
        return time.replace(/:[^:]*$/,'');
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
                <p>Address: {shop.address}, {shop.town} {shop.postcode}</p>
                <p>Hours: {removeSeconds(shop.openingHour)} - {removeSeconds(shop.closingHour)}</p>
                <p>Phone: {shop.telephoneNumber}</p>
                <p>Email: {shop.email}</p>
                <div className="additional-details">
                    <p id="text-p">Category: </p>
                    <div className="link-box-list">
                        <div className="add-cancel-container">
                            {categoryIsOn
                            ? <button className="link-box" id="red" onClick={categoryToggleIsOn}>Cancel</button>
                            : <button className="link-box" id="green" onClick={categoryToggleIsOn}>Add category</button>}
                        </div>
                        {categoryIsOn
                        ? <div>
                            <NewCategory shopId={shopId} />
                        </div>
                        : null}
                        {shop.categories
                        ? shop.categories.map((category, index) => {
                            return(
                                <div className="add-cancel-container" key={index}>
                                    <Link className="link-box" id="text-link" to={`/category/${category.id}`}>{category.name}</Link>
                                    {/* <p id="text-p">{category.name}</p> */}
                                </div>
                            );
                        })
                        : ""}
                    </div>
                </div>
            </div>
            <div className="additional-details">
                <p id="text-p">Services: </p>
                <div className="link-box-list">
                    <div className="add-cancel-container">
                        {serviceIsOn
                        ? <button className="link-box" id="red" onClick={serviceToggleIsOn}>Cancel</button>
                        : <button className="link-box" id="green" onClick={serviceToggleIsOn}>Add service</button>}
                    </div>
                    {serviceIsOn
                    ?  <div>
                        <NewService shopId={shopId}/>
                    </div>
                    : null}
                    {shop.services
                    ? shop.services.map((service, index) => {
                        return(
                            <div className="add-cancel-container" key={index}>
                                <Link className="link-box" id="text-link" to={`/service/${service.id}`}>{service.name}</Link>
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