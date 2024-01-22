import React from 'react';
import { Link } from 'react-router-dom';
import './NavLink.css';
const NavLink = ({ label, pathUrl }) => {
  return (
    <p>
      <Link to={pathUrl}>{label}</Link>
    </p>
  );
};

export default NavLink;
