import React, { useState } from "react";
import axios from "axios";

import RegisterForm from "../components/Register/RegisterForm";

const RegisterView = props => {
  const [registerInfo, setRegisterInfo] = useState({
    username: "",
    password: "",
    department: ""
  });

  const handleChange = e => {
    setRegisterInfo({
      ...registerInfo,
      [e.target.name]: e.target.value
    });
  };

  const register = e => {
    e.preventDefault();
    axios
      .post("/api/register", registerInfo)
      .then(res => {
        localStorage.setItem("jwt", res.data.token);
        props.history.push("/");
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <h1>Register</h1>
      <RegisterForm
        registerInfo={registerInfo}
        handleChange={handleChange}
        register={register}
      />
    </div>
  );
};

export default RegisterView;
