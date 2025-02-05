import { useState } from "react";
import { publicRequest } from "../requestMethods";

import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {isFetching, error} = useSelector((state) => state.user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await publicRequest.post("/auth/register", {
        username,
        email,
        password,
      });
      if (res.status === 201) {
        await login(dispatch, { username, password });
      }
    } catch (err) {
      if (
        err.response.data.error &&
        err.response.data.error == "User already exists"
      ) {
        alert("User already exists");
        navigate("/login");
      }
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900 p-4">
      <div className="flex max-w-5xl h-full w-full rounded-2xl shadow-lg overflow-hidden bg-gray-800">
        {/* Left Side - Image Section */}
        <div className="hidden md:block w-1/2 bg-cover bg-center bg-[url(https://as2.ftcdn.net/v2/jpg/02/32/16/07/1000_F_232160763_FuTBWDd981tvYEJFXpFZtolm8l4ct0Nz.jpg)] ">
          <div className="h-full flex items-end p-6 text-white bg-black/30">
            <p className="text-lg">Capturing Moments, Creating Memories</p>
          </div>
        </div>

        {/* Right Side - Form Section */}
        <form className="w-full md:w-1/2 p-8 text-white" onSubmit={handleSubmit}>
          <h2 className="text-2xl font-semibold">Create an account</h2>
          <p className="mt-2 text-gray-400">
            Already have an account?{" "}
            <a href="/login" className="text-purple-400">
              Log in
            </a>
          </p>

          <div className="mt-4">
            <input
              type="text"
              placeholder="Username"
              className="w-full p-2 bg-gray-700 rounded-md"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              className="mt-3 w-full p-2 bg-gray-700 rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="mt-3 w-full p-2 bg-gray-700 rounded-md"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="p-0.5">
                {showPassword ? (
                  <EyeOff
                    className="absolute right-2 top-5 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                ) : (
                  <Eye
                    className="absolute right-2 top-5 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                )}
              </div>
            </div>
          </div>

          <div className="mt-3 flex items-center">
            <input type="checkbox" id="terms" className="mr-2" />
            <label htmlFor="terms" className="text-gray-400 text-sm">
              I agree to the{" "}
              <a href="#" className="text-purple-400">
                Terms & Conditions
              </a>
            </label>
          </div>

          <button type="submit" disabled={isFetching} className="mt-4 w-full p-3 bg-purple-500 rounded-md hover:bg-purple-600">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
