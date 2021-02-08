import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BusinessProfile from './BusinessProfile'
import BusinessLogin from './BusinessLogin';
import useToken from './useToken';



// function setToken(userToken) {
//     sessionStorage.setItem('token', JSON.stringify(userToken));
// }

// function getToken() {
//     const tokenString = sessionStorage.getItem('token');
//     const userToken = JSON.parse(tokenString);
//     return userToken?.token
// }

const Business = () => {
    
    // const token = getToken();
    const { token, setToken } = useToken();

    if(!token) {
      return <BusinessLogin setToken={setToken} />
    }


    return(
        <div className="wrapper">
      <h1>Business App</h1>
      <div className="login-panel">
        <Switch>
          <Route path="/business/profile" component={BusinessProfile}/>
        </Switch>
      </div>
    </div>
    )
}

export default Business;