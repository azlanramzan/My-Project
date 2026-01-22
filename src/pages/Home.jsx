import React from "react";
import { assets, menu_list } from "../assets/assets";
import "./Home.css";
import Footer from "./Footer";

const homeCards = [
  {
    image: menu_list[0].menu_image,
    title: "Fresh Salad",
    description: "Healthy and fresh salads delivered fast"
  },
  {
    image: menu_list[1].menu_image,
    title: "Hot Rolls",
    description: "Crispy rolls with delicious fillings"
  },
  {
    image: menu_list[2].menu_image,
    title: "Sweet Desserts",
    description: "Sweet treats for your cravings"
  },
  {
    image: menu_list[3].menu_image,
    title: "Fresh Sandwitch",
    description: "Fresh Sandwitch treats for your cravings"
  }
];

const Home = () => {
  return (
    <div className="home">

      {/* Hero Section */}
      <div className="hero">
        <div className="hero-text">
          <h1>Food and groceries delivery</h1>
          <p>from Lahore’s best restaurants and shops</p>
        </div>
        <div className="hero-img">
          <img src={assets.header_img} alt="Hero" />
        </div>
      </div>

      {/* Cards Section */}
      <div className="home-images">
        {homeCards.map((item, index) => (
          <div className="image-card" key={index}>
            <img src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
            <p>{item.description}</p>
            
          </div>
        ))}
        <div className="home">
  {/* Existing content */}

  <Footer />
</div>
      </div>
    </div>
  );
};

export default Home;
