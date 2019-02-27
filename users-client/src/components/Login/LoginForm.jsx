import React from "react";
import { Link } from "react-router-dom";

const LoginForm = props => {
  return (
    <form className="login-form" onSubmit={props.login}>
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
      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </form>
  );
};

export default LoginForm;
