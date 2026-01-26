import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Footer from "./Footer";
import "./PlaceOrder.css";

const PlaceOrder = () => {
  const location = useLocation();
  const { cartItems } = location.state || []; // get all cart items

  const [quantities, setQuantities] = useState(cartItems.map(item => item.quantity));
  const [customerName, setCustomerName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const updateQuantity = (index, value) => {
    setQuantities(prev => {
      const newQuantities = [...prev];
      newQuantities[index] = Math.max(1, newQuantities[index] + value);
      return newQuantities;
    });
  };

  const totalBill = cartItems.reduce(
    (acc, item, index) => acc + item.price * quantities[index],
    0
  ) + 5; // $5 delivery

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Order Placed!\n
Customer: ${customerName}\n
Address: ${address}\n
Phone: ${phone}\n
Items:\n${cartItems.map((item, i) => `- ${item.name} x ${quantities[i]}`).join("\n")}
Total: $${totalBill}`);
    
    // Reset form
    setCustomerName("");
    setAddress("");
    setPhone("");
    setQuantities(cartItems.map(() => 1));
  };

  return (
    <div className="place-order-container">
      <h2>Place Your Order</h2>

      {cartItems.map((item, index) => (
        <div className="order-item-card" key={item._id}>
          <img src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
          <p>${item.price}</p>
          <div className="quantity-control">
            <button onClick={() => updateQuantity(index, -1)}>-</button>
            <span>{quantities[index]}</span>
            <button onClick={() => updateQuantity(index, 1)}>+</button>
          </div>
          <p>Total: ${item.price * quantities[index]}</p>
        </div>
      ))}

      <form className="order-form" onSubmit={handleSubmit}>
        <h3>Delivery Details</h3>
        <input
          type="text"
          placeholder="Customer Name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <div className="total-bill">
          Total (including $5 delivery): ${totalBill}
        </div>

        <button type="submit" className="submit-order-btn">
          Place Order
        </button>
      </form>

      <Footer />
    </div>
  );
};

export default PlaceOrder;
