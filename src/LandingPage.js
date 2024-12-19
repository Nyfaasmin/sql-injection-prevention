import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  // Assume username is stored in localStorage after login
  const username = localStorage.getItem('username') || 'Guest';

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token
    localStorage.removeItem('username'); // Remove username
    window.location.href = '/login'; // Redirect to login page
  };

  return (
    <div className="landing-page">
      {/* Top Navigation Bar with Profile Section */}
      <nav className="top-nav">
        <div className="container">
          <div className="logo">
            <h2>Hack Hotel</h2>
          </div>
          <div className="profile">
            <span className="username">Hello, {username}</span>
            <button onClick={handleLogout} className="btn-logout">Logout</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container text-center">
          <h1>Welcome Back to Hack Hotel</h1>
          <p>Your journey to luxury and relaxation continues.</p>
          <a href="/bookings" className="btn btn-primary">View Your Bookings</a>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <h2 className="text-center">Our Exclusive Services</h2>
          <div className="row">
            <div className="col-md-4 text-center">
              <i className="fas fa-concierge-bell"></i>
              <h4>24/7 Concierge</h4>
              <p>Experience seamless service anytime, anywhere.</p>
            </div>
            <div className="col-md-4 text-center">
              <i className="fas fa-utensils"></i>
              <h4>Fine Dining</h4>
              <p>Enjoy gourmet meals crafted by world-class chefs.</p>
            </div>
            <div className="col-md-4 text-center">
              <i className="fas fa-spa"></i>
              <h4>Spa & Wellness</h4>
              <p>Unwind with our rejuvenating spa treatments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Rooms Section */}
      <section className="featured-rooms-section">
        <div className="container">
          <h2 className="text-center">Our Featured Rooms</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <img src="/room1.jpg" alt="Deluxe Room" />
                <div className="card-body">
                  <h5>Deluxe Room</h5>
                  <p>$120 / night</p>
                  <a href="/book" className="btn btn-primary">Book Now</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="/room2.jpg" alt="Executive Suite" />
                <div className="card-body">
                  <h5>Executive Suite</h5>
                  <p>$200 / night</p>
                  <a href="/book" className="btn btn-primary">Book Now</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="/room3.jpg" alt="Presidential Suite" />
                <div className="card-body">
                  <h5>Presidential Suite</h5>
                  <p>$500 / night</p>
                  <a href="/book" className="btn btn-primary">Book Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="text-center">What Our Guests Say</h2>
          <div className="row">
            <div className="col-md-6">
              <div className="testimonial">
                <p>"Absolutely amazing experience! The staff was friendly, and the rooms were luxurious."</p>
                <h5>- Jane Doe</h5>
              </div>
            </div>
            <div className="col-md-6">
              <div className="testimonial">
                <p>"The dining options were exquisite, and the spa treatments were a dream. Highly recommend!"</p>
                <h5>- John Smith</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container text-center">
          <p>&copy; 2024 Hack Hotel. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
//background: url('C:/Users/patha/OneDrive/Desktop/injection/sql1/sql/front/luxury-stay.jpg') no-repeat center center/cover;