import React, { useState } from 'react';
import './CartPage.css';
import { useSelector } from 'react-redux';
import CartItem from '../../molecules/CartItem/CartItem';
import Button from '../../atoms/Button/Button';
import { Primary } from '@storybook/blocks';
const CartPage = () => {
  const cartProducts = useSelector((state) => state.items);
  const totalAmount = cartProducts.cartItems.reduce(
    (totalAmount, item) => totalAmount + item.price * item.quantity,
    0
  );
  return (
    <div className="cartpage">
      {cartProducts &&
        cartProducts.cartItems.map((cartItem) => {
          return <CartItem cartItem={cartItem} />;
        })}
      <p className="totalAmount">Total: {Math.round(totalAmount)}</p>
      <Button label="checkout" classname="checkout"></Button>
    </div>
  );
};

export default CartPage;
