
import React from 'react';
import { useCart } from '../context/CartContext';
import '../styles/MiniCart.css';

const MiniCart = () => {
  const { cartItems, removeFromCart } = useCart();

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="mini-cart">
      <h4>Mini Cart</h4>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map(item => (
              <li key={item.id} className="cart-item">
                <div>
                  <strong>{item.title}</strong>
                  <p>Qty: {item.quantity}</p>
                  <p>Price: ₹{item.price}</p>
                </div>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <div className="subtotal">Subtotal: ₹{subtotal.toFixed(2)}</div>
          <div className="cart-actions">
            <button>View Cart</button>
            <button disabled>Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default MiniCart;