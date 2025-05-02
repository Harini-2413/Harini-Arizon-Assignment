
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MiniCart from './MiniCart';
import '../styles/Header.css';

const Header = () => {
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    console.log("Cart icon clicked");
    setShowCart(prev => !prev);
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <Link to="/">Arizon</Link>
        </div>
        <nav className="nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/products" className="nav-link">Products</Link>
          <button className="cart-button" onClick={toggleCart}>
            Cart
          </button>
        </nav>
      </div>

      {showCart && <MiniCart />}
    </header>
  );
};

export default Header;