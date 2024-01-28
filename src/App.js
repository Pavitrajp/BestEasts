import React from 'react';
import Navbar from './Component/Navbar';
import Hero from './Component/Hero';
import HeadlineCard from './Component/HeadlineCard';
import Foods from './Component/Foods';
import Category from './Component/Category';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <HeadlineCard />
      <Foods />
      <Category />
    </>
  );
};

export default App;