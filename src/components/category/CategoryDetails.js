import React, { useEffect, useState } from "react";
import './categories.css';
import {useParams, BrowserRouter as Router} from 'react-router-dom';


const CategoryDetails = () => {


    const categoryId = useParams().categoryId;

    const [category, setCategory]= useState(null);
    useEffect(() => {
        fetch(`http://localhost:8080/categories/${categoryId}`)
        .then(res => res.json())
        .then(data => setCategory(data))
    }, [])
    


    if (!category){
        return <p>Loading...</p>
    }
    return (
        <div className="main-container">
            <div className="details-image">
                <img src={category.image} alt="no available"/>
            </div>
            <div className="details">
                <h4>{category.name}</h4>
                <p>{category.description}</p>
            </div>
            
        </div>
    )

}

export default CategoryDetails;