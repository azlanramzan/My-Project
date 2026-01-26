import React, { createContext, useState } from "react";

// Create context
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Add item to cart
  const addToCart = (item) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i._id === item._id);
      if (existing) {
        // If item exists, increase quantity
        return prev.map((i) =>
          i._id === item._id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        // Add new item with quantity 1
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
    setCartItems((prev) =>
      prev
        .map((i) =>
          i._id === itemId ? { ...i, quantity: i.quantity + amount } : i
        )
        .filter((i) => i.quantity > 0) // remove if quantity goes 0
    );
  };

  // Calculate total
  const getTotal = () => {
    return cartItems.reduce((acc, i) => acc + i.price * i.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQuantity, getTotal }}
    >
      {children}
    </CartContext.Provider>
  );
};
