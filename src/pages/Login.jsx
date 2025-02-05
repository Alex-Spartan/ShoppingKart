import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/apiCalls";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(dispatch, { email, password });
		if (error) {
			alert("Invalid Credentials");
			return;
		}
    navigate("/");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900 p-4">
      <div className="flex max-w-4xl w-full rounded-2xl shadow-lg overflow-hidden bg-gray-800">
        {/* Left Side - Image Section */}
        <div className="hidden md:block w-1/2 bg-cover bg-center bg-[url(https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2021-05/revenge%20shopping.jpg)]">
          <div className="h-full flex items-end p-6 text-white bg-black/40">
            <p className="text-lg">Welcome Back, Log in to continue</p>
          </div>
        </div>

        {/* Right Side - Form Section */}
        <form
          className="w-full md:w-1/2 p-8 text-white"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-semibold">Log in to your account</h2>
          <p className="mt-2 text-gray-400">
            Don&apos;t have an account?{" "}
            <a href="/register" className="text-purple-400">
              Register
            </a>
          </p>

          <div className="mt-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 bg-gray-700 rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Enter your password"
              className="mt-3 w-full p-2 bg-gray-700 rounded-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mt-3 flex justify-between items-center">
            <a href="#" className="text-purple-400 text-sm">
              Forgot password?
            </a>
          </div>

          <button className="mt-4 w-full p-3 bg-purple-500 rounded-md hover:bg-purple-600">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
