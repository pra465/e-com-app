import React from 'react';
import './ProductImages.css';
const ProductImages = ({ product }) => {
  return (
    <div className="product-images-container">
      <div className="secondary-images-container">
        <img className="secondary-image" src={product.images[1]} />
        <img className="secondary-image" src={product.images[2]} />
      </div>
      <img className="primary-image" src={product.images[0]} />
    </div>
  );
};

export default ProductImages;
