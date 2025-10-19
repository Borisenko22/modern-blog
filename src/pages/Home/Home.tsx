import React from 'react';
import Hero from '../../components/Hero';
import FeaturedPosts from '../../components/FeaturedPosts';
import Categories from '../../components/Categories';
import NewsLetter from '../../components/NewsLetter';


const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <FeaturedPosts/>
      <Categories/>
      <NewsLetter/>
    </>
  );
};

export default Home;