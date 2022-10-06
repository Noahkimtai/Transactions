import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  padding: "12px",
  margin: "0 6px 0",
  background: "grey",
  textDecoration: "none",
  color: "white",
  alignItems:'right',
};

function NavBar() {
  return (
    <div className="NavBar">
      <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        About
      </NavLink>
      <NavLink
        to="/cart"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Cart
      </NavLink>
    </div>
  );
}

export default NavBar;
