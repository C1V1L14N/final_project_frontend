import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

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
    <div>
      <h3>Shop Component</h3>
      <Link to="/new-shop"><button className="btn">Create New Profile</button></Link>
      {shopList
        ? shopList.map((shop, index) => {
          return(
            <div key={index}>
              <Link to={`/shop/${shop.id}`}><button>{shop.name}</button></Link>
            </div>
          );
        })
        : "Loading..."}
    </div>
  );
}

export default Shop;