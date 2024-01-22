import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import './CartIcon.css';
const CartIcon = () => {
  const cartItemsNumber = useSelector((state) => state.items);
  const length = cartItemsNumber.cartItems.length;
  return (
    <div>
      <FaShoppingCart />
      <div className="items-counter-container">
        <p className="items-counter">{length}</p>
      </div>
    </div>
  );
};

export default CartIcon;
