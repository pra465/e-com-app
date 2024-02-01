import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import './CartIcon.css';
const CartIcon = ({ toggleCart }) => {
  const cartItemsNumber = useSelector((state) => state.items);
  const length = cartItemsNumber.cartItems.length;
  return (
    <div onClick={toggleCart}>
      <div className="cartIcon">
        <FaShoppingCart />
      </div>
      <div className="items-counter-container">
        <p className="items-counter">{length}</p>
      </div>
    </div>
  );
};

export default CartIcon;
