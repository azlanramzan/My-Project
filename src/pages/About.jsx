import React from "react";
import "./About.css";
import Footer from "./Footer";
import { menu_list } from "../assets/assets";

const aboutCards = [
  {
    image: menu_list[0].menu_image,
    title: "Fresh Salad",
  },
  {
    image: menu_list[2].menu_image,
    title: "Sweet Desert",
  },
  {
    image: menu_list[1].menu_image,
    title: "Hot Rolls",
  },
  {
    image:menu_list[6].menu_image,
    title:"Fresh Mecronie"
  }
];

const About = () => {
  return (
    <div className="page-container">
      <h2 className="menu-title">About Our Food</h2>

      <div className="about-card">
        {aboutCards.map((item, index) => (
          <div className="image-card" key={index}>
            <img src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
            <button>Learn More</button>
          </div>
        ))}
      </div>

      <div className="home">
        <Footer />
      </div>
    </div>
  );
};

export default About;
