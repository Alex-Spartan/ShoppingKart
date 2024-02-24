import React from 'react';
import ProductItem from './ProductItem';
import { products } from '../data';

const Products = ({cat, sort, filters}) => {
    return (
        <div className='flex flex-wrap justify-evenly m-4'>
            {products.map((product) => (
                <div className='w-1/4 p-4' key={product.id}>
                    <ProductItem product={product} />
                </div>
            ))}
        </div>
    );
};

export default Products;
