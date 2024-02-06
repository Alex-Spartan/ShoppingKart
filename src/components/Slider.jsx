import { useState } from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    console.log(direction, slideIndex)
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };





  return (
  <div className='text-white flex relative h-screen overflow-hidden'>

      <div className='h-screen flex transition-all duration-1000 ease-in-out' style={{ transform: `translateX(${slideIndex* -100}vw)`}}>

        
        <div
          className='flex-1 flex h-80p w-screen bg-blue-200'
        >


          <div className='flex-1 h-screen w-screen'>
            <img
              src='https://cdn.shopify.com/s/files/1/1899/4221/files/The_Ultimate_Guide_to_Fashion_Photography_for_Your_E-Commerce_Lookbook_Part_1_9_-min.png?v=1684212563'
              alt='image1'
              className='h-80p bg-no-repeat' />
          </div>
          <div className='flex-1 p-14'>
            <h1 className='text-6xl mx-4 my-12'>Summer Sale</h1>
            <p className='text-2xl m-4 tracking-widest'>Get your right style now with Va as Compras</p>
            <button className='border-2 border-white p-2 m-4'>Shop Now</button>
          </div>

        </div>

        
        <div className='flex-1 flex h-80p w-screen bg-pink-200'>

          <div className='flex-1 h-screen'>
            <img
              src='https://images.squarespace-cdn.com/content/v1/6418ab1372991c5b4e9e5a14/1693514630024-GGEIJ7PG7QJ1FIS0735Y/MANTRA_-249.jpg?format=2500w'
              alt='image1'
              className='h-80p bg-no-repeat object-cover' />
          </div>
          <div className='flex-1 p-14'>
            <h1 className='text-6xl mx-4 my-12'>Summer Sale</h1>
            <p className='text-2xl m-4 tracking-widest'>Get your right style now with Va as Compras</p>
            <button className='border-2 border-white p-2 m-4'>Shop Now</button>
          </div>

        </div>

        
        <div className='flex-1 flex h-80p w-screen bg-orange-200'>

          <div className='flex-1 h-screen'>
            <img
              src='https://www.hdwallpapers.in/download/cute_smiling_of_girl_model_with_white_top_in_white_background_hd_girl-1920x1080.jpg'
              alt='image1'
              className='h-80p bg-no-repeat object-cover' />
          </div>
          <div className='flex-1 p-14'>
            <h1 className='text-6xl mx-4 my-12'>Summer Sale</h1>
            <p className='text-2xl m-4 tracking-widest'>Get your right style now with Va as Compras</p>
            <button className='border-2 border-white p-2 m-4'>Shop Now</button>
          </div>

        </div>


      </div>
      
      <div
        className='absolute flex justify-center items-center top-0 bottom-0 right-2.5 m-auto cursor-pointer'
        onClick={() => handleClick('right')}
      >
        <ChevronRightIcon
          className="w-14 h-14 rounded-full bg-white opacity-8 text-black"
          sx={{ fontSize: 40 }} />
      </div><div
        className='absolute flex justify-center items-center top-0 bottom-0 left-2.5 m-auto cursor-pointer'
        onClick={() => handleClick('left')}
      >
        <ChevronLeftIcon
          className="w-14 h-14 rounded-full bg-white opacity-8 text-black"
          sx={{ fontSize: 40 }} />
      </div>


    </div >
  );
};

export default Slider;