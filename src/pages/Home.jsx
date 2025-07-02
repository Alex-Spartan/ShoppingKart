import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Slider from '../components/Slider';
import Categories from '../components/Categories';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Deals from '../components/Deals';
import Testimonials from '../components/Testimonials';
import toast from 'react-hot-toast';

const Home = () => {

  useEffect(() => {
    toast("The backend might be asleep. Please wait 1 min for it to come back up.", {
      duration: 5000,
      icon: "⚠️",
      style: {
        background: "#f8d7da",
        color: "#721c24",
      },
    })
  }, [])
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