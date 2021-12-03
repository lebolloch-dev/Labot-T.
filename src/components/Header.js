import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

const Header = () => {
  const [header, setHeader] = useState(false);
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  const changeScrollHeader = () => {
    if (window.scrollY >= 85) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  window.addEventListener("scroll", changeScrollHeader);
  return (
    <header className={header ? "header active" : "header"}>
      <img
        src={process.env.PUBLIC_URL + "/img/LOGO-LABO-T-2019-(negative).png"}
        alt="logo Labo T, electronic music label"
      />
      <nav>
        <ul className={showLinks ? "show-bar" : null}>
          <li>
            <NavLink
              exact
              to="/"
              title="Home"
              activeClassName="header-activ"
              onClick={() => {
                setShowLinks(false);
              }}
            >
              <h3>HOME</h3>
            </NavLink>
          </li>
          <li>
            <Link
              smooth
              to="/#about-us"
              onClick={() => {
                setShowLinks(false);
              }}
            >
              <h3>ABOUT US</h3>
            </Link>
          </li>
          <li>
            <NavLink
              exact
              to="/Music"
              title="Music"
              activeClassName="header-activ"
              onClick={() => {
                setShowLinks(false);
              }}
            >
              <h3>MUSIC</h3>
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/Artists"
              title="Artists"
              activeClassName="header-activ"
              onClick={() => {
                setShowLinks(false);
              }}
            >
              <h3>ARTISTS</h3>
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/Events"
              title="Events"
              activeClassName="header-activ"
              onClick={() => {
                setShowLinks(false);
              }}
            >
              <h3>EVENTS</h3>
            </NavLink>
          </li>
          <li>
            <a
              href="https://teho.bandcamp.com/merch"
              rel="noopener noreferrer"
              target="_blank"
              title="Shop"
              onClick={() => {
                setShowLinks(false);
              }}
            >
              <h3>SHOP</h3>
            </a>
          </li>

          <li>
            <a
              href="https://www.facebook.com/labo.t.music/ "
              target="_blank"
              rel="noopener noreferrer"
              title="Facebook"
            >
              <i className="fab fa-facebook-square"></i>
            </a>
            <a
              href=" https://www.instagram.com/labo.t.music/"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href=" http://www.youtube.com/c/Labo_T_channel "
              target="_blank"
              rel="noopener noreferrer"
              title="Youtube"
            >
              <i className="fab fa-youtube"></i>
            </a>
            <a
              href="https://smarturl.it/SpotifyLaboT"
              target="_blank"
              rel="noopener noreferrer"
              title="Spotify"
            >
              <i className="fab fa-spotify"></i>
            </a>
            <a
              href="https://www.soundcloud.com/labo-t/"
              target="_blank"
              rel="noopener noreferrer"
              title="Soundcloud"
            >
              <i className="fab fa-soundcloud"></i>
            </a>

            <a
              href=" https://teho.bandcamp.com/"
              target="_blank"
              rel="noopener noreferrer"
              title="Bandcamp"
            >
              <i className="fab fa-bandcamp"></i>
            </a>
          </li>
        </ul>
        <button className="navbar-burger" onClick={handleShowLinks}>
          <span className={showLinks ? "cross-bar" : null}></span>
        </button>
      </nav>
    </header>
  );
};

export default Header;
