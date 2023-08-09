import React from "react";
import "./home.css";
import Me from "../../assets/avatar-1.svg";
import HeaderSocials from "./headerSocials";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home_img" />
        <h1 className="home_name">Muhammad Kamran</h1>
        <h1 className="home_education">I'm a FrontEnd Developer</h1>

        <HeaderSocials />

        <a href="#" className="btn">
          Hire Me
        </a>

        <ScrollDown />
      </div>
      <Shapes />
    </section>
  );
};

export default Home;
