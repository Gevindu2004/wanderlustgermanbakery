import { MapPin, Phone, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-section">
          <h3>Wanderlust Bakery</h3>
          <p>Bringing authentic German baking traditions straight to your table. Every pretzel, loaf, and pastry is baked with love and a dash of wanderlust.</p>
          <div className="social-icons">
            <a href="https://www.facebook.com/people/Wanderlust-German-Bakery/61582945659189/" aria-label="Facebook">FB</a>
            <a href="https://www.instagram.com/wanderlustgermanbakery/" aria-label="Instagram">IG</a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Info</h3>
          <ul className="contact-info">
            <li><MapPin size={18} /> Unit 9/23-29 Civic Dr, Greensborough VIC 3088, Australia</li>
            <li><Phone size={18} />  +61 493 935 658</li>
            <li><Mail size={18} /> info@wanderlustbakery.com.au</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Wanderlust Bakery. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
