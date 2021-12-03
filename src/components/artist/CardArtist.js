import React from "react";

const CardArtist = ({ artist }) => {
  return (
    <li className="card-artist-container" key={artist.id}>
      <div className="img-container">
        <img src={artist.photo} alt={artist.nom} />
      </div>
      <div className="artist-main">
        <h3>{artist.nom}</h3>
        <div className="artist-reseaux">
          <a
            href={artist.facebook}
            target="_blank"
            rel="noreferrer"
            title={"Facebook " + `${artist.nom}`}
          >
            <i className="fab fa-facebook-square"></i>
          </a>

          <a
            href={artist.instagram}
            target="_blank"
            rel="noreferrer"
            title={"Instagram " + `${artist.nom}`}
          >
            <i className="fab fa-instagram"></i>
          </a>

          <a
            href={artist.soundcloud}
            target="_blank"
            rel="noreferrer"
            title={"Soundcloud" + `${artist.nom}`}
          >
            <i className="fab fa-soundcloud"></i>
          </a>
        </div>
      </div>
      {artist.lecteur}
    </li>
  );
};

export default CardArtist;
