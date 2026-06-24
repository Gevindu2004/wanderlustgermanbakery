import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import logo from '../assets/images.jpg';
import './Navbar.css';

const Navbar = ({ isDarkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container nav-container">
        <NavLink to="/" className="nav-logo">
          <img src={logo} alt="Wanderlust Bakery Logo" className="logo-image" />
          <span>Wanderlust Bakery</span>
        </NavLink>

        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>

        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <NavLink to="/" className="nav-links" onClick={toggleMenu}>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/menu" className="nav-links" onClick={toggleMenu}>
              Menu
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-links" onClick={toggleMenu}>
              About Us
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className="nav-links" onClick={toggleMenu}>
              Contact Us
            </NavLink>
          </li>
          <li className="nav-item theme-toggle-item">
            <div 
              className={`theme-switch ${isDarkMode ? 'dark' : 'light'}`} 
              onClick={toggleTheme} 
              aria-label="Toggle Dark Mode"
            >
              <motion.div 
                className="theme-slider"
                layout
                transition={{ type: "spring", stiffness: 700, damping: 30 }}
              >
                {isDarkMode ? <Moon size={14} /> : <Sun size={14} />}
              </motion.div>
            </div>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
