import React, { useEffect, useState } from "react";
import './categories.css';
// import {useParams, BrowserRouter as Router} from 'react-router-dom';


const CategoryDetails = ({category}) => {


    // const categoryId = useParams().categoryId;
    


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