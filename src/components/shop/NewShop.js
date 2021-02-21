import React, {useState, useEffect} from "react";
import axios from 'axios';

function NewShop() {

    const [formData, setFormData] = useState({
        name: '',
        address: '',
        postcode: '',
        town: '',
        openingHour: '',
        closingHour: '',
        telephoneNumber: '',
        email: '',
        image: '',
        category: null,
        services: null
    });

    const handleChange = (evt) => {
        const newState = {...formData};
        newState[evt.target.name] = evt.target.value;
        setFormData(newState);
    }

    // Add Service
    const [serviceList, setServiceList] = useState([]);

    const getServiceList = () => {
        axios.get(`http://localhost:8080/services/`)
        .then(res => {
        // console.log(res);
        setServiceList(res.data)
        });
    };

    const serviceOptions = serviceList.map((service, index) => {
        return <option key={index} value={index}>{service.name}</option>
    })

    const handleService = function(event){
        const index = parseInt(event.target.value)
        const selectedService = serviceList[index]
        let copiedService = {...formData};
        copiedService['service'] = selectedService
        setFormData(copiedService)
    }


    // Add Category
    const [categoryList, setCategoryList] = useState([]);

    const getCategoryList = () => {
        axios.get(`http://localhost:8080/categories/`)
        .then(res => {
        //   console.log(res);
        setCategoryList(res.data)
        });
    };

    const categoryOptions = categoryList.map((category, index) => {
        return <option key={index} value={index}>{category.name}</option>
    })

    const handleCategory = function(event){
        const index = parseInt(event.target.value)
        const selectedCategory = categoryList[index]
        let copiedCategory = {...formData};
        copiedCategory['category'] = selectedCategory
        setFormData(copiedCategory)
    }



    useEffect(() => {
        getServiceList();
        getCategoryList();
      }, []);


    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(evt);
        onFormSubmit(formData);
    }

    const onFormSubmit = function(){
        fetch("http://localhost:8080/shops/", {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(() => window.location = "/shop")
    }

    return(
        <div className="main-container">
            <h2 className="form-header">Create New Profile</h2>
            <form className="form-container">

                <div className="form_wrap">
                    <label className="label" htmlFor="name">Name:</label>
                    <input className="input"
                    onChange={handleChange}
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    value={formData.name}
                    required/>
                </div>

                <div className="form_wrap">
                    <label className="label" htmlFor="address">Address:</label>
                    <input className="input"
                    onChange={handleChange}
                    type="text"
                    name="address"
                    id="address"
                    placeholder="Address"
                    value={formData.address}
                    required/>
                </div>

                <div className="form_wrap">
                    <label className="label" htmlFor="postcode">Postcode:</label>
                    <input className="input"
                    onChange={handleChange}
                    type="text"
                    name="postcode"
                    id="postcode"
                    placeholder="Postcode"
                    value={formData.postcode}
                    required/>
                </div>

                <div className="form_wrap">
                    <label className="label" htmlFor="town">Town:</label>
                    <input className="input"
                    onChange={handleChange}
                    type="text"
                    name="town"
                    id="town"
                    placeholder="Town"
                    value={formData.town}
                    required/>
                </div>

                <div className="form_wrap">
                    <label className="label" htmlFor="openingHour">Opening Hour:</label>
                    <input className="input"
                    onChange={handleChange}
                    type="time"
                    name="openingHour"
                    id="openingHour"
                    value={formData.openingHour}
                    required/>
                </div>

                <div className="form_wrap">
                    <label className="label" htmlFor="closingHour">Closing Hour:</label>
                    <input className="input"
                    onChange={handleChange}
                    type="time"
                    name="closingHour"
                    id="closingHour"
                    value={formData.closingHour}
                    required/>
                </div>

                <div className="form_wrap">
                    <label className="label" htmlFor="telephoneNumber">Telephone Number:</label>
                    <input className="input"
                    onChange={handleChange}
                    type="text"
                    name="telephoneNumber"
                    id="telephoneNumber"
                    placeholder="Telephone Number"
                    value={formData.telephoneNumber}
                    required/>
                </div>

                <div className="form_wrap">
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

                <div className="form_wrap">
                    <label className="label" htmlFor="image">Image Link:</label>
                    <input className="input"
                    onChange={handleChange}
                    type="text"
                    name="image"
                    id="image"
                    placeholder="Image Link"
                    value={formData.image}
                    required/>
                </div>
                <div className="form_wrap">
                <select name="service" onChange={handleService} defaultValue="select-service">
                {/* <select name="service" defaultValue="select-service"> */}
                    <option disabled value="select-service">Select a service</option>
                    {serviceOptions}
                </select>
                </div>
                <div className="form_wrap">
                <select name="category" onChange={handleCategory} defaultValue="select-category">
                {/* <select name="category" defaultValue="select-category"> */}
                    <option disabled value="select-category">Select a category</option>
                    {categoryOptions}
                </select>
                </div>
                <div className="form_wrap">
                    <input className="input" onClick={handleSubmit} type="submit" value="submit" />
                </div>
                
            </form>
        </div>
    );

}

export default NewShop;