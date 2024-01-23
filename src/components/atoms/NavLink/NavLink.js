import React from 'react';
import { Link } from 'react-router-dom';
import './NavLink.css';
const NavLink = ({ label, pathUrl }) => {
  return (
    <Link to={pathUrl} className="links">
      {label}
    </Link>
  );
};

export default NavLink;
