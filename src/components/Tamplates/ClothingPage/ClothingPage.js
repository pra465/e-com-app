import React, { useState } from 'react';
import ProductList from '../../organisms/ProductList/ProductList';
import { useSelector } from 'react-redux';
import FilterSection from '../../organisms/FilterSection/FilterSection';
const ClothingPage = () => {
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
  const cloths = useSelector((item) => item.items);

  const filteredProducts =
    selectedGender.length > 0
      ? cloths.itemsData[1].products.filter((product) =>
          selectedGender.includes(product.gender)
        )
      : cloths.itemsData[1].products;
  return (
    <div>
      <FilterSection
        handleCheckboxChange={handleCheckboxChange}
        selectedGender={selectedGender}
        // sortProducts={sortProducts}
      />
      <ProductList productItems={filteredProducts} />
    </div>
  );
};

export default ClothingPage;
