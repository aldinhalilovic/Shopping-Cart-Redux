import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const passive = {
    textDecoration: "none",
    color: "#F58216",
  };

  const active = {
    textDecoration: " none",
    color: "#1C7ED6",
    fontSize: "22px",
  };

  return (
    <div
      style={{
        width: "100%",
        height: "10vh",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "2px solid #F58216",
      }}
    >
      <div
        style={{
          width: "10%",
          display: "flex",
          justifyContent: "center",
          cursor: "pointer",
          color: "#F58216",
        }}
      >
        <h3 onClick={() => navigate("/")}>Shopping Cart</h3>
      </div>
      <div
        style={{
          display: "flex",
          width: "17%",
          justifyContent: "space-around",
          alignItems: "center",
          color: "#F58216",
        }}
      >
        <NavLink
          to={"/favourites"}
          style={({ isActive }) => (isActive ? active : passive)}
        >
          <h3>Favourites</h3>
        </NavLink>
        <NavLink
          to={"/about"}
          style={({ isActive }) => (isActive ? active : passive)}
        >
          <h3>About Us</h3>
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
