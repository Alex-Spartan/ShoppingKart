import { useState } from 'react';
import { publicRequest } from '../requestMethods';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const userRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await publicRequest.post("/auth/register", {
        username,
        email,
        password,
      })

      const user = await res.data;
    } catch (err) {
      if (err.response.data.error && err.response.data.error == 'User already exists') {
        navigate('/login')
      }
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full space-y-8 bg-violet-400 p-10 rounded-md">
        <div>
          <h2 className="mt-6 text-center text-4xl font-extrabold text-gray-900">
            Register
          </h2>
        </div>
        <form className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div className='mb-3'>
              <label htmlFor="name" className="mb-2">First Name</label>
              <input id="name" name="name" type="text" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Alan Drew" 
              onChange={e => setUsername(e.target.value)}
            />
            </div>
            <div className='!mb-3'>
              <label htmlFor="email-address" className="mb-2">Email address</label>
              <input id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" 
              onChange={e => setEmail(e.target.value)}
            />
            </div>
            <div className='!mb-3'>
              <label htmlFor="password" className="mb-2">Password</label>
              <input id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" 
              onChange={e => setPassword(e.target.value)}
            />
            </div>
          </div>

          <div>
            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={userRegister}>
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;