import React, { useState } from 'react';
import axios from 'axios';
import './NewCategory.css';

function NewCategory({ shopId }) {

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

    const addCategory = () => {
        return new Promise(
            function(resolve, reject){
                resolve(
                    axios.post(`http://localhost:8080/categories/`, formCategoryData)
                    .then(function(res){
                        const categoryId = res.data.id;
                        console.log(categoryId);
                        axios.patch(`http://localhost:8080/shops/${shopId}?category=${categoryId}`)
                    })
                    .then(() => window.location = `/business/${shopId}`)
                )
            }
        )
    };

    const onFormSubmit = () => {
        addCategory()
    }


    return(
        <div className="main-container">
            <h2 className="form-header">Create New Category</h2>
            <form className="form-container">
                
                <div className="form_wrap">
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

                <div className="form_wrap">
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

                <div className="form_wrap">
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

                <div className="form_wrap" id="submit-wrap">
                    <input className="input" id="submit-btn" onClick={handleSubmit} type="submit" value="submit" />
                </div>
            </form>
        </div>
    )
}


export default NewCategory;