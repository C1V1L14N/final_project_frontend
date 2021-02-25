import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
// import axios from 'axios';

const Business = ({shopList}) => {
  
  // const [shopList, setShopList] = useState([]);


  // const getShopList = () => {
  //   axios.get(`http://localhost:8080/shops/`)
  //   .then(res => {
  //     console.log(res);
  //     setShopList(res.data)
  //   });
  // };



  // useEffect(() => {
  //   getShopList();
  // }, []);

  return(

    <div className="main-container">
       <Link id="new-form-link" to="/new-shop"><h2>Create a Business Profile</h2></Link>
        {shopList
        ? shopList.map((shop, index) => {
            return(
            <div key={index}>
                <Link id="text-link" to={`/business/${shop.id}`}><img className="ind-image" src={shop.image} alt="no available"/><h3 className="ind-title">{shop.name}</h3></Link>
            </div>
            );
        })
        : "Loading..."}
    </div>
  );
}

export default Business;