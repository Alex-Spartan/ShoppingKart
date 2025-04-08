/* eslint-disable react/prop-types */

import { addProduct } from "../redux/cartRedux";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useSelector, useDispatch } from "react-redux";

const ProductItem = ({ product }) => {
  const cart = useSelector((state) => state.cart);
  // console.log(cart.products);
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
  };
  return (
    <div key={product._id} className="bg-gray-800 p-4 rounded-lg shadow-md">
      <Link to={`/product/${product._id}`} className="relative block">
        <img
          src={product.img}
          alt={product.name}
          className="w-60 h-48 object-cover rounded"
        />
        <h3 className="mt-2 text-lg font-semibold">{product.name}</h3>
        <p className="text-purple-400 text-sm">${product.price}</p>
      </Link>
      <button
        className="mt-3 w-full bg-purple-500 p-2 rounded-md hover:bg-purple-600"
        onClick={handleClick}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductItem;
