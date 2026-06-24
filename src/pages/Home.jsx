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
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
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
        viewport={{ once: false }}
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

      {/* Our Signatures (Layered Style) */}
      <section className="signatures-banner">
        {/* Item 1 */}
        <div className="signatures-chalkboard">
          <div className="signatures-paper">
            <motion.div 
              className="signatures-content"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
            >
              <span className="eyebrow-title">Popular</span>
              <h2>Salted Pretzel</h2>
              <p>The original Bavarian soft pretzel with coarse sea salt.</p>
              <Link to="/menu" className="btn-outline-small">Order Now</Link>
            </motion.div>
            
            <motion.img 
              src="/Salted pretzels.jpg" 
              alt="Salted Pretzel" 
              className="floating-item"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </div>
        </div>

        {/* Item 2 */}
        <div className="signatures-chalkboard reverse">
          <div className="signatures-paper">
            <motion.div 
              className="signatures-content"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
            >
              <span className="eyebrow-title">Popular</span>
              <h2>Freshly Baked Rolls</h2>
              <p>Soft on the inside, crispy on the outside, just how you love them.</p>
              <Link to="/menu" className="btn-outline-small">Order Now</Link>
            </motion.div>
            
            <motion.img 
              src="/Freshly baked rolls.jpg" 
              alt="Freshly Baked Rolls" 
              className="floating-item reverse-img"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="why-us section">
        <div className="container why-us-container">
          <motion.div 
            className="why-us-content"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2>Why Choose Wanderlust?</h2>
            <div className="feature-list">
              <motion.div 
                className="feature-item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
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
                viewport={{ once: false }}
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
                viewport={{ once: false }}
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
