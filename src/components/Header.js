import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <img
        // src="../../../public/img/LOGO-LABO-T-2019.png"
        src={process.env.PUBLIC_URL + "/img/LOGO-LABO-T-2019.png"}
        alt="logo Labo T, label de musique électronique sur Montpellier"
      />
      <nav>
        <ul>
          <li>
            <NavLink
              exact
              to="/"
              title="page d'acceuil"
              activeClassName="header-activ"
            >
              <h3>HOME</h3>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/#about-us">
              <h3>ABOUT US</h3>
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/Music"
              title="page musique"
              activeClassName="header-activ"
            >
              <h3>MUSIC</h3>
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/Artists"
              title="page artist"
              activeClassName="header-activ"
            >
              <h3>ARTISTS</h3>
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/Events"
              title="page event"
              activeClassName="header-activ"
            >
              <h3>EVENTS</h3>
            </NavLink>
          </li>
          <li>
            <a
              href="https://labo-t.myspreadshop.fr/"
              rel="noopener noreferrer"
              target="_blank"
              title="Shop Labo T"
            >
              <h3>SHOP</h3>
            </a>
          </li>
        </ul>
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
          title="SoundCloud"
        >
          <i className="fab fa-soundcloud"></i>
        </a>

        <a
          href=" https://teho.bandcamp.com/"
          target="_blank"
          rel="noopener noreferrer"
          title="BandCamp"
        >
          <i className="fab fa-bandcamp"></i>
        </a>
      </nav>
    </div>
  );
};

export default Header;
