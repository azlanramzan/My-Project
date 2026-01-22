import React from "react";
import { assets, food_list } from "../assets/assets";
import "./Cart.css";
import Footer from "./Footer";

const Cart = () => {
  // For demo, let's assume first 5 items are in cart
  const cartItems = food_list.slice(0, 5);

  return (
    <div className="cart-page">
      <h1 className="cart-title">Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <img src={assets.basket_icon} alt="Empty Cart" />
          <p>Your cart is empty</p>
        </div>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div className="cart-card" key={item._id}>
              <div className="cart-image">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="cart-info">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <div className="cart-quantity">
                  <button className="remove-btn">
                    <img src={assets.remove_icon_red} alt="Remove" />
                  </button>
                  <span>1</span>
                  <button className="add-btn">
                    <img src={assets.add_icon_green} alt="Add" />
                  </button>
                </div>
              </div>
              <div className="cart-price">
                <h4>${item.price}</h4>
              </div>
            </div>
          ))}
        </div>
      )}

      {cartItems.length > 0 && (
        <div className="cart-summary">
          <h2>Order Summary</h2>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>
              $
              {cartItems.reduce((acc, item) => acc + item.price, 0)}
            </span>
          </div>
          <div className="summary-row">
            <span>Delivery</span>
            <span>$5</span>
          </div>
          <div className="summary-row total">
            <span>Total</span>
            <span>
              $
              {cartItems.reduce((acc, item) => acc + item.price, 0) + 5}
            </span>
          </div>
          <button className="checkout-btn">Proceed to Checkout</button>
        </div>
      )}
      <div className="home">
        <Footer />
      </div>
    </div>
  );
};

export default Cart;
