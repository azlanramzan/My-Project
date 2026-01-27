import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "./Cart.css";
import Footer from "./Footer";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getTotal, getTotalItems } = useContext(CartContext);
  const navigate = useNavigate();

  const MAX_ITEMS = 10;

  const handleProceedToCheckout = () => {
    if (cartItems.length === 0) return;
    navigate("/place-order", { state: { cartItems } });
  };

  const handleUpdateQuantity = (itemId, change) => {
    const currentTotalItems = getTotalItems(); // total quantity in cart
    const item = cartItems.find((i) => i._id === itemId);
    const newItemQuantity = item.quantity + change;

    // Prevent negative quantity
    if (newItemQuantity < 1) return;

    // Prevent exceeding max items
    if (currentTotalItems + change > MAX_ITEMS) {
      alert(`You can only have a maximum of ${MAX_ITEMS} items in your cart.`);
      return;
    }

    updateQuantity(itemId, change);
  };

  return (
    <div className="cart-page">
      <h1 className="cart-title">Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty</p>
        </div>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div className="cart-card" key={item._id}>
              <div className="cart-info">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <div className="cart-quantity">
                  <button onClick={() => handleUpdateQuantity(item._id, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleUpdateQuantity(item._id, 1)}>+</button>
                  <button onClick={() => removeFromCart(item._id)}>Remove</button>
                </div>
              </div>
              <div className="cart-price">
                <h4>${item.price * item.quantity}</h4>
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
            <span>${getTotal()}</span>
          </div>
          <div className="summary-row">
            <span>Delivery</span>
            <span>$5</span>
          </div>
          <div className="summary-row total">
            <span>Total</span>
            <span>${getTotal() + 5}</span>
          </div>
          <button className="checkout-btn" onClick={handleProceedToCheckout}>
            Proceed to Checkout
          </button>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Cart;
