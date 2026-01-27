import React, { createContext, useState } from "react";

// Create context
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const MAX_ITEMS = 10;

  // Helper: total quantity of all items
  const getTotalItems = () => {
    return cartItems.reduce((acc, i) => acc + i.quantity, 0);
  };

  // Add item to cart
  const addToCart = (item) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i._id === item._id);
      const currentTotal = getTotalItems();

      // Check if adding would exceed max limit
      if (currentTotal >= MAX_ITEMS) {
        alert(`You can only have a maximum of ${MAX_ITEMS} items in your cart.`);
        return prev;
      }

      if (existing) {
        // Increase quantity if within limit
        if (currentTotal + 1 > MAX_ITEMS) {
          alert(`You can only have a maximum of ${MAX_ITEMS} items in your cart.`);
          return prev;
        }
        return prev.map((i) =>
          i._id === item._id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        // Add new item
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };

  // Remove item from cart
  const removeFromCart = (itemId) => {
    setCartItems((prev) => prev.filter((i) => i._id !== itemId));
  };

  // Update quantity (+/-)
  const updateQuantity = (itemId, amount) => {
    setCartItems((prev) => {
      const item = prev.find((i) => i._id === itemId);
      if (!item) return prev;

      const currentTotal = getTotalItems();
      const newQuantity = item.quantity + amount;

      // Prevent quantity below 1
      if (newQuantity < 1) return prev;

      // Prevent exceeding max items
      if (amount > 0 && currentTotal + amount > MAX_ITEMS) {
        alert(`You can only have a maximum of ${MAX_ITEMS} items in your cart.`);
        return prev;
      }

      return prev.map((i) =>
        i._id === itemId ? { ...i, quantity: newQuantity } : i
      );
    });
  };

  // Calculate total price
  const getTotal = () => {
    return cartItems.reduce((acc, i) => acc + i.price * i.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        getTotal,
        getTotalItems, // expose total items
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
