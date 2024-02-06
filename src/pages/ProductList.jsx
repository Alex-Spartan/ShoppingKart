import React from 'react'

import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const ProductList = () => {
  return (
    <div className='bg-slate-200 '>
        <Navbar />
        <Announcement /> 
        <div>
          <h1 className='text-xl m-5'>Dresses</h1>
          <div className='flex justify-between text-md font-bold'>
            <span className='flex gap-'>
              Color
              <select name="" id="">
                <option value="1" disabled selected>Color</option>
                <option value="2">White</option>
                <option value="3">Black</option>
                <option value="4">Red</option>
                <option value="5">Blue</option>
                <option value="6">Yellow</option>
                <option value="7">Green</option>
              </select>
              Size 
              <select name="" id="">
                <option value="1" disabled selected>Size</option>
                <option value="2">XS</option>
                <option value="3">S</option>
                <option value="4">M</option>
                <option value="5">L</option>
                <option value="6">XL</option>
                <option value="7">XXL</option>
              </select>
            </span>
            <span className=''>
              
            </span>
          </div>
          <Products />
          <Newsletter />
          <Footer />
        </div>
    </div>
  )
}

export default ProductList