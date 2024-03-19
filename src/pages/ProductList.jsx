import React, { useState, useEffect } from 'react'

import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { useLocation } from 'react-router-dom'

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split('/')[2]
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState('Latest');
  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const handleFilter = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters, 
      [e.target.name]: value
    })
  }

  const handleSort = (e) => {
    setSort(e.target.value)
  }

  return (
    <div className='bg-slate-200 '>
        <Navbar />
        <Announcement /> 
        <div>
          <h1 className='text-xl m-5'>Dresses</h1>
          <div className='flex justify-between text-md font-bold'>
            <span className='flex gap-2 ml-4 text-lg'>
              Color:
              <select 
                name="Color" 
                id="Color" 
                defaultValue={1} 
                className='rounded p-1 mr-3'
                onChange={handleFilter}
              > 
                <option>Color</option>
                <option>White</option>
                <option>Black</option>
                <option>Red</option>
                <option>Blue</option>
                <option>Yellow</option>
                <option>Green</option>
              </select>
              Size:  
              <select 
                name="Size" 
                id="Size" 
                defaultValue={1} 
                className='rounded p-1'
                onChange={handleFilter}
              >
                <option>Size</option>
                <option>XS</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
            </span>
            <span className='mr-5 text-lg'>
              Sort: 
              <select
                name="Sort" 
                id="Sort" 
                defaultValue={1} 
                className='rounded p-1 ml-3'
                onChange={handleSort}
              >
                <option>Latest</option>
                <option>Low to High</option>
                <option>High to Low</option>
              </select>
            </span>
          </div>
          <Products category={cat} sort={sort} filter={filters}/> 
          <Newsletter />
          <Footer />
        </div>
    </div>
  )
}

export default ProductList