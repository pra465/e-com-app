import React from 'react';
import './Logo.css';
import { Link } from 'react-router-dom';
const Logo = () => {
  return (
    <Link to="/" className="logo-link">
      <h1 className="logo">Flexfit</h1>
    </Link>
  );
};

export default Logo;
