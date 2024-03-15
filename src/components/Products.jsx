import { useEffect, useState } from 'react';
import ProductItem from './Product';
import { products } from '../data';
import axios from 'axios';

// eslint-disable-next-line react/prop-types
const Products = ({ category, sort, filter }) => {
    console.log(category, sort, filter)
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);



    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(category ? `http://localhost:4000/api/products?category=${category}` : "http://localhost:4000/api/products/")
                console.log(res.data)
                setProducts(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        getProducts();
    }, [category])

    useEffect(() => {
        if (filteredProducts.length === 0) {
            setFilteredProducts(products);
        }
        category && setFilteredProducts(
            products.filter(item =>
                Object.entries(filter).every(([key, value]) =>
                    item[key].includes(value)
                )
            )
        );
    }, [category, filter, products]);

    useEffect(() => {
        if (sort === 'newest') {
            setFilteredProducts(prev => [...prev].sort((a, b) => a.createdAt - b.createdAt))
        } else if (sort === 'Low to High') {
            setFilteredProducts(prev => [...prev].sort((a, b) => a.price - b.price))
        } else {
            setFilteredProducts(prev => [...prev].sort((a, b) => b.price - a.price))
        }
    }, [sort])


    return (
        <div className='Products flex flex-wrap justify-evenly m-4'>
            {category
                ? filteredProducts.map((product) => (
                    <div className='w-1/4 p-4' key={product._id}>
                        <ProductItem product={product} />
                    </div>
                ))
                : products
                    .map((product) => (
                        <div className='w-1/4 p-4' key={product._id}>
                            <ProductItem product={product} />
                        </div>
                    ))
            }

        </div>
    );
};

export default Products;
