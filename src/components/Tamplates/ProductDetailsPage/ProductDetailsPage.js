import React from 'react';
import './ProductDetailsPage.css';
import ProductDescription from '../../organisms/ProductDescription/ProductDescription';
import ProductImages from '../../organisms/ProductImages/ProductImages';
const ProductDetailsPage = () => {
  return (
    <div className="product-details-page">
      <ProductImages />
      <ProductDescription />
    </div>
  );
};

export default ProductDetailsPage;
