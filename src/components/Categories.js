import styled from 'styled-components';    
import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import './categories.css';
import Shop from './Shop';

function Categories() {

    const [categoryList, setCategoryList] = useState([]);

    const getCategoryList = () => {
        axios.get(`http://localhost:8080/categories/`)
        .then(res => {
        console.log(res);
        setCategoryList(res.data)
        });
    };
    
    useEffect(() => {
        getCategoryList();
    }, []);

    

        const CategoryLabel = styled.label`
            font-family: sans-serif;
            font-size: 24px;
            margin: 10px;
            padding: 0;
            position: relative;
            left: 0;
        `;


    return(
        <div className="categories-container">
            {/* <Link to="/new-category"><button className="btn">Add Category</button></Link> */}


            {categoryList
                ? categoryList.map((category, index) => {
                return(
                    <div key={index}>
                    <Link id ="image-link" to={`/category/${category.id}`}><img className="ind-image" src={category.image}/>{category.name}</Link>
                    </div>
                );
                })
                : "Loading..."}
        </div>
    )
}

export default Categories;

// {/* <div className="shops-container">
       
//        {shopList
//          ? shopList.map((shop, index) => {
//            return(
//              <div key={index}>
//                <Link id ="image-link"to={`/shop/${shop.id}`}><img className = "ind-image" src={shop.image} alt="no available"/>{shop.name}</Link>
//              </div>
//            );
//          })
//          : "Loading..."}

         
     
//  </div> */}