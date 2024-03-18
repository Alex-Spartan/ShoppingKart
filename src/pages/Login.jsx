import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/apiCalls';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();
	const {isFetching, error} = useSelector(state => state.user);
	const navigate = useNavigate();


	const handleClick = (e) => {
		e.preventDefault();
		login(dispatch, { username, password });
	}

	if(isFetching && !error){
		setTimeout(() => {
			navigate('/')
		}, 1000)
		return <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">Loading...</div>
		
	}


	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-lg w-full space-y-8 bg-violet-400 p-10 rounded-md">
				<div>
					<h2 className="mt-6 text-center text-4xl font-extrabold text-gray-900">
						Log In
					</h2>
				</div>
				<form className="mt-8 space-y-6">
					<div className="rounded-md shadow-sm space-y-4">
						<div className=''>
							<label htmlFor="username" className="mb-2">Username</label>
							<input id="username" name="username" type="text" autoComplete="username" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Username"
								onChange={(e) => setUsername(e.target.value)}
							/>
						</div>

						<div>
							<label htmlFor="password" className="mb-2">Password</label>
							<input id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password"
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
					</div>

					<div>
						<button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
							onClick={handleClick}
						>
							<span className="absolute left-0 inset-y-0 flex items-center pl-3">
								<svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
									<path fillRule="evenodd" d="M5 9a2 2 0 012-2h.91l-.34-.34a1 1 0 00-.34-.11l-.09-.03L7 6l2-2 2 2 .09.03a1 1 0 00.25.11l.34.34H13a2 2 0 012 2v1h1a2 2 0 012 2v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5a2 2 0 012-2h1V9zm7-1V7l-2-2-2 2v1h4z" clipRule="evenodd" />
								</svg>
							</span>
							Log In
						</button>
						<Link className='underline'>Forgot password?</Link>
						<Link className='p-6 underline'>Create new account</Link>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;