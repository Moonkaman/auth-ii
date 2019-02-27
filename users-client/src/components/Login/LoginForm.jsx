import React from "react";

const LoginForm = props => {
  return (
    <form className="login-form" onSubmit={props.login}>
      <p>username</p>
      <input
        type="Text"
        placeholder="Username"
        name="username"
        onChange={props.handleChange}
        value={props.loginInfo.username}
      />
      <p>password</p>
      <input
        type="Password"
        placeholder="Password"
        name="password"
        onChange={props.handleChange}
        value={props.loginInfo.password}
      />
      <br />
      <button>Log in</button>
    </form>
  );
};

export default LoginForm;
