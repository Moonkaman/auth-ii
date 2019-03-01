import React, { useState } from "react";
import axios from "axios";
import { withSnackbar } from "notistack";

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
        props.enqueueSnackbar("Successfully Registered Account!", {
          variant: "success",
          autoHideDuration: 2200
        });
        props.history.push("/");
      })
      .catch(err => {
        props.enqueueSnackbar(err.response.data.message, {
          variant: "error",
          autoHideDuration: 2200
        });
      });
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

export default withSnackbar(RegisterView);
