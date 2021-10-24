import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";

const CarousselImg = () => {
  return (
    <ParallaxBanner
      //   className="carou-parallax"
      layers={[
        // {
        //   image: "./img/caroussel/DSC_5388.jpg",
        //   amount: 0.2,
        // },
        {
          image: "./img/caroussel/DSC_5214.jpg",
          amount: 0.7,
        },
      ]}
      style={{
        height: "100vh",
        with: "100vw",
      }}
    ></ParallaxBanner>
  );
};

export default CarousselImg;
