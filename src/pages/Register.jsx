import { useState } from "react";
import { publicRequest } from "../requestMethods";

import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import GoogleIcon from "@mui/icons-material/Google";
import { login, register } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import {
  createUserWithEmailAndPassword,
  deleteUser,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth, provider } from "../utils/firebase";
import toast from "react-hot-toast";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser, isFetching, error } = useSelector((state) => state.user);

  
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);

      // Send user to backend
      const res = await login(dispatch, result.user);
      if (res.auth) {
        localStorage.setItem("token", res.token);
        toast.success("Registered successfully!");
        navigate("/");
      } else {
        alert(res.message);
      }
    } catch (error) {
      toast.error("Google login failed. Please try again.");
      console.error("Google login error", error);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCred = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCred.user;
      await updateProfile(user, { displayName: username });
      const res = await register(dispatch, { ...user, username });

      if (res.auth) {
        localStorage.setItem("token", res.token);
        toast.success("Registered successfully!");
        navigate("/");
      } else {
        toast.error(res.message);
        console.log(res.message);
      }
    } catch (err) {
      toast.error("Registration failed. Please try again.");
      console.log(err);
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
        <form
          className="w-full md:w-1/2 p-8 text-white"
          onSubmit={handleRegister}
        >
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

          <button
            type="submit"
            disabled={isFetching}
            className="mt-4 w-full p-3 bg-purple-500 rounded-md hover:bg-purple-600"
          >
            Create Account
          </button>
          <div className="text-center mt-3 text-xl">OR</div>
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="mt-4 w-full p-3 bg-blue-500 rounded-md hover:bg-blue-600 flex items-center justify-center"
          >
            <GoogleIcon className="mr-2" />
            Log in with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
