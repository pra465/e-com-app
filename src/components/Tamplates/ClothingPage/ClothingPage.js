import React, { useState, useEffect } from 'react';
import ProductList from '../../organisms/ProductList/ProductList';
import { useSelector } from 'react-redux';
import FilterSection from '../../organisms/FilterSection/FilterSection';
import Footer from '../Footer/Footer';
const ClothingPage = () => {
  const cloths = useSelector((item) => item.items);
  const [selectedGender, setSelectedGender] = useState([]);
  const [filteredProducts, setFiltredProducts] = useState(
    cloths.itemsData[0].products
  );
  const handleCheckboxChange = (gender) => {
    if (selectedGender.includes(gender)) {
      setSelectedGender(
        selectedGender.filter((selected) => selected !== gender)
      );
    } else {
      setSelectedGender([...selectedGender, gender]);
    }
  };

  useEffect(() => {
    selectedGender.length > 0
      ? setFiltredProducts(
          cloths.itemsData[1].products.filter((product) =>
            selectedGender.includes(product.gender)
          )
        )
      : setFiltredProducts(cloths.itemsData[1].products);
  }, [selectedGender]);

  const sortProducts = (order) => {
    if (order === 'lowToHigh') {
      setFiltredProducts(
        [...filteredProducts].sort((a, b) => a.price - b.price)
      );
    }
    if (order === 'highToLow') {
      setFiltredProducts(
        [...filteredProducts].sort((a, b) => b.price - a.price)
      );
    }
  };
  return (
    <div>
      <FilterSection
        handleCheckboxChange={handleCheckboxChange}
        selectedGender={selectedGender}
        sortProducts={sortProducts}
      />
      <ProductList productItems={filteredProducts} />
      <Footer />
    </div>
  );
};

export default ClothingPage;
