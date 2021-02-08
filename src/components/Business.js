import React, {useState} from 'react';
import { Route, Switch } from 'react-router-dom';
import BusinessProfile from './BusinessProfile'
import BusinessLogin from './BusinessLogin';

const Business = () => {
    
    const [token, setToken] = useState();

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