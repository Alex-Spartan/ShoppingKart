/* eslint-disable react/prop-types */
import React from 'react';

const CategoryItem = ({ item }) => {

    return (
        <div className="relative w-1/3 h-screen flex flex-col items-center justify-center p-4">
            <img className="w-full h-2/3 object-cover" src={item.imgurl} alt="image" />
            <div className="absolute top-1/2 text-center">
                <h1 className="text-2xl mb-2 text-white">{item.title}</h1>
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">SHOP NOW</button>
            </div>
        </div>
    )
}

export default CategoryItem;