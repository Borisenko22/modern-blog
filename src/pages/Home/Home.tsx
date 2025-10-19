import React from 'react';
import Hero from '../../components/Hero';
import FeaturedPosts from '../../components/FeaturedPosts';
import Categories from '../../components/Categories';
import NewsLetter from '../../components/NewsLetter';
import NewsSidebar from '../../components/NewsSidebar';


const Home: React.FC = () => {
  return (
    <>
      <Hero />
      
      {/* Main Content with Sidebar */}
      <section className="main-content py-5">
        <div className="container">
          <div className="row">
            {/* Main Content - Featured Posts */}
            <div className="col-lg-8">
              <FeaturedPosts />
            </div>
            
            {/* Sidebar with News */}
            <div className="col-lg-4">
              <NewsSidebar/>
            </div>
          </div>
        </div>
      </section>
      
      <Categories />
      <NewsLetter />
    </>
  );
};

export default Home;