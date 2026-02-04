import React from 'react';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import WhyChooseUs from '../components/home/WhyChooseUs';
import WorkProcess from '../components/home/WorkProcess';
import Statistics from '../components/home/Statistics';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <Services />
      <WhyChooseUs />
      <WorkProcess />
      <Statistics />
    </div>
  );
};

export default Home;
