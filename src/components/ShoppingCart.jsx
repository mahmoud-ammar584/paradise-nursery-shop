import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../redux/cartSlice';
import { Link } from 'react-router-dom';
import Header from './Header';

function ShoppingCart() {
  const dispatch = useDispatch();
  const { items, totalQuantity, totalCost } = useSelector(state => state.cart);

  const handleCheckout = () => {
    alert('Coming Soon! 🚀\n\nCheckout functionality will be available in the next update. Thank you for your interest!');
  };

  return (
    <div className="cart-page">
      <Header />
      
      <div className="cart-container">
        <h2>Shopping Cart</h2>

        {items.length > 0 ? (
          <>
            <div className="cart-summary">
              <h3>
                <span>📦</span>
                Order Summary
              </h3>
              
              <div className="summary-row">
                <span className="summary-label">Total Items:</span>
                <span className="summary-value">{totalQuantity}</span>
              </div>
              
              <div className="summary-row">
                <span className="summary-label">Subtotal:</span>
                <span className="summary-value">${totalCost.toFixed(2)}</span>
              </div>
              
              <div className="summary-row">
                <span className="summary-label">Shipping:</span>
                <span className="summary-value">Free</span>
              </div>
              
              <div className="summary-row">
                <span className="summary-label">Total:</span>
                <span className="total-cost">${totalCost.toFixed(2)}</span>
              </div>
            </div>

            <div className="cart-items">
              {items.map(item => (
                <div key={item.id} className="cart-item">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-item-image"
                  />
                  
                  <div className="cart-item-details">
                    <h3>{item.name}</h3>
                    <p className="cart-item-price">
                      Unit Price: <span className="unit-price">${item.price.toFixed(2)}</span>
                    </p>
                    <p className="item-subtotal">
                      Subtotal: ${(item.price * item.quantity).toFixed(2)}
                    </p>

                    <div className="quantity-controls">
                      <button
                        className="quantity-btn"
                        onClick={() => dispatch(decreaseQuantity(item.id))}
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>
                      
                      <span className="quantity-display">{item.quantity}</span>
                      
                      <button
                        className="quantity-btn"
                        onClick={() => dispatch(increaseQuantity(item.id))}
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  
                  <div className="cart-item-actions">
                    <button
                      className="delete-btn"
                      onClick={() => dispatch(removeFromCart(item.id))}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-actions">
              <button className="checkout-btn" onClick={handleCheckout}>
                <span>Proceed to Checkout</span>
                <span>→</span>
              </button>
              
              <Link to="/products" className="continue-shopping-btn">
                <span>←</span>
                <span>Continue Shopping</span>
              </Link>
            </div>
          </>
        ) : (
          <div className="empty-cart">
            <div className="empty-cart-icon">🛒</div>
            <h3>Your Cart is Empty</h3>
            <p>Looks like you haven't added any plants yet.</p>
            <Link to="/products" className="continue-shopping-btn">
              Start Shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default ShoppingCart;