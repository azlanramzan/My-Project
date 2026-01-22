import React from "react";
import { assets, menu_list } from "../assets/assets";
import "./Delivery.css";
import Footer from "./Footer";

const Delivery = () => {
  return (
    <div className="delivery-page">
      {/* Hero Section */}
      <section className="delivery-hero">
        <div className="hero-content">
          <h1>Fast & Reliable Food Delivery</h1>
          <p>
            Get your favorite meals delivered straight to your doorstep. Fresh,
            hot, and delicious every time!
          </p>
          <button className="hero-btn">Order Now</button>
        </div>
        <div className="hero-image">
          <img src={assets.parcel_icon} alt="Delivery" />
        </div>
      </section>

      {/* Delivery Steps */}
      <section className="delivery-steps">
        <h2>How It Works</h2>
        <div className="steps-container">
          <div className="step-card">
            <img src={assets.bag_icon} alt="Select Food" />
            <h4>Choose Your Meal</h4>
            <p>Select from a wide variety of salads, rolls, sandwiches, cakes, and more.</p>
          </div>
          <div className="step-card">
            <img src={assets.basket_icon} alt="Add to Cart" />
            <h4>Add to Cart</h4>
            <p>Quickly add your favorite dishes to your cart and customize your order.</p>
          </div>
          <div className="step-card">
            <img src={assets.parcel_icon} alt="Fast Delivery" />
            <h4>Fast Delivery</h4>
            <p>We deliver fresh and hot meals right to your doorstep in record time.</p>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="delivery-categories">
        <h2>Popular Categories</h2>
        <div className="categories-grid">
          {menu_list.map((item, index) => (
            <div className="category-card" key={index}>
              <img src={item.menu_image} alt={item.menu_name} />
              <h4>{item.menu_name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="delivery-cta">
        <h2>Ready to Order?</h2>
        <p>Get your food delivered hot & fresh with just a few clicks.</p>
        <button className="hero-btn">Start Ordering</button>
      </section>
      <div className="home">
        <Footer />
      </div>
    </div>
  );
};

export default Delivery;
