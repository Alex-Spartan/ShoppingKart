/* eslint-disable react/prop-types */

import { addProduct } from "../redux/cartRedux";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useSelector, useDispatch } from "react-redux";
import toast from "react-hot-toast";

const ProductItem = ({ product }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleClick = () => {
    const existingProduct = cart.products.find(
      (item) => item._id === product._id
    );
    if (existingProduct) {
      const updatedProduct = {
        ...existingProduct,
      };
      dispatch(addProduct(updatedProduct));
    } else {
      dispatch(
        addProduct({
          ...product,
          quantity: 1,
          size: product.size[0],
          color: product.color[0],
        })
      );
    }
    toast.success("Product added to cart");
  };

  return (
    <div
      key={product._id}
      className="bg-white dark:bg-gray-900 p-5 rounded-2xl shadow-md hover:shadow-xl transition-shadow w-full max-w-[320px] mx-auto"
    >
      <Link to={`/product/${product._id}`} className="block group">
        <div className="relative overflow-hidden rounded-xl">
          <img
            src={product.img}
            alt={product.title}
            className="w-full h-[320px] object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white group-hover:underline line-clamp-2">
          {product.title}
        </h3>
        <p className="text-purple-600 dark:text-purple-400 font-medium mt-1 text-md">
          ${product.price.toLocaleString()}
        </p>
      </Link>
      <button
        className="mt-5 w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-lg transition"
        onClick={handleClick}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductItem;
