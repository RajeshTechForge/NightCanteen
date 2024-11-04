import React from "react";

// icon
import { BiSolidUser } from "react-icons/bi";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">Night Canteen</div>
        <div className="right-side">
          <nav className="nav-links">
            <a href="#clothing">PURCHASING</a>
            <a href="#accessories">RENTING</a>
          </nav>
          <div className="header-icons">
            <BiSolidUser size={20} color="#9B26B5" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
