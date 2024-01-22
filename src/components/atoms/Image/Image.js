import React from 'react';
import './Image.css';
const Image = ({ productImage }) => {
  return (
    <div className="imageContainer">
      <img src={productImage} alt="Product Image" className="productImage" />
    </div>
  );
};

export default Image;
