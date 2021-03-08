import React, { useState } from 'react';
import axios from 'axios';
import { IconContext } from "react-icons";
import { FaWindowClose } from "react-icons/fa";
import { FaCheckSquare } from "react-icons/fa";

function NewCategory({ shopId, toggle }) {

    const [formCategoryData, setFormCategoryData] = useState({
        name: '',
        description: '',
        image: ''
    });

    const handleChange = (evt) => {
        const newState = {...formCategoryData};
        newState[evt.target.name] = evt.target.value;
        setFormCategoryData(newState);
    }

    const handleSubmit = (evt) => {
        for(const[, value] of Object.entries(formCategoryData)) {
            if(value === "" || value === null){
                return
            }
        }
        evt.preventDefault();
        onFormSubmit(formCategoryData);
    }

    const onFormSubmit = () => {
        axios.post(`http://localhost:8080/categories/`, formCategoryData)
        .then(function(res){
            const categoryId = res.data.id;
            console.log(categoryId);
            axios.patch(`http://localhost:8080/shops/${shopId}?category=${categoryId}`)
        })
        .then(() => window.location = `/business/${shopId}`)
    };


    return(
        <div className="form-container">
            <div className="end-container">
                <h2 className="form-header">Create New Category</h2>
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
                    placeholder="Name"
                    // value={formCategoryData.name}
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
                    placeholder="Description"
                    // value={formCategoryData.description}
                    required/>
                </div>
            {/* image */}
                <div className="form-wrap">
                    <label className="label" htmlFor="image">Image:</label>
                    <input className="input"
                    onChange={handleChange}
                    type="text"
                    name="image"
                    id="image"
                    placeholder="Image"
                    // value={formCategoryData.image}
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


export default NewCategory;