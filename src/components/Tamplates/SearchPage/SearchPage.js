import React from 'react';
import { useSelector } from 'react-redux';
import ProductList from '../../organisms/ProductList/ProductList';
const SearchPage = () => {
  const searchedPproductItems = useSelector(
    (state) => state.items.searchedItem
  );

  return (
    <div>
      <ProductList productItems={searchedPproductItems} />
    </div>
  );
};

export default SearchPage;
