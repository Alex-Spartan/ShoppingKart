import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { publicRequest } from "../requestMethods";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import { Add, Remove } from "@mui/icons-material";
import { decrementQuantity, incrementQuantity } from "../redux/cartRedux";

const KEY = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const user = useSelector(state => state.user.currentUser);
  const dispatch = useDispatch();
  const [stripeToken, setStripeToken] = useState(null);
  let router = useNavigate();

  const onToken = (token) => {
    setStripeToken(token);
  };

  const stripeDisable = cart.products.length === 0;
  const stripeDisabledClass = stripeDisable ? "opacity-50 cursor-not-allowed" : "";

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await publicRequest.post("checkout/payment", {
          tokenId: stripeToken.id,
          amount: cart.total * 100,
        });
        router.push("/success", { data: res.data });
      } catch (err) {
        console.log(err);
      }
    };
    if (stripeToken) {
      makeRequest();
    }
  }, [stripeToken, cart.total]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Announcement />
      <div className=" bg-gray-900 p-4 md:p-6 text-white">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Shopping Cart
        </h2>
        <div className="min-h-[40vh]">
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg overflow-x-auto">
            {cart.products.length > 0 ? (
              <table className="w-full text-left text-sm md:text-base">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="p-2">Image</th>
                    <th className="p-2">Product</th>
                    <th className="p-2">Size</th>
                    <th className="p-2">Color</th>
                    <th className="p-2">Quantity</th>
                    <th className="p-2">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.products.map((item) => (
                    <tr key={item._id} className="border-b border-gray-700">
                      <td className="p-2">
                        <img
                          src={item.img}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded"
                        />
                      </td>
                      <td className="p-2 max-w-[120px] truncate">
                        {item.title}
                      </td>
                      <td className="p-2">{item.size}</td>
                      <td className="p-2">
                        <span
                          className="w-5 h-5 inline-block rounded-full border border-white"
                          style={{ backgroundColor: item.color }}
                        ></span>
                      </td>
                      <td className="p-2">
                        <div className="flex items-center">
                          <button
                            onClick={() =>
                              dispatch(decrementQuantity(item._id))
                            }
                            className="bg-gray-600 p-1 rounded-md hover:bg-gray-500"
                          >
                            <Remove fontSize="small" />
                          </button>
                          <span className="px-2 md:px-3">{item.quantity}</span>
                          <button
                            onClick={() =>
                              dispatch(incrementQuantity(item._id))
                            }
                            className="bg-gray-600 p-1 rounded-md hover:bg-gray-500"
                          >
                            <Add fontSize="small" />
                          </button>
                        </div>
                      </td>
                      <td className="p-2">${item.price * item.quantity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-gray-400">Your cart is empty.</p>
            )}
          </div>
        </div>

        <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <h3 className="text-xl md:text-2xl">
            Total: ${cart.total.toFixed(2)}
          </h3>
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
            <button className={`bg-purple-500 px-6 py-3 rounded-md hover:bg-purple-600 w-full md:w-auto ${stripeDisabledClass}`} disabled={stripeDisable || user === null}>
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
