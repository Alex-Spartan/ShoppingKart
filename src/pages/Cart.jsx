import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { publicRequest } from "../requestMethods";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import { Add, Remove } from "@mui/icons-material";

const KEY = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;

const Cart = () => {
  const cart = useSelector((state) => state.cart)
  const [stripeToken, setStripeToken] = useState(null);
  let history = useNavigate();

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await publicRequest.post("checkout/payment", {
        tokenId: stripeToken.id,
        amount: cart.total * 100,
      });
      history.push("/success", {data: res.data})
      } catch (err) {
        console.log(err);
      }
    }
    if (stripeToken) {
      makeRequest();
    }
  }, [stripeToken, cart.total])

  return (
    <div>
      <Navbar />
      <Announcement />
      <div className="bg-gray-100 rounded shadow-md">
        <h2 className="text-2xl font-bold text-center py-8 border-b border-gray-200">
          Cart
        </h2>
        <ul className="py-8">
          {cart.products.map((cartItem) => (
            <li key={cartItem._id} className="flex border-gray-700 w-[80%]">
              <div className="flex-1 mx-5 p-5">
                <img
                  className="w-80"
                  src={cartItem.img}
                  alt={cartItem.title}
                />
              </div>
              <div className="ProductDetails flex-1 flex justify-between p-5">
                <div className="text-xl my-auto">
                  <p className="mb-6"><b>Product:</b> Hakura Shoes</p>
                  <p className="mb-6"><b>ID:</b>{cartItem._id.slice(0, 6)}</p>
                  <div className={`bg-${cartItem.color}-600 w-6 h-6 rounded-full mb-6`}></div>
                  <p><b>Size:</b>{cartItem.size}</p>
                </div>
                <div className="my-auto ">
                  <div className="flex">
                    <Add />
                    <p className="mb-5 text-2xl">{cartItem.quantity}</p>
                    <Remove />
                  </div>
                  <p className="text-3xl">${cartItem.price * cartItem.quantity}</p>
                </div>
              </div>
              <div className="flex-1"></div>
            </li>
          ))}
        </ul>
        <div className="flex justify-end items-center p-4 border-t border-gray-200">
          <span className="text-gray-600 mr-2">Total:</span>
          <span className="font-bold text-green-500">${cart.total}</span>

          <StripeCheckout
            name="ShoppingKart"
            image="https://avatars.githubusercontent.com/u/74079332?v=4"
            billingAddress
            shippingAddress
            description={`Your total is $${cart.total}`}
            amount={cart.total * 100}
            token={onToken}
            stripeKey={KEY}
          >

            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4">
              Checkout
            </button>
          </StripeCheckout>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
