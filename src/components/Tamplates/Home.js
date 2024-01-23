import React from 'react';
import NewArrivals from '../atoms/NewArrivals/NewArrivals';
import HeroBanner from '../organisms/HeroBanner/HeroBanner';
import ProductList from '../organisms/ProductList/ProductList';
import ProductDetailsPage from './ProductDetailsPage/ProductDetailsPage';
import { useSelector } from 'react-redux';
const Home = () => {
  const cloths = useSelector((item) => item.items);
  return (
    <div>
      <HeroBanner />
      <ProductList
        productItems={cloths.itemsData[1].products}
        treandingtext={true}
      />
      <h1>New Arrivals</h1>
      <ProductList productItems={cloths.itemsData[1].products} />
      {/* <ProductDetailsPage /> */}
    </div>
  );
};

export default Home;
