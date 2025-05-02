import React from 'react';
import './FullCartPage.css';
import { useCart } from '../context/CartContext';

function FullCartPage() {
  const { state, dispatch } = useCart();

  const handleQuantityChange = (id, newQty) => {
    if (newQty >= 1) {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity: newQty } });
    }
  };

  const handleRemove = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  const subtotal = state.cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 5.99;
  const total = subtotal + shipping;

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {state.cartItems.length === 0 ? (
        <p className="empty-message">Your cart is empty.</p>
      ) : (
        <div className="cart-content">
          <div className="cart-items">
            {state.cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} />
                <div className="item-details">
                  <h3>{item.title}</h3>
                  <p>Price: ${item.price.toFixed(2)}</p>
                  <div className="quantity-controls">
                    <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
                  </div>
                  <button className="remove-btn" onClick={() => handleRemove(item.id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>

          <div className="summary">
            <h3>Order Summary</h3>
            <p>Subtotal: ${subtotal.toFixed(2)}</p>
            <p>Shipping: ${shipping.toFixed(2)}</p>
            <p><strong>Total: ${total.toFixed(2)}</strong></p>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default FullCartPage;