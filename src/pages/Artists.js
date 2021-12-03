import React, { useEffect, useState } from "react";
import { artistTableau } from "../artist-tableau";
import CardArtist from "../components/artist/CardArtist";

const Artists = () => {
  const [artist, setArtist] = useState([]);

  useEffect(() => {
    setArtist(artistTableau);
  }, [artist]);

  return (
    <main className="artists">
      <div className="title-groupe">
        <h1 className="title-page">ARTISTS</h1>
      </div>

      <ul className="wall-artist">
        {artist.map((artist, key) => {
          return <CardArtist artist={artist} key={artist.id} />;
        })}
      </ul>
      <section className="other-artists">
        <div className="title-artist-remixer">
          <h4>ALL ARTISTS | REMIXERS</h4>
          <span></span>
        </div>
        <div className="all-other">
          <div className="artist a-i">
            <p>Aalson</p>
            <p>Alessandro Diga</p>
            <p>Anders.</p>
            <p>Axom</p>
            <p>Ceas</p>
            <p>Clawz SG</p>
            <p>Hells Kitchen</p>
            <p>In-Dika</p>
          </div>
          <div className="artist j-m">
            <p>Joachim Pastor</p>
            <p>Joris Delacroix</p>
            <p>Karmâa</p>
            <p>Koelle</p>
            <p>Lumo.</p>
            <p>Mark Hoffen</p>
            <p>Mashk</p>
            <p>Max TenRoM</p>
          </div>
          <div className="artist n-w">
            <p>Nils Andreas</p>
            <p>Ron Flatter</p>
            <p>Seth Schwarz</p>
            <p>Reig</p>
            <p>Teho</p>
            <p>THe WHite SHadow</p>
            <p>Üm.</p>
            <p>We Need Cracks</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Artists;
