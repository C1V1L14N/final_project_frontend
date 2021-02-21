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
    <div className="main-container">
      <Link id="new-form-link" to="/new-user"><h2>Create New Profile</h2></Link>
      {userList
        ? userList.map((user, index) => {
          return(
            <div key={index}>
              <Link id="text-link" to={`/user/${user.id}`}><div className="ind-image"><h2>{user.firstName} {user.lastName}</h2></div></Link>
            </div>
          );
        })
        : "Loading..."}
      </div>
  )

}

export default User;