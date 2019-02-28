import React from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

axios.defaults.baseURL = "http://localhost:8000";
axios.interceptors.request.use(
  options => {
    options.headers.authorization = localStorage.getItem("jwt");
    return options;
  },
  error => {
    return Promise.reject(error);
  }
);

export default Component => {
  return class extends React.Component {
    render() {
      const token = localStorage.getItem("jwt");
      return token ? <Component {...this.props} /> : <Redirect to="/login" />;
    }
  };
};
