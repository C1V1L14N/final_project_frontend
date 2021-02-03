import './app.css';
import React from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import NavBar from "./components/NavBar";
import Search from "./components/Search";
import About from "./components/About";
import Home from "./components/Home";
import User from "./components/User";
import UserDetails from "./components/UserDetails";
import Shop from "./components/Shop";
import ShopDetails from "./components/ShopDetails";
import Categories from "./components/Categories";
import CategoryDetails from "./components/CategoryDetails";
import Services from "./components/Services";
import ServiceDetails from "./components/ServiceDetails";
import Bookings from "./components/Bookings";
import BookingDetails from "./components/BookingDetails";
import NewUser from "./components/NewUser";
import NewShop from "./components/NewShop";
import NewCategory from "./components/NewCategory";
import NewService from "./components/NewService";
import NewBooking from "./components/NewBooking";
import Basket from "./components/Basket";
import Footer from "./components/Footer";
import styled from 'styled-components';



function App() {

  
  const AppStyle = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: #e3e3e3;
  `;

  return (
    <AppStyle>
      <Router>
          
            <NavBar/>

          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/search" component={Search}/>
            <Route path="/about" component={About}/>
            <Route path="/user" component={User} exact/>
            <Route path="/user/:userId" component={UserDetails}/>
            <Route path="/shop" component={Shop} exact/>
            <Route path="/shop/:shopId" component={ShopDetails}/>
            <Route path="/category" component={Categories} exact/>
            <Route path="/category/:categoryId" component={CategoryDetails}/>
            <Route path="/service" component={Services} exact/>
            <Route path="/service/:serviceId" component={ServiceDetails}/>
            <Route path="/booking/" component={Bookings} exact/>
            <Route path="/booking/:bookingId" component={BookingDetails}/>
            <Route path="/new-user" component={NewUser}/>
            <Route path="/new-shop" component={NewShop}/>
            <Route path="/new-category" component={NewCategory}/>
            <Route path="/new-service" component={NewService}/>
            <Route path="/new-booking" component={NewBooking}/>
            <Route path="/basket" component={Basket}/>
            
            
          </Switch>
        <Footer/> 
      </Router>
    </AppStyle>




  );
}

export default App;
