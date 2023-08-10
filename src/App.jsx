import { useState } from "react";
import "./App.css";
import About from "./components/about/about";
import Home from "./components/home/home";
import Porfolio from "./components/portfolio/portfolio";
import Resume from "./components/resume/Resume";
import Services from "./components/services/services";
import Sidebar from "./components/sidebar/sidebar";
import Testimonial from "./components/testimonial/testimonial";
import Contact from "./components/contact/contact";

function App() {
  return (
    <>
      <Sidebar />
      <div className="main">
        <Home />
        <About />
        <Services />
        <Resume />
        <Porfolio />
        <Testimonial />
        <Contact />
      </div>
    </>
  );
}

export default App;
