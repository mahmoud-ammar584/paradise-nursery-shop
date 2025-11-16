import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Paradise Nursery</h1>
        <p className="subtitle">Where Nature Meets Home</p>
        <p>
          Welcome to Paradise Nursery, your premier destination for exquisite houseplants. 
          We specialize in curating a stunning collection of indoor plants, succulents, 
          and flowering beauties that transform any space into a green sanctuary. 
          Each plant is carefully selected and nurtured to bring the perfect touch of 
          nature into your home. Discover the art of green living with us.
        </p>
        <Link to="/products" className="get-started-btn">
          Explore Our Collection
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;