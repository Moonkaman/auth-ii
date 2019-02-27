import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

import "./App.css";
import HomeView from "./views/HomeView";
import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";

const App = props => {
  const token = localStorage.getItem("jwt");
  console.log("token: ", token);

  return (
    <div className="App">
      <Route
        exact
        path="/"
        render={props =>
          token ? <HomeView {...props} /> : <Redirect to="/login" />
        }
      />
      <Route exact path="/login" render={props => <LoginView {...props} />} />
      <Route
        exact
        path="/register"
        render={props => <RegisterView {...props} />}
      />
    </div>
  );
};

export default App;
