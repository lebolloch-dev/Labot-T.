import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import AboutUs from "../components/home/AboutUs";
import CarousselImg from "../components/home/CarousselImg";
import NavCase from "../components/home/NavCase";

const Home = () => {
  return (
    <div className="home">
      <ParallaxProvider>
        <CarousselImg />
      </ParallaxProvider>
      <NavCase />
      <AboutUs />
    </div>
  );
};

export default Home;
