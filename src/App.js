import './app.css';
import React from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import NavBar from "./components/NavBar";
import Search from "./components/Search";
import About from "./components/About";
import Home from "./components/Home";
import User from "./components/user/User";
import UserDetails from "./components/user/UserDetails";
import Shop from "./components/shop/Shop";
import ShopDetails from "./components/shop/ShopDetails";
import Categories from "./components/category/Categories";
import CategoryDetails from "./components/category/CategoryDetails";
import Services from "./components/service/Services";
import ServiceDetails from "./components/service/ServiceDetails";
import Bookings from "./components/booking/Bookings";
import BookingDetails from "./components/booking/BookingDetails";
import Slots from "./components/slot/Slots";
import SlotDetails from "./components/slot/SlotDetails";
import NewUser from "./components/user/NewUser";
import NewShop from "./components/shop/NewShop";
import NewCategory from "./components/category/NewCategory";
import NewService from "./components/service/NewService";
import NewBooking from "./components/booking/NewBooking";
import NewSlot from "./components/slot/NewSlot";
import Basket from "./components/Basket";
import Footer from "./components/Footer";
import styled from 'styled-components';
import Results from "./components/Results";



function App() {

  
  const AppStyle = styled.div`
    position: relative;
    height: 100vh;
    width: 100vw;
    background-color: #e3e3e3;
  `;

  const SwitchContainer = styled.div`
    background-color: #333333;
    position: relative;
    height: 30vw;
    width: 100vw;
    padding: 0;
  `;

  return (
    <AppStyle>
      <Router>
        <NavBar/>
        <SwitchContainer>
          <Switch>
            <Route path="/" component={Home} exact />
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
            <Route path="/slot" component={Slots} exact/>
            <Route path="/slot/:slotId" component={SlotDetails}/>
            <Route path="/new-user" component={NewUser}/>
            <Route path="/new-shop" component={NewShop}/>
            <Route path="/new-category" component={NewCategory}/>
            <Route path="/new-service" component={NewService}/>
            <Route path="/new-booking" component={NewBooking}/>
            <Route path="/new-slot" component={NewSlot}/>
            <Route path="/basket" component={Basket}/>
            <Route path="/results" component={Results}/>
          </Switch>
        </SwitchContainer>
        <Footer/> 
      </Router>
    </AppStyle>
  );
}

export default App;
