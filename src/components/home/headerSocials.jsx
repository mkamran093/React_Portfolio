import React from "react";

const HeaderSocials = () => {
  return (
    <div className="home_socials">
      <a
        href="https://www.instagram.com/"
        className="home_social-link"
        target="_blank"
      >
        <i className="fa-brands fa-instagram"></i>
      </a>

      <a
        href="https://www.facebook.com/"
        className="home_social-link"
        target="_blank"
      >
        <i className="fa-brands fa-facebook"></i>
      </a>

      <a
        href="https://www.twitter.com/"
        className="home_social-link"
        target="_blank"
      >
        <i className="fa-brands fa-twitter"></i>
      </a>
      <a
        href="https://www.dribbble.com/"
        className="home_social-link"
        target="_blank"
      >
        <i className="fa-brands fa-dribbble"></i>
      </a>
    </div>
  );
};

export default HeaderSocials;
