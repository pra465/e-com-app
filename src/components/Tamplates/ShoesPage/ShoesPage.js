import React, { useEffect, useState } from 'react';
import ProductList from '../../organisms/ProductList/ProductList';
import './ShoesPage.css';
import { useSelector } from 'react-redux';
import FilterSection from '../../organisms/FilterSection/FilterSection';
import Footer from '../Footer/Footer';
const ShoesPage = () => {
  const shoes = useSelector((item) => item.items);
  const [selectedGender, setSelectedGender] = useState([]);
  const [filteredProducts, setFiltredProducts] = useState(
    shoes.itemsData[0].products
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
          shoes.itemsData[0].products.filter((product) =>
            selectedGender.includes(product.gender)
          )
        )
      : setFiltredProducts(shoes.itemsData[0].products);
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

export default ShoesPage;
