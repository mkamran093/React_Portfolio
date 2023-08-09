import React from "react";

const AboutBox = () => {
  return (
    <div className="about_boxes grid">
      <div className="about_box">
        <i className="about_icon icon-fire"></i>

        <div>
          <h3 className="about_title">18</h3>
          <span className="about_subtitle">Project Completed</span>
        </div>
      </div>

      <div className="about_box">
        <i className="about_icon icon-cup"></i>

        <div>
          <h3 className="about_title">0</h3>
          <span className="about_subtitle">Cup of coffee</span>
        </div>
      </div>

      <div className="about_box">
        <i className="about_icon icon-people"></i>

        <div>
          <h3 className="about_title">0</h3>
          <span className="about_subtitle">Satisfied Clients</span>
        </div>
      </div>

      <div className="about_box">
        <i className="about_icon icon-badge"></i>

        <div>
          <h3 className="about_title">49</h3>
          <span className="about_subtitle">Nominees Winner</span>
        </div>
      </div>
    </div>
  );
};

export default AboutBox;
