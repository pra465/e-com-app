import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '../../atoms/Button/Button';
import './CartItem.css';
import {
  decreaseQuantity,
  deleteItem,
  increaseQuantity,
} from '../../../slices/itemsSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const deleteProduct = () => {
    dispatch(deleteItem(cartItem.id));
    toast('Item Deleted', {
      position: 'top-center',
    });
  };
  return (
    <div className="cartitem">
      <img src={cartItem.images[0]} className="cart-item-image" />
      <p>{cartItem.name}</p>
      <div className="quantity__handling">
        <Button
          classname="manage__quentity"
          label="-"
          handleClick={() => dispatch(decreaseQuantity(cartItem.id))}
        />
        <p>{cartItem.quantity}</p>
        <Button
          classname="manage__quentity"
          label="+"
          handleClick={() => dispatch(increaseQuantity(cartItem.id))}
        />
      </div>
      <Button label="Delete" classname="delete" handleClick={deleteProduct} />
      <ToastContainer />
    </div>
  );
};

export default CartItem;
