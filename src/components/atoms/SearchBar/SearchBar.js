import React, { useState } from 'react';
import './SearchBar.css';
const SearchBar = () => {
  const [searchText, setSearchText] = useState('');
  const handleClick = () => {};
  return (
    <div className="searchBar">
      <input
        type="text"
        className="search"
        onChange={(e) => setSearchText(e.target.value)}
        value={searchText}
      />
      <button onClick={handleClick}>Search</button>
    </div>
  );
};

export default SearchBar;
