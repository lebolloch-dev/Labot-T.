import React from "react";
import { NavLink } from "react-router-dom";

const NavCase = () => {
  return (
    <div className="nav-case">
      <NavLink exact to="/Music" title="page musique" className="nav-music">
        <h3>MUSIC</h3>
      </NavLink>

      <NavLink exact to="/Artists" title="page artist" className="nav-artist">
        <h3>ARTISTS</h3>
      </NavLink>

      <NavLink exact to="/Events" title="page event" className="nav-event">
        <h3>EVENTS</h3>
      </NavLink>

      <a
        href="https://labo-t.myspreadshop.fr/"
        rel="noopener noreferrer"
        target="_blank"
        title="Shop Labo T"
        className="nav-shop"
      >
        <h3>SHOP</h3>
      </a>
    </div>
  );
};

export default NavCase;
