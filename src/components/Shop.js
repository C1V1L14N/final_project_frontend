import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
// import NewShopForm from "./NewShopForm";
// import ShopDetails from "./ShopDetails";



const Shop = () => {

  const [shopList, setShopList] = useState([]);

  // const [shopProfile, setShopProfile] = useState({});
  // const [selectedShopId, setSelectedShopId] = useState({});


  // const getShopProfile = () => {

  //   fetch(`http://localhost:8080/shops/${selectedShopId}`)
  //     .then(res => res.json())
  //     .then(data => setShopProfile(data))
  //     .then(() => setLoad(true))
  // }

  // useEffect(() => {
  //   getShopProfile();
  // }, [selectedShopId]);

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

  // const displayShopForm = () => {
  //   setNewForm(true);
  //   }

  return(
    <div>
      <h3>Shop Component</h3>
      <Link to="/new-shop"><button className="btn">Create New Profile</button></Link>
      {shopList
        ? shopList.map((shop, index) => {
          return(
            // <ShopDetails shop={shop} key={index} />
            <div key={index}>
              {/* <h5></h5> */}
              <Link to={`/shop/${shop.id}`}><button>{shop.name}</button></Link>
            </div>
          );
        })
        : "Loading..."}
    </div>
  );
}

export default Shop;