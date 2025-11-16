import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { plantsData, categoryInfo } from '../data/plants';
import Header from './Header';

function ProductListing() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  // Get unique categories from plants data
  const categories = [...new Set(plantsData.map(plant => plant.category))];

  // Check if plant is already in cart
  const isInCart = (plantId) => {
    return cartItems.some(item => item.id === plantId);
  };

  // Handle adding plant to cart
  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
  };

  return (
    <div className="product-page">
      <Header />
      
      <div className="product-container">
        <h1 className="page-title">Our Plant Collection</h1>
        <p className="page-subtitle">
          Handpicked varieties to enhance your living space
        </p>

        {categories.map(category => (
          <div key={category} className="category-section">
            <div className="category-header">
              <span className="category-icon">
                {categoryInfo[category]?.icon || '🌱'}
              </span>
              <h2>{category}</h2>
            </div>
            
            <div className="products-grid">
              {plantsData
                .filter(plant => plant.category === category)
                .map(plant => (
                  <div key={plant.id} className="product-card">
                    <div className="product-image-wrapper">
                      <img
                        src={plant.image}
                        alt={plant.name}
                        className="product-image"
                      />
                      <span className="product-badge">Popular</span>
                    </div>
                    
                    <div className="product-info">
                      <h3>{plant.name}</h3>
                      <p className="product-price">
                        <span className="currency">$</span>
                        {plant.price.toFixed(2)}
                      </p>
                      
                      <button
                        className="add-to-cart-btn"
                        onClick={() => handleAddToCart(plant)}
                        disabled={isInCart(plant.id)}
                      >
                        {isInCart(plant.id) ? '✓ Added to Cart' : 'Add to Cart'}
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductListing;