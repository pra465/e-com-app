import React from 'react';
import './ProductDetailsPage.css';
import ProductDescription from '../../organisms/ProductDescription/ProductDescription';
import ProductImages from '../../organisms/ProductImages/ProductImages';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
const ProductDetailsPage = () => {
  const { productId } = useParams();
  const productArray = useSelector(
    (state) => state.items.itemsData[0].products
  );
  const productItem = productArray[productId - 1];
  return (
    <div className="product-details-page">
      <ProductImages product={productItem} />
      <ProductDescription />
    </div>
  );
};

export default ProductDetailsPage;
