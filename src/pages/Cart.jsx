import React from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import { Add, Remove } from "@mui/icons-material";

const Cart = () => {
  return (
    <div>
      <Navbar />
      <Announcement />
      <div className="bg-gray-100 rounded shadow-md">
        <h2 className="text-lg font-medium p-4 border-b border-gray-200">
          Cart
        </h2>
        <ul>
          <li className="flex border-gray-700 w-80p">
            <div className="flex-1 mx-5 p-5">
              <img
                className="w-80"
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D"
                alt=""
              />
            </div>
            <div className="ProductDetails flex-1 flex justify-between p-5">
              <div className="text-xl my-auto">
                <p className="mb-6"><b>Product:</b> Hakura Shoes</p>
                <p className="mb-6"><b>ID:</b> 990xxxxxxx</p>
                <div className="bg-red-600 w-6 h-6 rounded-full mb-6"></div>
                <p><b>Size:</b> 8</p>
              </div>
              <div className="my-auto ">
                <div className="flex">
                  <Add />
                  <p className="mb-5 text-2xl">2</p>
                  <Remove />
                </div>
                <p className="text-3xl">$30</p>
              </div>
            </div>
            <div className="flex-1"></div>
          </li>
        </ul>
        <div className="flex justify-end items-center p-4 border-t border-gray-200">
          <span className="text-gray-600 mr-2">Total:</span>
          <span className="font-bold text-green-500">₹0.00</span>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4">
            Checkout
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
