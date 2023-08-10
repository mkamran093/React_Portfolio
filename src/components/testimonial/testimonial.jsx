import React from "react";
import "./testimonial.css";
import Image1 from "../../assets/avatar-1.svg";
import Image2 from "../../assets/avatar-2.svg";

// Swiper Components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    id: 1,
    image: Image1,
    title: "Fahad Shehzad",
    subtitle: "CTO at FasTech Systems",
    comment:
      "Kamran is a very Passionate individual and very serious toward his career. Good luck! 😉",
  },
  {
    id: 2,
    image: Image2,
    title: "Shakir Ali",
    subtitle: "Web Developer at FasTech System",
    comment:
      "It was a good experience with him at internship. He is a very good learner! 👍",
  },
];

const Testimonial = () => {
  return (
    <section className="testimonials container section" id="testimonial">
      <h2 className="section_title">Clients & Reviews</h2>

      <Swiper
        className="testimonials_container grid"
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        grabCursor={true}
        pagination={{ clickable: true }}
      >
        {data.map(({ id, image, title, subtitle, comment }) => {
          return (
            <SwiperSlide className="testimonial_item" key={id}>
              <div className="thumb">
                <img src={image} alt="" />
              </div>

              <h3 className="testimonial_title">{title}</h3>
              <span className="subtitle">{subtitle}</span>
              <div className="comment">{comment}</div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
