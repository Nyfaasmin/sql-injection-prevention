import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <div className="main-page">
      <div className="hero">
        <h1>Welcome to Hack Hotel</h1>
        <p>Your luxury stay starts here</p>
         <div className="buttons">
          <Link to="/login" className="btn">Login</Link>
          <Link to="/register" className="btn">Register</Link>
        </div> 
      </div>

      <div className="about">
        <h2>Explore Our Properties</h2>
        <p>Find your perfect getaway with Hack Hotel's vast selection of hotels.</p>
      </div>

      <div className="features">
        <div className="feature">
          <h3>Luxury Rooms</h3>
          <p>Experience world-class accommodations.</p>
        </div>
        <div className="feature">
          <h3>Dining</h3>
          <p>Indulge in fine dining at our exclusive restaurants.</p>
        </div>
        <div className="feature">
          <h3>Spa & Wellness</h3>
          <p>Relax and rejuvenate with our spa services.</p>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
