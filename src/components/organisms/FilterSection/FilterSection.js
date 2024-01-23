import React from 'react';
import Filter from '../../molecules/Filter/Filter';
import Sort from '../../molecules/Sort/Sort';
import './FilterSection.css';
const FilterSection = ({
  handleCheckboxChange,
  selectedGender,
  sortProducts,
}) => {
  return (
    <div className="filter-section">
      <Filter
        handleCheckboxChange={handleCheckboxChange}
        selectedGender={selectedGender}
      />
      <Sort sortProducts={sortProducts} />
    </div>
  );
};

export default FilterSection;
