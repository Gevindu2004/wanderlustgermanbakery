import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page animate-fade-in">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <img src="/hero2.png" alt="Wanderlust Bakery Interior" className="hero-bg" />
        <div className="container hero-content">
          <h1>Wanderlust Bakery</h1>
          <p>Taste the Tradition. Feel the Wanderlust.</p>
          <Link to="/menu" className="btn btn-primary hero-btn">
            Explore Our Menu <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </section>

      {/* Opening Hours Info Bar */}
      <section className="hours-bar">
        <div className="container hours-bar-container">
          <div className="hours-item">
            <span className="hours-day">Monday - Friday</span>
            <span className="hours-time">05:30 AM - 03:00 PM</span>
          </div>
          <div className="hours-item">
            <span className="hours-day">Saturday</span>
            <span className="hours-time">07:30 AM - 02:00 PM</span>
          </div>
          <div className="hours-item">
            <span className="hours-day">Sunday</span>
            <span className="hours-time">Closed</span>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="featured section container">
        <div className="section-header">
          <h2>Our Signatures</h2>
          <p>Hand-crafted with love, using traditional recipes.</p>
        </div>
        
        <div className="featured-grid">
          <div className="featured-card">
            <img src="/Salted pretzels.jpg" alt="Authentic Pretzels" />
            <div className="featured-card-content">
              <h3>Salted pretzel</h3>
              <p>The original Bavarian soft pretzel with coarse sea salt.</p>
            </div>
          </div>
          <div className="featured-card">
            <img src="/Freshly baked rolls.jpg" alt="Black Forest Cake" />
            <div className="featured-card-content">
              <h3>Freshly baked rolls</h3>
              <p>Soft on the inside, crispy on the outside, just how you love them</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="why-us section">
        <div className="container why-us-container">
          <div className="why-us-content">
            <h2>Why Choose Wanderlust?</h2>
            <div className="feature-list">
              <div className="feature-item">
                <Star className="feature-icon" />
                <div>
                  <h4>Authentic Recipes</h4>
                  <p>Our recipes have been passed down through generations from master bakers in Germany.</p>
                </div>
              </div>
              <div className="feature-item">
                <Star className="feature-icon" />
                <div>
                  <h4>Premium Ingredients</h4>
                  <p>We source only the finest flours, butter, and chocolates to ensure the highest quality.</p>
                </div>
              </div>
              <div className="feature-item">
                <Star className="feature-icon" />
                <div>
                  <h4>Baked Fresh Daily</h4>
                  <p>No shortcuts. Every loaf, pastry, and pretzel is baked from scratch every single morning.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
