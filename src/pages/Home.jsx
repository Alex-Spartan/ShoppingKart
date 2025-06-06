import React from 'react';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Slider from '../components/Slider';
import Categories from '../components/Categories';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Deals from '../components/Deals';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <div className='bg-background-black'>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Deals />
      <Products limit={8} header />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;