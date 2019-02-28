import React, { useState, useEffect } from "react";
import axios from "axios";

import User from "../components/Users/User";

const HomeView = props => {
  const [users, setUsers] = useState([]);

  useEffect(_ => {
    axios
      .get(`${props.baseURL}/api/users`, props.setHeaders)
      .then(res => {
        setUsers([...res.data]);
      })
      .catch(err => console.log(err));
  }, []);

  const logout = e => {
    e.preventDefault();
    localStorage.removeItem("jwt");
    props.history.push("/login");
  };

  return (
    <div>
      <h1>Home View</h1>
      {users.map(user => (
        <User user={user} key={user.id} />
      ))}
      <button onClick={logout}>Log out</button>
    </div>
  );
};

export default HomeView;
