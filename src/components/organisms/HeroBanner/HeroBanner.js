import React from 'react';
import Button from '../../atoms/Button/Button';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Heading from '../../atoms/Heading/Heading';
import './HeroBanner.css';
const HeroBanner = () => {
  return (
    <div className="hero-banner">
      <div className="hero-banner-mask"></div>
      <div className="hero-banner-content">
        <Heading label="Elevate Your Game, Unleash Your Passion!" width="30%" />
        <Paragraph
          label="Discover Premium Sports Gear for Every Victory - Where Performance Meets Style.Elevate Your Sporting Experience Today!"
          width="40%"
        />
        <Button label="shop now" classname="CTA" />
      </div>
    </div>
  );
};

export default HeroBanner;
