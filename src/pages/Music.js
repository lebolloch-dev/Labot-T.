import React, { useEffect, useState } from "react";

import CardMusic from "../components/music/CardMusic";
import { musicTableau } from "../music-tableau";

const Music = () => {
  const [loadPost, setLoadPost] = useState(true);
  const [music, setMusic] = useState([]);
  const [count, setCount] = useState(12);
  const [load, setLoad] = useState(true);

  const loadMore = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 180 >
      document.scrollingElement.scrollHeight
    ) {
      setLoadPost(true);
    }
  };

  useEffect(() => {
    if (loadPost) {
      setMusic(musicTableau.slice(0, count));
      setLoadPost(false);
      setCount(count + 12);
    }

    window.addEventListener("scroll", loadMore);
    return () => window.removeEventListener("scroll", loadMore);
  }, [music, loadPost]);

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 3000);
  }, []);

  return (
    <main className="music">
      <div className="title-groupe">
        <h1 className="title-page">MUSIC</h1>
      </div>

      <ul className="wall-music">
        {music.map((music, key) => {
          return <CardMusic music={music} key={music.id} />;
        })}
      </ul>
    </main>
  );
};

export default Music;
