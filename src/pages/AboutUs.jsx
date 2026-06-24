import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-page animate-fade-in section">
      <div className="container">
        <div className="about-header">
          <h1>Our Story</h1>
        </div>

        <div className="about-content">
          <div className="about-text">
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
          </div>
          
          <div className="about-image">
            <div className="image-placeholder">
              {/* Optional: Add an image here if available, or just a stylized block */}
              <div className="story-badge">
                Since 2025
              </div>
            </div>
          </div>

          <div className="about-stats">
            <div className="stat">
              <h3>2025</h3>
              <p>Year Established</p>
            </div>
            <div className="stat">
              <h3>100%</h3>
              <p>Natural Ingredients</p>
            </div>
            <div className="stat">
              <h3>50+</h3>
              <p>Traditional Recipes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
