import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact container section" id="contact">
      <h2 className="section_title">Get In Touch</h2>

      <div className="contact_container grid">
        <div className="contact_info">
          <h3 className="contact_title">Let's have a Talk!</h3>
          <p className="contact_details">
            Don't like forms? Send me an email. 👋
          </p>
        </div>

        <form action="" className="contact_form">
          <div className="contact_form-group">
            <div className="contact_form-div">
              <input
                type="text"
                className="contact_form-input"
                placeholder="Full Name"
              />
            </div>

            <div className="contact_form-div">
              <input
                type="email"
                className="contact_form-input"
                placeholder="Email Address"
              />
            </div>
          </div>

          <div className="contact_form-div">
            <input
              type="text"
              className="contact_form-input"
              placeholder="Subject"
            />
          </div>

          <div className="contact_form-div contact_form-area">
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="contact_form-input"
              placeholder="Your Message Here..."
            ></textarea>
          </div>

          <a href="#" className="btn">
            Send Message
          </a>
        </form>
      </div>
    </section>
  );
};

export default Contact; //
