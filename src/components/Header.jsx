import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const navigate = useNavigate();
  const totalQuantity = useSelector(state => state.cart.totalQuantity);

  return (
    <header className="header">
      <Link to="/" className="header-logo">
        <span className="logo-icon">🌿</span>
        <h1>Paradise Nursery</h1>
      </Link>
      
      <nav className="header-nav">
        <Link to="/products">Shop Plants</Link>
        
        <div 
          className="cart-icon-container" 
          onClick={() => navigate('/cart')}
          role="button"
          aria-label="Shopping cart"
        >
          <span className="cart-icon">🛒</span>
          {totalQuantity > 0 && (
            <span className="cart-count">{totalQuantity}</span>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;