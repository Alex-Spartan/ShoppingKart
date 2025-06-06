/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const CategoryItem = ({ item }) => {

    return (
        <div className="relative w-1/3 h-screen items-center justify-start p-4">
            <img className="w-full h-[600px] object-cover" src={item.imgurl} alt="image" />
            {/* <div className="absolute top-1/2 text-center"> */}
            <div className='mt-8 flex flex-col'>
                <h1 className="text-xl text-black">{item.title}</h1>
                <Link to={`/products`}>
                <button className="underline text-black rounded hover:bg-blue-600">SHOP NOW</button>
                </Link>
            </div>
        </div>
    )
}

export default CategoryItem;