import { Link } from 'react-router-dom';
import { ArrowRight, Star, ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <img src="/hero2.png" alt="Wanderlust Bakery Interior" className="hero-bg" />
        <motion.div 
          className="container hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1>Wanderlust Bakery</h1>
          <p>Taste the Tradition. Feel the Wanderlust.</p>
          <Link to="/menu" className="btn btn-primary hero-btn">
            Explore Our Menu <ArrowRight size={20} className="ml-2" />
          </Link>
        </motion.div>

        <motion.div 
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <span className="scroll-text">Scroll</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <ArrowDown size={24} />
          </motion.div>
        </motion.div>
      </section>

      {/* Opening Hours Info Bar */}
      <motion.section 
        className="hours-bar"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
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
      </motion.section>

      {/* Featured Section */}
      <section className="featured section container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Our Signatures</h2>
          <p>Hand-crafted with love, using traditional recipes.</p>
        </motion.div>
        
        <div className="featured-grid">
          <motion.div 
            className="featured-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <img src="/Salted pretzels.jpg" alt="Authentic Pretzels" />
            <div className="featured-card-content">
              <h3>Salted pretzel</h3>
              <p>The original Bavarian soft pretzel with coarse sea salt.</p>
            </div>
          </motion.div>
          <motion.div 
            className="featured-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <img src="/Freshly baked rolls.jpg" alt="Black Forest Cake" />
            <div className="featured-card-content">
              <h3>Freshly baked rolls</h3>
              <p>Soft on the inside, crispy on the outside, just how you love them</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="why-us section">
        <div className="container why-us-container">
          <motion.div 
            className="why-us-content"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2>Why Choose Wanderlust?</h2>
            <div className="feature-list">
              <motion.div 
                className="feature-item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Star className="feature-icon" />
                <div>
                  <h4>Authentic Recipes</h4>
                  <p>Our recipes have been passed down through generations from master bakers in Germany.</p>
                </div>
              </motion.div>
              <motion.div 
                className="feature-item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Star className="feature-icon" />
                <div>
                  <h4>Premium Ingredients</h4>
                  <p>We source only the finest flours, butter, and chocolates to ensure the highest quality.</p>
                </div>
              </motion.div>
              <motion.div 
                className="feature-item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Star className="feature-icon" />
                <div>
                  <h4>Baked Fresh Daily</h4>
                  <p>No shortcuts. Every loaf, pastry, and pretzel is baked from scratch every single morning.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Home;
