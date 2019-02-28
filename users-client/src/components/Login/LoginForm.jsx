import React from "react";
import { Link } from "react-router-dom";

import "./Login.css";

const LoginForm = props => {
  return (
    <form className="auth-form" onSubmit={props.login}>
      <p>Username</p>
      <input
        type="Text"
        placeholder="Username"
        name="username"
        onChange={props.handleChange}
        value={props.loginInfo.username}
      />
      <p>Password</p>
      <input
        type="Password"
        placeholder="Password"
        name="password"
        onChange={props.handleChange}
        value={props.loginInfo.password}
      />
      <br />
      <button>Log in</button>
      <br />
      <p className="link-text">
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </form>
  );
};

export default LoginForm;
