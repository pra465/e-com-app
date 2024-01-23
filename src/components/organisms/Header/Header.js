import React from 'react';
import CartIcon from '../../atoms/CartIcon/CartIcon';
import Logo from '../../atoms/Logo/Logo';
import SearchBar from '../../atoms/SearchBar/SearchBar';
import NavigationLink from '../../molecules/NavigationLink/NavigationLink';
import { RxHamburgerMenu } from 'react-icons/rx';
import './Header.css';
import { useState } from 'react';
import CartPage from '../cartPage/CartPage';
const Header = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const [toggleCart, setToggleCart] = useState(false);
  const toggleCartPage = () => {
    setToggleCart(!toggleCart);
  };
  const toggleNavBar = () => {
    setToggleNav(!toggleNav);
  };
  return (
    <div className="header">
      <div className="logo">
        <Logo />
      </div>
      <div className="nav-links">
        <NavigationLink />
      </div>
      <div className="search-bar">
        <SearchBar />
      </div>
      <CartIcon toggleCart={toggleCartPage} />
      <RxHamburgerMenu className="hamburgur-icon" onClick={toggleNavBar} />
      {toggleNav && (
        <div className="nav-container-small-device">
          <NavigationLink />
          <SearchBar />
        </div>
      )}
      {toggleCart && <CartPage />}
    </div>
  );
};

export default Header;
