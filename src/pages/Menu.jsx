import './Menu.css';

const menuItems = [
  {
    category: "Fresh Breads",
    items: [
      { name: "Bauernbrot", price: "$6.50", description: "Traditional German Farmer's Bread. Dark, hearty, and sour.", image: "/bread.png" },
      { name: "Vollkornbrot", price: "$7.00", description: "100% Whole Rye Bread. Dense and nutritious.", image: "/bread.png" },
      { name: "Brötchen", price: "$1.50", description: "Classic German bread rolls. Crispy outside, fluffy inside.", image: "/bread.png" }
    ]
  },
  {
    category: "Authentic Pretzels",
    items: [
      { name: "Salted pretzel", price: "$3.50", description: "The original Bavarian soft pretzel with coarse sea salt.", image: "/Salted pretzels.jpg" },
      { name: "Käsebrezel", price: "$4.50", description: "Soft pretzel baked with a crust of melted Emmental cheese.", image: "/pretzel.png" },
      { name: "Pretzel Sticks", price: "$3.00", description: "Straight pretzel rolls, perfect for sandwiches.", image: "/pretzel.png" }
    ]
  },
  {
    category: "Pastries",
    items: [
      { name: "Freshly baked rolls", price: "$3.00", description: "Soft on the inside, crispy on the outside, just how you love them!", image: "/Freshly baked rolls.jpg" },
      { name: "Fresh-baked butter crumbles", price: "$5.50", description: "one raspberry bliss and one loaded with apple cinnamon – are straight-up divine.", image: "/Fresh-baked butter crumbles.png" },
       { name: "Cherry Puff ", price: "$3.00", description: " Buttery pastry perfection with that sweet, juicy filling that’s going to hit different.", image: "/Cherry Puff.png" }
    ]
  },
  {
    category: "Beverages",
    items: [
      { name: "Kaffee", price: "$3.50", description: "Classic German filter coffee, rich and aromatic.", image: "/coffee.png" },
      { name: "Espresso", price: "$2.50", description: "A strong shot of dark roasted espresso.", image: "/coffee.png" },
      { name: "Heiße Schokolade", price: "$4.00", description: "Warm, creamy hot chocolate topped with whipped cream.", image: "/coffee.png" }
    ]
  }
];

const Menu = () => {
  return (
    <div className="menu-page animate-fade-in section">
      <div className="container">
        <div className="menu-header">
          <h1>Our Menu</h1>
          <p>Baked fresh every day, following centuries-old traditions.</p>
        </div>

        <div className="menu-categories">
          {menuItems.map((cat, index) => (
            <div key={index} className="menu-category">
              <h2>{cat.category}</h2>
              <div className="menu-grid">
                {cat.items.map((item, i) => (
                  <div key={i} className="menu-card">
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
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
