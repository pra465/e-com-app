import React from 'react';
import NavLink from '../../atoms/NavLink/NavLink';
import './NavigationLink.css';
const NavigationLink = () => {
  return (
    <div className={'nav-link-container'}>
      <NavLink label="Shoes" pathUrl="/shoes" />
      <NavLink label="Clothing" pathUrl="/clothing" />
    </div>
  );
};

export default NavigationLink;
