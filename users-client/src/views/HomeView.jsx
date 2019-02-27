import React from "react";

const HomeView = props => {
  const logout = e => {
    e.preventDefault();
    localStorage.removeItem("jwt");
    props.history.push("/login");
  };

  return (
    <div>
      <h1>Home View</h1>
      <button onClick={logout}>Log out</button>
    </div>
  );
};

export default HomeView;
