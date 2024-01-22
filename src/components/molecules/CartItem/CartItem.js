import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '../../atoms/Button/Button';
import './CartItem.css';
import { deleteItem } from '../../../slices/itemsSlice';
const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const deleteProduct = () => {
    dispatch(deleteItem(cartItem.id));
  };
  return (
    <div className="cartitem">
      <img src={cartItem.images[0]} className="cart-item-image" />
      <p>{cartItem.name}</p>
      <Button label="Delete" classname="CTA" handleClick={deleteProduct} />
    </div>
  );
};

export default CartItem;
