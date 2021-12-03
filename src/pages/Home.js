import React from "react";
import AboutUs from "../components/home/AboutUs";
import CarousselImg from "../components/home/CarousselImg";
import NavCase from "../components/home/NavCase";

const Home = () => {
  return (
    <div className="home">
      <CarousselImg />
      <NavCase />
      <AboutUs />
    </div>
  );
};

export default Home;
