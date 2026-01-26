import React, { useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import "./Navbar.css";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [openHamburger, setOpenHamburger] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search:", searchQuery);
    setSearchQuery("");
    setShowSearch(false);
  };

  return (
    <>
      {/* ================= TOP NAVBAR ================= */}
      <nav className="navbar-top">
        <div className="navbar-logo">
          <Link to="/">
            <img src={assets.logo} alt="Logo" />
          </Link>
        </div>

        {/* Desktop buttons */}
        <div className="navbar-actions">
          <Link to="/login">
            <button className="login-btn">Login</button>
          </Link>
          <Link to="/cart" className="cart-btn">
            <img src={assets.basket_icon} alt="Cart" />
          </Link>
        </div>

        {/* Hamburger (tablet & mobile) */}
        <div
          className="hamburger"
          onClick={() => setOpenHamburger(!openHamburger)}
        >
          ☰
        </div>
      </nav>

      {/* Hamburger dropdown */}
      {openHamburger && (
        <div className="hamburger-menu">
          <Link to="/login" onClick={() => setOpenHamburger(false)}>
            Login
          </Link>
          <Link to="/cart" onClick={() => setOpenHamburger(false)}>
            Cart
          </Link>
        </div>
      )}

      {/* ================= SECOND NAVBAR ================= */}
      <nav className="navbar-bottom">
        <div className="navbar-bottom-inner">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/delivery">Delivery</Link>
          <Link to="/privacy">Privacy</Link>

          {/* Search icon */}
          <span
            className="search-icon"
            onClick={() => setShowSearch(!showSearch)}
          >
            🔍
          </span>
        </div>

        {/* Search input */}
        {showSearch && (
          <form className="navbar-search" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />
            <button type="submit">Go</button>
          </form>
        )}
      </nav>
    </>
  );
};

export default Navbar;
