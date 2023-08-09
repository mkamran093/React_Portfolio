import React from "react";
import "./about.css";
import Image from "../../assets/avatar-2.svg";
import AboutBox from "./AboutBox";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section_title">About Me</h2>

      <div className="about_container grid">
        <img src={Image} className="about_img" alt="" />

        <div className="about_data grid">
          <div className="about_info">
            <p className="about_description">
              I am a computer Science student with interest in fields of Data
              Science, Blockchain and Web Development and eager to put my skills
              in a professional setting with related Internships and job
              opportunities.
            </p>
            <a href="#" className="btn">
              Download CV
            </a>
          </div>

          <div className="about_skills grid">
            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">FrontEnd Development</h3>
                <span className="skills_number">90%</span>
              </div>

              <div className="skills_bar">
                <span className="skills_percentage development"></span>
              </div>
            </div>

            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">Blockchain Development</h3>
                <span className="skills_number">20%</span>
              </div>

              <div className="skills_bar">
                <span className="skills_percentage blockchain"></span>
              </div>
            </div>

            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">Data Science</h3>
                <span className="skills_number">45%</span>
              </div>

              <div className="skills_bar">
                <span className="skills_percentage data-science"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AboutBox />
    </section>
  );
};

export default About;
