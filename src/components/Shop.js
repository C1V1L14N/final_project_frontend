import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import styled from 'styled-components';

const Shop = () => {



  const ShopForm = styled.div`
      position: relative;
      z-index: 1;
      top: 100px;
      margin: 30px;
  `;

  const FormButton = styled.button`
    width: 150px;
    padding: 2px;
    margin: 1px;
  `;

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
        <ShopForm>
          <Link to="/new-shop"><FormButton className="btn">Create New Profile</FormButton></Link>
          {shopList
            ? shopList.map((shop, index) => {
              return(
                <div key={index}>
                  <Link to={`/shop/${shop.id}`}><FormButton>{shop.name}</FormButton></Link>
                </div>
              );
            })
            : "Loading..."}

            
        </ShopForm>
    

    </div>
  );
}

export default Shop;