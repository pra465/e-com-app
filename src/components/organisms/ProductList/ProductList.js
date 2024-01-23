import React from 'react';
import ProductCard from '../../molecules/ProductCard/ProductCard';
import './ProductList.css';
const ProductList = ({ productItems, treandingtext }) => {
  return (
    <div className="product-list-container">
      {treandingtext && (
        <div className="tranding-text-container">
          <div className="top-line"></div>
          <div>
            {' '}
            <p className="tranding-text">TREANDING</p>
          </div>
          <div className="bottom-line"></div>
        </div>
      )}
      <div className="product-list">
        {productItems.map((item) => (
          <ProductCard productItem={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
