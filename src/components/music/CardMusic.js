import React from "react";

const CardMusic = ({ music }) => {
  return (
    <li
      className="card-container"
      key={music.id}
      alt={`${music.titre}` + "by" + `${music.artist}`}
    >
      <a
        href={music.lien}
        target="_blank"
        className="cover-click"
        rel="noreferrer"
      >
        {" "}
        <img
          src={music.cover}
          alt={"Artwork " + `${music.artist}` + "-" + `${music.titre}`}
        />
      </a>

      <div className="footer-card">
        <div className="info-music">
          <h3>{music.artist}</h3>
          <p>{music.titre}</p>
          <p>{music.id}</p>
        </div>
        <a
          href={music.lien}
          target="_blank"
          className="boutton-stream"
          title={"Play " + `${music.titre}` + "by" + `${music.artist}`}
          rel="noreferrer"
        >
          <img
            src={process.env.PUBLIC_URL + "/img/music/bouton-dl-stream.png"}
            alt={
              "Download and stream" +
              `${music.titre}` +
              "by" +
              `${music.artist}`
            }
          />
        </a>
      </div>
      <div className="lecteur-spotify">{music.lecteur}</div>
    </li>
  );
};

export default CardMusic;
