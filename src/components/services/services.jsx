import React from "react";
import "./services.css";
import Image1 from "../../assets/service-1.svg";
import Image2 from "../../assets/service-2.svg";
import Image3 from "../../assets/service-3.svg";

const data = [
  {
    id: 1,
    image: Image1,
    title: "Web Development",
    description:
      "I design and maintain Websites and Web Applications while ensuring functionality and visual appeal.",
  },
  {
    id: 2,
    image: Image2,
    title: "Blockchain",
    description:
      "I analyze and interpret data using statistical techniques and ML algorithms to extract valuable insights.",
  },
  {
    id: 3,
    image: Image3,
    title: "Data Science",
    description:
      "I design and develop blockchain solutions, including smart contracts and decentralized applications.",
  },
];

const Services = () => {
  return (
    <section className="services container section" id="services">
      <h2 className="section_title">Services</h2>

      <div className="services_container grid">
        {data.map(({ id, image, title, description }) => {
          return (
            <div className="services_card" key={id}>
              <img src={image} alt="" className="services_img" />

              <h3 className="services_title">{title}</h3>
              <p className="services_description">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
