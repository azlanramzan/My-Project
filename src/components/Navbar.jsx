import React, { useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import "./Navbar.css";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search Query:", searchQuery);
    setSearchQuery("");
  };

  return (
    <>
      {/* Top navbar (fixed) */}
      <nav className="navbar-top">
        <div className="navbar-logo">
          <Link to="/"><img src={assets.logo} alt="Logo" /></Link>
        </div>
        <div className="navbar-right">
          <Link to="/login">
            <button className="login-btn">Login</button>
          </Link>
          <Link to="/cart" className="cart-btn">
            <img src={assets.basket_icon} alt="Cart" />
          </Link>
        </div>
      </nav>

      {/* Second movable navbar (under top) */}
      <nav className="navbar-bottom">
        <div className="navbar-scroll-wrapper">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/delivery">Delivery</Link>
          <Link to="/privacy">Privacy</Link>

          {/* Search inside bottom navbar */}
          <form className="navbar-search" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit">Go</button>
          </form>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
