import React, { useEffect, useState } from "react";
import CardMusic from "../components/music/CardMusic";
import { musicTableau } from "../music-tableau";

const Music = () => {
  const [music, setMusic] = useState([]);

  useEffect(() => {
    setMusic(musicTableau);
  }, [music]);

  console.log(music);

  return (
    <div className="music">
      <div className="title-groupe">
        <h1 className="title-page">MUSIC</h1>
      </div>

      <ul className="wall-music">
        {music.map((music, key) => {
          return <CardMusic music={music} key={music.id} />;
        })}
      </ul>
    </div>
  );
};

export default Music;
