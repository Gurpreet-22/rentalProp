import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (property) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(item => item.id === property.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === property.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...property, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const increaseQuantity = (id) => {
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
          : item
      )
    );
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, getTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
};
