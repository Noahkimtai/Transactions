import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "60px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
  alignItems:'right',
};

function NavBar() {
  return (
    <div className="section">
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
