import React from 'react';
import NewArrivals from '../atoms/NewArrivals/NewArrivals';
import HeroBanner from '../organisms/HeroBanner/HeroBanner';
import ProductList from '../organisms/ProductList/ProductList';
import ProductDetailsPage from './ProductDetailsPage/ProductDetailsPage';
import './Home.css';
import { useSelector } from 'react-redux';
import Footer from './Footer/Footer';
const Home = () => {
  const cloths = useSelector((item) => item.items);

  const handleCTA = () => {
    console.log('clicked');
    document
      .getElementById('newArrivals')
      .scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div>
      <HeroBanner handleClick={handleCTA} />
      <div className="newArrivals__container treanding__container">
        <div className="line"></div>
        <h1 id="newArrivals">Treanding</h1>
        <div className="line"></div>
      </div>
      <ProductList productItems={cloths.itemsData[1].products} />
      <div className="newArrivals__container">
        <div className="line"></div>
        <h1 id="newArrivals">New Arrivals</h1>
        <div className="line"></div>
      </div>
      <ProductList productItems={cloths.itemsData[1].products} />
      {/* <ProductDetailsPage /> */}
      <Footer />
    </div>
  );
};

export default Home;
