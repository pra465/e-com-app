import React from 'react';
import './ProductDescription.css';
import Button from '../../atoms/Button/Button';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../slices/itemsSlice';
const ProductDescription = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div className="product-description-container">
      <h1 className="product-heading">{product.name}</h1>
      <h3>RS. {product.price}</h3>
      <p className="product-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <Button
        label="Add To Bag"
        classname="Primary"
        handleClick={() => dispatch(addToCart(product.id))}
      />
      <Button label="Add To Wishlist" classname="CTA wishlist-btn" />
    </div>
  );
};

export default ProductDescription;
