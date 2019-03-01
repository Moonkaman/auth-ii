import React from "react";
import { Link } from "react-router-dom";

const RegisterForm = props => {
  return (
    <div>
      <form className="auth-form" onSubmit={props.register}>
        <p>Username</p>
        <input
          type="Text"
          placeholder="Username"
          name="username"
          onChange={props.handleChange}
          value={props.registerInfo.username}
        />
        <p>Password</p>
        <input
          type="Password"
          placeholder="Password"
          name="password"
          onChange={props.handleChange}
          value={props.registerInfo.password}
        />
        <p>Department</p>
        <input
          type="text"
          placeholder="Department"
          name="department"
          onChange={props.handleChange}
          value={props.registerInfo.department}
        />
        <br />
        <button>Register</button>
        <br />
        <p className="link-text">
          Already have an account? <Link to="/login">Log In</Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;
