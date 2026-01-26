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
  const [hideNav, setHideNav] = useState(false); // new state
  const [lastScrollY, setLastScrollY] = useState(0); // track last scroll

  // Bounce animation for cart
  useEffect(() => {
    if (cartItems.length > 0) {
      setBounce(true);
      const timer = setTimeout(() => setBounce(false), 300);
      return () => clearTimeout(timer);
    }
  }, [cartItems]);

  // Scroll hide/show logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // scrolling down
        setHideNav(true);
      } else {
        // scrolling up
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
      {/* ================= TOP NAVBAR ================= */}
      <nav className="navbar-top">
        <div className="navbar-logo">
          <Link to="/">
            <img src={assets.logo} alt="Logo" />
          </Link>
        </div>

        <div className="navbar-actions">
          <Link to="/login">
            <button className="login-btn">Login</button>
          </Link>
          <Link
            to="/cart"
            className={`cart-btn ${bounce ? "bounce" : ""}`}
          >
            <img src={assets.basket_icon} alt="Cart" />
            {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
          </Link>
        </div>

        <div
          className="hamburger"
          onClick={() => setOpenHamburger(!openHamburger)}
        >
          ☰
        </div>
      </nav>

      {openHamburger && (
        <div className="hamburger-menu">
          <Link to="/login" onClick={() => setOpenHamburger(false)}>Login</Link>
          <Link to="/cart" onClick={() => setOpenHamburger(false)}>Cart ({totalItems})</Link>
        </div>
      )}

      {/* ================= SECOND NAVBAR ================= */}
      <nav className={`navbar-bottom ${hideNav ? "hide" : ""}`}>
        <div className="navbar-bottom-inner">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/delivery">Delivery</Link>
          <Link to="/privacy">Privacy</Link>

          <span
            className="search-icon"
            onClick={() => setShowSearch(!showSearch)}
          >
            🔍
          </span>
        </div>

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
