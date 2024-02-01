import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer class="site-footer">
      <div class="container">
        <div>
          <Link to="/shoes" className="footer-links">
            Shoes
          </Link>
        </div>
        <div>
          <Link to="clothing" className="footer-links">
            Cloths
          </Link>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright © 2024 All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
