import React from 'react';
import ProductCard from '../../molecules/ProductCard/ProductCard';
import './ProductList.css';
const ProductList = ({ productItems }) => {
  return (
    <div className="product-list-container">
      <div className="product-list">
        {productItems.map((item) => (
          <ProductCard productItem={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
