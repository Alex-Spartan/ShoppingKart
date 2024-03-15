/* eslint-disable react/jsx-key */
import { useState } from 'react'
import { RouterProvider, createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom';


import Home from './pages/Home'
import ProductList from './pages/ProductList'
import Product from './pages/Product'
import Register from './pages/Register'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Success from './pages/Success';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements([
      <Route path="/" index element={<Home />} />,
      <Route path="/product/:id" element={<Product />} />,
      <Route path="/products/:category" element={<ProductList />} />,
      <Route path="/products/" element={<ProductList />} />,
      <Route path="/register" element={<Register />} />,
      <Route path="/login" element={<Login />} />,
      <Route path="/cart" element={<Cart />} />,
      <Route path="/cart" element={<Success />} />,
    ])
  )
  return (
    <RouterProvider router={router} />
  )
}

export default App
