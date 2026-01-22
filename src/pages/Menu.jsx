import React from "react";
import "./Menu.css";
import { food_list } from "../assets/assets.js";
import Footer from "./Footer.jsx";

const Menu = () => {
  const firstRow = food_list.slice(0, 2);
  const otherItems = food_list.slice(2);

  return (
    <div className="menu-container">
      <h2 className="menu-title">Our Menu</h2>

      {/* First Row - 2 items */}
      <div className="menu-row">
        {firstRow[0] && (
          <div className="menu-card" key={firstRow[0]._id}>
            <img src={firstRow[0].image} alt={firstRow[0].name} className="menu-image" />
            <h4 className="menu-name">{firstRow[0].name}</h4>
            <p className="menu-description">{firstRow[0].description}</p>
            <p className="menu-price"><strong>${firstRow[0].price}</strong></p>
            <div className="menu-buttons">
              <button className="menu-order-btn">Order Now</button>
              <button className="menu-add-cart-btn">Add to Cart</button>
            </div>
          </div>
        )}

        {/* Center decor box with description */}
        <div className="menu-center-decor">
          <div className="menu-center-content">
            <h3>Discover Our Delicious Menu</h3>
            <p>
              Explore our wide variety of fresh and tasty dishes, from crisp salads to hearty pasta, 
              flavorful rolls, and sweet desserts. Every item is carefully prepared to give you the 
              best dining experience. Order now and enjoy the perfect meal at your doorstep!
            </p>
          </div>
        </div>

        {firstRow[1] && (
          <div className="menu-card" key={firstRow[1]._id}>
            <img src={firstRow[1].image} alt={firstRow[1].name} className="menu-image" />
            <h4 className="menu-name">{firstRow[1].name}</h4>
            <p className="menu-description">{firstRow[1].description}</p>
            <p className="menu-price"><strong>${firstRow[1].price}</strong></p>
            <div className="menu-buttons">
              <button className="menu-order-btn">Order Now</button>
              <button className="menu-add-cart-btn">Add to Cart</button>
            </div>
          </div>
        )}
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
              <button className="menu-order-btn">Order Now</button>
              <button className="menu-add-cart-btn">Add to Cart</button>
            </div>
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

export default Menu;
