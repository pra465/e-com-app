import React, { useState } from 'react';
import ProductList from '../../organisms/ProductList/ProductList';
import './ShoesPage.css';
import { useSelector } from 'react-redux';
import FilterSection from '../../organisms/FilterSection/FilterSection';
const ShoesPage = () => {
  const [selectedGender, setSelectedGender] = useState([]);
  const handleCheckboxChange = (gender) => {
    if (selectedGender.includes(gender)) {
      setSelectedGender(
        selectedGender.filter((selected) => selected !== gender)
      );
    } else {
      setSelectedGender([...selectedGender, gender]);
    }
  };
  const shoes = useSelector((item) => item.items);

  const filteredProducts =
    selectedGender.length > 0
      ? shoes.itemsData[0].products.filter((product) =>
          selectedGender.includes(product.gender)
        )
      : shoes.itemsData[0].products;

  return (
    <div>
      <FilterSection
        handleCheckboxChange={handleCheckboxChange}
        selectedGender={selectedGender}
      />
      <ProductList productItems={filteredProducts} />
    </div>
  );
};

export default ShoesPage;
