import React, { useState } from "react";

const Header: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">SHOPLANE</div>
        <nav className="nav-links">
          <a href="#clothing">CLOTHING</a>
          <a href="#accessories">ACCESSORIES</a>
        </nav>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for Clothing and Accessories"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="search-button">
            <span className="search-icon">🔍</span>
          </button>
        </div>
        <div className="header-icons">
          <div className="cart-icon">
            <span>🛒</span>
            <span className="cart-count">0</span>
          </div>
          <div className="profile-icon">👤</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
