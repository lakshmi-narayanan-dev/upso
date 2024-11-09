import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './components.css'; // Ensure the CSS is imported correctly

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the mobile menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the mobile menu visibility
  };

  return (
    <header>
      <nav>
        <div className="logo">Upso</div>
        <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><Link to="/">Home</Link></li>
            {/* <li><Link to="/#about-section">About</Link></li> */}
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/global">Global</Link></li>
            <li><Link to="/news">News</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
