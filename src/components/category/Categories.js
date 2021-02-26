import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
// import axios from 'axios';
import './categories.css';

function Categories({categoryList}) {

    // const [categoryList, setCategoryList] = useState([]);

    // const getCategoryList = () => {
    //     axios.get(`http://localhost:8080/categories/`)
    //     .then(res => {
    //     // console.log(res);
    //     setCategoryList(res.data)
    //     });
    // };
    
    // useEffect(() => {
    //     getCategoryList();
    // }, []);



    return(
        <div className="main-container">
            {/* <Link id="new-form-link" to="/new-category"><h2>Add New Category</h2></Link> */}
            {categoryList
                ? categoryList.map((category, index) => {
                return(
                    <div key={index}>
                    <Link id="text-link" to={`/category/${category.id}`}><img className="ind-image" src={category.image}/><h3 className="ind-title">{category.name}</h3></Link>
                    </div>
                );
                })
                : "Loading..."}
        </div>
    )
}

export default Categories;
