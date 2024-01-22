import React from 'react';
import Jacket1 from '../../../Assests/clothing/men/jacket1.png';
import Jacket2 from '../../../Assests/clothing/men/jacket2.png';
import Jacket3 from '../../../Assests/clothing/men/jacket3.png';
import './ProductImages.css';
const ProductImages = () => {
  return (
    <div className="product-images-container">
      <div className="secondary-images-container">
        <img className="secondary-image" src={Jacket2} />
        <img className="secondary-image" src={Jacket3} />
      </div>
      <img className="primary-image" src={Jacket1} />
    </div>
  );
};

export default ProductImages;
