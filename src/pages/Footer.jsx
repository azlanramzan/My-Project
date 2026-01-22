import React from "react";
import { assets } from "../assets/assets";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Top: Company Description */}
      <div className="footer-top">
        <h2>Welcome to Tomato</h2>
        <p>
          Your ultimate solution for fast and reliable food ordering and delivery! 
          Our application connects food enthusiasts with their favorite restaurants and 
          provides a seamless ordering experience. Explore a wide variety of cuisines, 
          customize your orders, and enjoy fast deliveries right to your doorstep.
        </p>
      </div>

      <div className="footer-content">
        {/* Company Links */}
        <div className="footer-section">
          <h4>COMPANY</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/delivery">Delivery</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Get in Touch */}
        <div className="footer-section">
          <h4>GET IN TOUCH</h4>
          <p>+92301111111</p>
          <p>tomato19935@gmail.com</p>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Tomato. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
