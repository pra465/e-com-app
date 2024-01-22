import React, { useState } from 'react';
import './CartPage.css';
import { useSelector } from 'react-redux';
import CartItem from '../../molecules/CartItem/CartItem';
const CartPage = () => {
  const cartProducts = useSelector((state) => state.items);
  const totalAmount = cartProducts.cartItems.reduce(
    (totalAmount, item) => totalAmount + item.price,
    0
  );
  return (
    <div className="cartpage">
      {cartProducts &&
        cartProducts.cartItems.map((cartItem) => {
          return <CartItem cartItem={cartItem} />;
        })}
      <p>Total: {totalAmount}</p>
    </div>
  );
};

export default CartPage;
