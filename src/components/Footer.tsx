import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>ONLINE STORE</h3>
          <ul>
            <li>MEN CLOTHING</li>
            <li>WOMEN CLOTHING</li>
            <li>MEN ACCESSORIES</li>
            <li>WOMEN ACCESSORIES</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>HELPFUL LINK</h3>
          <ul>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>PARTNERS</h3>
          <ul>
            <li>ZARA</li>
            <li>PANTALOONS</li>
            <li>LEVIS</li>
            <li>UCB</li>
            <li>+ MANY MORE</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>ADDRESS</h3>
          <ul>
            <li>BUILDING 101</li>
            <li>CENTRAL AVENUE</li>
            <li>LA - 902722</li>
            <li>UNITED STATES</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">© Priyanka Sharma | EDYODA</div>
    </footer>
  );
};

export default Footer;
