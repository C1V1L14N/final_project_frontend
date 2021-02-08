import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import './shop.css';

const Shop = () => {

  const [shopList, setShopList] = useState([]);


  const getShopList = () => {
    axios.get(`http://localhost:8080/shops/`)
    .then(res => {
      console.log(res);
      setShopList(res.data)
    });
  };



  useEffect(() => {
    getShopList();
  }, []);

  return(

    <div className="shops-container">
       <Link id="new-shop-link" to="/new-shop"><h2>Create a Business Profile</h2></Link>
          {shopList
            ? shopList.map((shop, index) => {
              return(
                <div key={index}>
                  <Link id ="image-link"to={`/shop/${shop.id}`}>
                    <img className = "ind-image" src={shop.image} alt="no available"/><h3>{shop.name}</h3>
                  </Link>
                </div>
              );
            })
            : "Loading..."}

            
        
    </div>
  );
}

export default Shop;