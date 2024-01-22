import React from 'react';
import Button from '../../atoms/Button/Button';
import Image from '../../atoms/Image/Image';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import './ProductCard.css';
import { addToCart } from '../../../slices/itemsSlice';
import { useDispatch } from 'react-redux';
const ProductCard = ({ productItem }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addToCart(productItem.id));
  };
  return (
    <div className="product-card">
      <Image productImage={productItem.images[0]} />
      <h2>{productItem.name}</h2>
      <Paragraph label={productItem.subInfo} />
      <div className="price-btn">
        <Paragraph label={'Rs. ' + productItem.price} />
        <Button
          label="Add To Cart"
          classname="Primary"
          handleClick={handleClick}
        />
      </div>
    </div>
  );
};

export default ProductCard;
