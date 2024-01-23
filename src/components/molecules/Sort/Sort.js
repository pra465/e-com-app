import React, { useState } from 'react';

const Sort = ({ sortProducts }) => {
  const [sortOrder, setSortOrder] = useState('');
  const handleChange = (e) => {
    setSortOrder(e.target.value);
    sortProducts(e.target.value);
  };
  return (
    <div>
      <select onChange={handleChange} value={sortOrder}>
        <option value="">Select</option>
        <option value="lowToHigh">High to Low</option>
        <option value="highToLow">Low to high</option>
      </select>
    </div>
  );
};

export default Sort;
