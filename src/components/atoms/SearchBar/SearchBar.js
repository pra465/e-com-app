import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { searchItem } from '../../../slices/itemsSlice';
import './SearchBar.css';
import Button from '../Button/Button';
const SearchBar = () => {
  const [searchText, setSearchText] = useState('');
  const products = useSelector((state) => state.items.itemsData);
  const dispatch = useDispatch();
  const handleClick = () => {
    const results = [];
    products.forEach((category) => {
      category.products.forEach((product) => {
        if (product.name.toLowerCase().includes(searchText.toLowerCase())) {
          results.push(product);
        }
      });
    });
    dispatch(searchItem(results));
    setSearchText('');
  };
  return (
    <div className="searchBar">
      <input
        type="text"
        className="search"
        onChange={(e) => setSearchText(e.target.value)}
        value={searchText}
      />
      <Link to="/searchedProducts">
        <div onClick={handleClick} className="search__btn">
          <Button label="Search" classname="Primary" />
        </div>
        {/* <button onClick={handleClick}>Search</button> */}
      </Link>
    </div>
  );
};

export default SearchBar;
