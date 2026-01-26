import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { food_list } from "../assets/assets.js";
import Footer from "./Footer.jsx";
import { toast } from "react-toastify"; // toast notifications
import "./Menu.css";

const Menu = () => {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  // Add item to cart + toast
  const handleAddToCart = (item) => {
    addToCart(item);
    toast.success(`${item.name} added to cart!`);
  };

  // Navigate to PlaceOrder page with a single item
  const handleOrderNow = (item) => {
    navigate("/place-order", { state: { cartItems: [{ ...item, quantity: 1 }] } });
  };

  const firstRow = food_list.slice(0, 2);
  const otherItems = food_list.slice(2);

  return (
    <div className="menu-container">
      <h2 className="menu-title">Our Menu</h2>

      {/* First Row */}
      <div className="menu-row">
        {firstRow.map((item) => (
          <div className="menu-card" key={item._id}>
            <img src={item.image} alt={item.name} className="menu-image" />
            <h4 className="menu-name">{item.name}</h4>
            <p className="menu-description">{item.description}</p>
            <p className="menu-price"><strong>${item.price}</strong></p>
            <div className="menu-buttons">
              <button
                className="menu-order-btn"
                onClick={() => handleOrderNow(item)}
              >
                Order Now
              </button>
              <button
                className="menu-add-cart-btn"
                onClick={() => handleAddToCart(item)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Other Items */}
      <div className="menu-cards">
        {otherItems.map((item) => (
          <div className="menu-card" key={item._id}>
            <img src={item.image} alt={item.name} className="menu-image" />
            <h4 className="menu-name">{item.name}</h4>
            <p className="menu-description">{item.description}</p>
            <p className="menu-price"><strong>${item.price}</strong></p>
            <div className="menu-buttons">
              <button
                className="menu-order-btn"
                onClick={() => handleOrderNow(item)}
              >
                Order Now
              </button>
              <button
                className="menu-add-cart-btn"
                onClick={() => handleAddToCart(item)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Menu;
