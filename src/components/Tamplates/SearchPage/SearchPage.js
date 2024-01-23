import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ProductList from '../../organisms/ProductList/ProductList';

const SearchPage = () => {
  const productItems = useSelector((state) => state.items.itemsData);
  console.log(productItems);
  const searchProducts = (searchText) => {
    productItems.filter((category) => {
      const searchedProduct = category.products.filter((item) =>
        item.name.includes(searchText)
      );
    });
  };
  return <div>{}</div>;
};

export default SearchPage;
