import React from "react";

import "./Users.css";

const User = props => {
  return (
    <div className="user">
      <h2>{props.user.username}</h2>
      <h4>Department: {props.user.department}</h4>
    </div>
  );
};

export default User;
