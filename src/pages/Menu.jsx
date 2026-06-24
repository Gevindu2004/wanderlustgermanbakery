import { useState } from 'react';
import { motion } from 'framer-motion';
import './Menu.css';

const menuItems = [
  {
    category: "Fresh Breads",
    items: [
      { name: "Bauernbrot", price: "$6.50", description: "Traditional German Farmer's Bread. Dark, hearty, and sour.", image: "/bread.png" },
      { name: "Vollkornbrot", price: "$7.00", description: "100% Whole Rye Bread. Dense and nutritious.", image: "/Vollkornbrot.jpg" },
      { name: "Brötchen", price: "$1.50", description: "Classic German bread rolls. Crispy outside, fluffy inside.", image: "/Brötchen.jpg" }
    ]
  },
  {
    category: "Authentic Pretzels",
    items: [
      { name: "Salted pretzel", price: "$3.50", description: "The original Bavarian soft pretzel with coarse sea salt.", image: "/Salted pretzels.jpg" },
      { name: "Käsebrezel", price: "$4.50", description: "Soft pretzel baked with a crust of melted Emmental cheese.", image: "/pretzel.png" },
      { name: "Pretzel Sticks", price: "$3.00", description: "Straight pretzel rolls, perfect for sandwiches.", image: "/Pretzel Sticks.jpg" }
    ]
  },
  {
    category: "Pastries",
    items: [
      { name: "Freshly baked rolls", price: "$3.00", description: "Soft on the inside, crispy on the outside, just how you love them!", image: "/Freshly baked rolls.jpg" },
      { name: "Fresh-baked butter crumbles", price: "$5.50", description: "One raspberry bliss and one loaded with apple cinnamon – are straight-up divine.", image: "/Fresh-baked butter crumbles.png" },
       { name: "Cherry Puff ", price: "$3.00", description: " Buttery pastry perfection with that sweet, juicy filling that’s going to hit different.", image: "/Cherry Puff.png" }
    ]
  },
  {
    category: "Beverages",
    items: [
      { name: "Kaffee", price: "$3.50", description: "Classic German filter coffee, rich and aromatic.", image: "/coffee.png" },
      { name: "Espresso", price: "$2.50", description: "A strong shot of dark roasted espresso.", image: "/coffee2.jpg" },
      { name: "Heiße Schokolade", price: "$4.00", description: "Warm, creamy hot chocolate topped with whipped cream.", image: "/Heiße Schokolade.jpg" }
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Menu = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const categories = ['All', ...menuItems.map(item => item.category)];

  const filteredMenuItems = activeFilter === 'All' 
    ? menuItems 
    : menuItems.filter(cat => cat.category === activeFilter);

  return (
    <div className="menu-page section">
      <div className="container">
        <motion.div 
          className="menu-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>Our Menu</h1>
          <p>Baked fresh every day, following centuries-old traditions.</p>
        </motion.div>

        <motion.div 
          className="menu-filters"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((cat, index) => (
            <button 
              key={index}
              className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <div className="menu-categories">
          {filteredMenuItems.map((cat, index) => (
            <motion.div 
              key={index} 
              className="menu-category"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
            >
              <h2>{cat.category}</h2>
              <motion.div 
                className="menu-grid"
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
              >
                {cat.items.map((item, i) => (
                  <motion.div key={i} className="menu-card" variants={itemVariants}>
                    <div className="menu-card-img-container">
                      <img src={item.image} alt={item.name} className="menu-card-img" />
                    </div>
                    <div className="menu-card-content">
                      <div className="menu-card-header">
                        <h3>{item.name}</h3>
                        <span className="menu-card-price">{item.price}</span>
                      </div>
                      <p className="menu-card-desc">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
