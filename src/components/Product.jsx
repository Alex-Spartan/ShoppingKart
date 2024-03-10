/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const ProductItem = ({ product }) => {
    return (
        <div className="relative m-4 group group-hover:bg-white" >
            <img className="h-72 w-60 transition-opacity duration-200 ease-in-out m-auto group-hover:opacity-10" src={product.img} alt={product._id} />
            <div className="absolute top-0 left-0 right-0 bottom-0 transition-opacity duration-200 ease-in-out flex items-center justify-center space-x-2 opacity-0 group-hover:opacity-100">
                <Link to={`/product/${product._id}`}>
                    <SearchIcon className='bg-white rounded-xl ' />
                </Link>
                <ShoppingCartIcon className='bg-white rounded-xl' />
                <FavoriteBorderIcon className='bg-white rounded-xl' />
            </div>
        </div>
    );
};

export default ProductItem;
