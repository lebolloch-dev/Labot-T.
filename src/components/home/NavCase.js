import React from "react";
import { NavLink } from "react-router-dom";

const NavCase = () => {
  return (
    <div className="nav-case">
      <div className="goDown">
        <i className="fI fas fa-chevron-down "></i>
        <i className="sI fas fa-chevron-down "></i>
      </div>
      <NavLink exact to="/Music" title="Music section" className="nav-music">
        <h3>MUSIC</h3>
      </NavLink>

      <NavLink
        exact
        to="/Artists"
        title="Artists section"
        className="nav-artist"
      >
        <h3>ARTISTS</h3>
      </NavLink>

      <NavLink exact to="/Events" title="Events section" className="nav-event">
        <h3>EVENTS</h3>
      </NavLink>

      <a
        href="https://teho.bandcamp.com/merch"
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
