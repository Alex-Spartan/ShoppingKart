import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'

const Cart = () => {
  return (
    <div>
        <Navbar />
        <Announcement />
        <div className='p-6'>
            <h1 className='font-bold'>Your Cart</h1>
            <div></div>
            <div></div>
        </div>
        <Footer />
    </div>
  )
}

export default Cart