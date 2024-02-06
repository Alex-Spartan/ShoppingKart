import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { Add, Remove } from '@mui/icons-material'

const Product = () => {
    return (
        <div className="container">
            <Navbar />
            <Announcement />

            <div className="flex mb-20 justify-evenly">
                <div className="w-1/3">
                    <img src="https://imgs.search.brave.com/vXKiChsz6Jh8gegM9J9gqcgmaD7f87BnehN1lNzei6Y/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9k/ZW5pbXNfMTMwMy00/NDg4LmpwZz9zaXpl/PTYyNiZleHQ9anBn" alt="" className="" />
                </div>

                <div className="w-1/3 p-4">
                    <div className="mb-4">
                        <h1 className="text-2xl font-bold">Denim Jumpsuit</h1>
                        <p className="text-gray-600">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, voluptatum. Quisquam, quidem. Quisquam, quidem.
                        </p>
                        <span className="block text-xl font-bold">$20</span>
                    </div>

                    <div className="mb-4">
                        <div className="mb-2">
                            <label htmlFor='size' className="mr-2">Size:</label>
                            <select id="size" className="border p-2">
                                <option selected value="XS">XS</option>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                            </select>
                        </div>

                        <div className="mb-2 flex">
                            <label htmlFor="color" className="mr-2">Color:</label>
                            <span className='flex'>
                                <div className="w-6 h-6 bg-black rounded-full border border-gray-300 mr-2 hover:border-white"></div>
                                <div className="w-6 h-6 bg-blue-300 rounded-full border border-gray-300 mr-2 hover:border-black-500"></div>
                                <div className="w-6 h-6 bg-gray-300 rounded-full border border-gray-300 mr-2 hover:border-black-500"></div>
                            </span>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <Remove />
                        <span className="mx-1 px-2 border-2 border-blue-300 rounded">1</span>
                        <Add />
                        <button className="bg-gray-600 text-white px-4 py-2 rounded ml-2">Add to Cart</button>
                    </div>
                </div>
            </div>

            <Newsletter />
            <Footer />
        </div>

    )
}

export default Product;