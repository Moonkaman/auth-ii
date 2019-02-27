import React from "react";
import { Route, Redirect } from "react-router-dom";

import "./App.css";
import HomeView from "./views/HomeView";
import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";

const App = props => {
  const token = localStorage.getItem("jwt");
  const baseURL = "http://localhost:8000";

  return (
    <div className="App">
      <Route
        exact
        path="/"
        render={props =>
          token ? (
            <HomeView {...props} baseURL={baseURL} />
          ) : (
            <Redirect to="/login" />
          )
        }
      />
      <Route
        exact
        path="/login"
        render={props => <LoginView {...props} baseURL={baseURL} />}
      />
      <Route
        exact
        path="/register"
        render={props => <RegisterView {...props} baseURL={baseURL} />}
      />
    </div>
  );
};

export default App;
