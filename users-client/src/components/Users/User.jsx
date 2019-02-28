import React from "react";

const User = props => {
  return (
    <div>
      <h2>{props.user.username}</h2>
      <h4>{props.user.department}</h4>
    </div>
  );
};

export default User;
