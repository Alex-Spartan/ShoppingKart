/* eslint-disable react/jsx-key */
import { RouterProvider, createBrowserRouter, Route, createRoutesFromElements, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Home from './pages/Home'
import ProductList from './pages/ProductList'
import Product from './pages/Product'
import Register from './pages/Register'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Success from './pages/Success';

function App() {

  const user = useSelector(state => state.user.currentUser);
  

  const router = createBrowserRouter(
    createRoutesFromElements([
      <Route path="/" index element={<Home />} />,
      <Route path="/product/:id" element={<Product />} />,
      <Route path="/products/:category" element={<ProductList />} />,
      <Route path="/products/" element={<ProductList />} />,
      <Route path="/register" element={ user ? <Navigate to="/" /> : <Register/>} />,
      
      <Route path="/login" element={user ? <Navigate to="/" /> : <Login/>} />,
      <Route path="/cart" element={<Cart />} />,
      <Route path="/success" element={<Success />} />,
      //add contact form and make mobile responsive
    ])
  )
  return (
    <RouterProvider router={router} />
  )
}

export default App