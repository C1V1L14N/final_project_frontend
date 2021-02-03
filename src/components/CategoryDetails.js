import React, { useEffect, useState } from "react";
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
        <div>
            <h4>{category.name}</h4>
            <p>{category.description}</p>
            <img src={category.image} alt="no available"/>
        </div>
    )

}

export default CategoryDetails;