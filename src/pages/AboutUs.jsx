import { motion } from 'framer-motion';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-page section">
      <div className="container">
        <motion.div 
          className="about-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>Our Story</h1>
        </motion.div>

        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2>A Passion for Authentic Baking</h2>
            <p>
              Wanderlust Bakery was born out of a deep love for traditional European baking. 
              Our founder, Klaus, grew up in a small village in Bavaria, where the smell of fresh bread 
              was the first thing he woke up to every morning.
            </p>
            <p>
              After traveling the world and realizing how hard it was to find a true, authentic Laugenbrezel 
              or a slice of proper Schwarzwälder Kirschtorte, Klaus decided to bring the taste of his 
              childhood to his new home. 
            </p>
            <p>
              Today, Wanderlust Bakery stands as a testament to those old-world traditions. 
              We don't use preservatives or artificial flavors. We believe in time, temperature, and 
              the magic of natural fermentation. Every single item in our bakery is made from scratch, 
              by hand, every single day.
            </p>
          </motion.div>
          
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="image-placeholder">
              {/* Optional: Add an image here if available, or just a stylized block */}
              <div className="story-badge">
                Since 2025
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="about-stats"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.2 }
              }
            }}
          >
            <motion.div className="stat" variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}>
              <h3>2025</h3>
              <p>Year Established</p>
            </motion.div>
            <motion.div className="stat" variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}>
              <h3>100%</h3>
              <p>Natural Ingredients</p>
            </motion.div>
            <motion.div className="stat" variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}>
              <h3>50+</h3>
              <p>Traditional Recipes</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
