import React, { useState } from "react";
import "./portfolio.css";
import Menu from "./Menu";

const Portfolio = () => {
  const [items, setItems] = useState(Menu);

  const filterItem = (categoryItem) => {
    const updatedItems = Menu.filter((currentItem) => {
      return currentItem.category === categoryItem;
    });

    setItems(updatedItems);
  };
  return (
    <section className="work container section" id="work">
      <h2 className="section_title">Recent Works</h2>

      <div className="work_filters">
        <span className="work_item" onClick={() => setItems(Menu)}>
          All
        </span>
        <span className="work_item" onClick={() => filterItem("Web")}>
          Web
        </span>
        <span className="work_item" onClick={() => filterItem("Data Science")}>
          Data Science
        </span>
        <span className="work_item" onClick={() => filterItem("Blockchain")}>
          Blockchain
        </span>
      </div>

      <div className="work_container grid">
        {items.map((item) => {
          const { id, image, title, category } = item;

          return (
            <div className="work_card" key={id}>
              <div className="work_thumbnail">
                <img src={image} alt="" className="work_img" />
                <div className="work_mask"></div>
              </div>

              <div className="work_category">{category}</div>
              <h3 className="work_title">{title}</h3>
              <a href="#" className="work_button">
                <i className="icon-link work_button-icon"></i>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
