import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CartProvider } from "./Context/CartContext";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import CartPage from "./Pages/CartPage";
import CheckoutPage from "./Pages/CheckoutPage";

const App = () => {
  return (
    <Router>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </CartProvider>
    </Router>
  );
};

export default App;
