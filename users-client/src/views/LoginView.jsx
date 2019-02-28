import React, { useState } from "react";
import axios from "axios";

import LoginForm from "../components/Login/LoginForm";

const LoginView = props => {
  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: ""
  });

  const handleChange = e => {
    setLoginInfo({
      ...loginInfo,
      [e.target.name]: e.target.value
    });
  };

  const login = e => {
    e.preventDefault();
    axios
      .post("/api/login", loginInfo)
      .then(res => {
        localStorage.setItem("jwt", res.data.token);
        props.history.push("/");
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <h1>Login</h1>
      <LoginForm
        loginInfo={loginInfo}
        handleChange={handleChange}
        login={login}
      />
    </div>
  );
};

export default LoginView;
