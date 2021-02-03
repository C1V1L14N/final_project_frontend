import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';


const User = () => {

  const [userList, setUserList] = useState([]);

  const getUserList = () => {
    axios.get(`http://localhost:8080/users/`)
    .then(res => {
      console.log(res);
      setUserList(res.data)
    });
  };

  useEffect(() => {
    getUserList();
  }, []);

  return(
      <div>
          <h3>User Component</h3>
      <Link to="/new-user"><button className="btn">Create New Profile</button></Link>
      {userList
        ? userList.map((user, index) => {
          return(
            <div key={index}>
              <Link to={`/user/${user.id}`}><button>{user.firstName} {user.lastName}</button></Link>
            </div>
          );
        })
        : "Loading..."}
      </div>
  )

}

export default User;