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

    <div class="shops-container">
       
          {shopList
            ? shopList.map((shop, index) => {
              return(
                <div key={index}>
                  <Link id ="image-link"to={`/shop/${shop.id}`}><img class = "ind-image" src={shop.image} alt="no available"/>{shop.name}</Link>
                </div>
              );
            })
            : "Loading..."}

            
        
    </div>
  );
}

export default Shop;