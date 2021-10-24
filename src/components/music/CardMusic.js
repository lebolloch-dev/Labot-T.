import React from "react";

const CardMusic = ({ music }) => {
  return (
    <li className="card-container" key={music.id}>
      <a href={music.lien} target="_blank" className="cover-click">
        {" "}
        <img src={music.cover} alt="" />
      </a>
      <div className="lecteur-spotify">{music.lecteur}</div>
      <div className="footer-card">
        <div className="info-music">
          <h3>{music.artist}</h3>
          <p>{music.titre}</p>
          <p>{music.id}</p>
        </div>
        <a href={music.lien} target="_blank" className="boutton-stream">
          <img src="../../../img/music/bouton-dl-stream.png" alt="" />
        </a>
      </div>
    </li>
  );
};

export default CardMusic;
