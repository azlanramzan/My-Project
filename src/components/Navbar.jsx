import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { CartContext } from "../context/CartContext";
import "./Navbar.css";

const Navbar = () => {
  const { cartItems } = useContext(CartContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [openHamburger, setOpenHamburger] = useState(false);
  const [bounce, setBounce] = useState(false);
  const [hideNav, setHideNav] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Cart bounce animation
  useEffect(() => {
    if (cartItems.length > 0) {
      setBounce(true);
      const timer = setTimeout(() => setBounce(false), 300);
      return () => clearTimeout(timer);
    }
  }, [cartItems]);

  // Scroll hide/show
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHideNav(true);
      } else {
        setHideNav(false);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search:", searchQuery);
    setSearchQuery("");
    setShowSearch(false);
  };

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <nav className={`navbar ${hideNav ? "hide" : ""}`}>
        {/* Left: Logo */}
        <div className="navbar-left">
          <Link to="/">
            <img src={assets.logo} alt="Logo" />
          </Link>
        </div>

        {/* Center: Nav Links (desktop only) */}
        <div className="navbar-center">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/delivery">Delivery</Link>
          <Link to="/privacy">Privacy</Link>
        </div>

        {/* Right: Search, Cart, Login, Hamburger */}
        <div className="navbar-right">
          <span
            className="search-icon"
            onClick={() => setShowSearch(!showSearch)}
          >
            🔍
          </span>

          <Link to="/cart" className={`cart-btn ${bounce ? "bounce" : ""}`}>
            <img src={assets.basket_icon} alt="Cart" />
            {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
          </Link>

          {/* Login button (desktop only) */}
          <Link to="/login" className="login-btn">
            Login
          </Link>

          {/* Hamburger (mobile only) */}
          <div
            className="hamburger"
            onClick={() => setOpenHamburger(!openHamburger)}
          >
            ☰
          </div>
        </div>

        {/* Search form */}
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

        {/* Hamburger menu */}
        {openHamburger && (
          <div className="hamburger-menu">
            <Link to="/" onClick={() => setOpenHamburger(false)}>Home</Link>
            <Link to="/menu" onClick={() => setOpenHamburger(false)}>Menu</Link>
            <Link to="/about" onClick={() => setOpenHamburger(false)}>About</Link>
            <Link to="/delivery" onClick={() => setOpenHamburger(false)}>Delivery</Link>
            <Link to="/privacy" onClick={() => setOpenHamburger(false)}>Privacy</Link>
            <Link to="/login" onClick={() => setOpenHamburger(false)}>Login</Link>
            <Link to="/cart" onClick={() => setOpenHamburger(false)}>Cart ({totalItems})</Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
