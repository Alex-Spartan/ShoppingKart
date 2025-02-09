import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../requestMethods";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Minus, Plus } from "lucide-react";

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [color, setColor] = useState("White");
  const [size, setSize] = useState("M");
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get(`/products/find/${id}`);
        setProduct(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type == "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else if (type == "inc") {
      setQuantity(quantity + 1);
    }
  };
  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity, color, size }));
  };

  return (
    Object.keys(product).length > 0 && (
      <>
        <Navbar />
        <div className="flex min-h-screen items-center justify-center bg-gray-800 p-4 pb-12">
          <div className="max-w-5xl w-full p-6 rounded-2xl text-white flex flex-col md:flex-row">
            {/* Left Side - Product Image */}
            <div className="md:w-1/2 flex justify-center">
              <img src={product.img} alt="Product" className="rounded-lg" />
            </div>

            {/* Right Side - Product Details */}
            <div className="md:w-1/2 p-6">
              <h2 className="text-3xl font-semibold">{product.title}</h2>
              <p className="text-gray-400 mt-2 line-through">₹6700.00</p>
              <p className="text-purple-400 text-2xl font-bold">
                ₹{product.price}
              </p>

              <p className="mt-4 text-gray-400">{product.desc}</p>

              <div className="mt-4">
                <p className="text-gray-300">Color</p>
                <div className="flex space-x-2 mt-2">
                  {product.color.map((c) => (
                    <button
                      key={c}
                      className={`w-9 h-9 rounded-full border-2 border-white cursor-pointer bg-${c.toLowerCase()}-500 ${
                        selectedColor === c ? "ring-2 ring-purple-600" : ``
                      }`}
                      onClick={() => setSelectedColor(c)}
                    ></button>
                  ))}
                </div>
              </div>

              <div className="mt-4">
                <p className="text-gray-300">Size</p>
                <div className="flex items-center space-x-2 mt-2">
                  {product.size.map((size) => (
                    <button
                      key={size}
                      className={`px-3 py-2 rounded-md ${
                        selectedSize === size
                          ? "bg-purple-600"
                          : "bg-gray-700 hover:bg-purple-500"
                      }`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2 mt-3">
                <Minus
                  className="w-6 h-6 cursor-pointer"
                  onClick={() => handleQuantity("dec")}
                />
                <div className="text-xl py-1 px-2 bg-slate-500/90 rounded">
                  {quantity}
                </div>
                <Plus
                  className="w-6 h-6 cursor-pointer"
                  onClick={() => handleQuantity("inc")}
                />
              </div>

              <button
                className="mt-6 w-full p-3 bg-purple-500 rounded-md hover:bg-purple-600"
                onClick={handleClick}
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </>
    )
  );
};

export default Product;
