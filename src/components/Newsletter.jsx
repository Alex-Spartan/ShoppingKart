import React from 'react'

const Newsletter = () => {
  return (
    <div className="flex flex-col items-center h-80 justify-center bg-gray-800 text-white">
        <h1 className="mb-4 text-3xl font-bold">Newsletter</h1>
        <div className="mb-4">Get timely updates and deals from your favourite products.</div>
        <form className="flex">
            <input type="text" placeholder="Enter your email address" className="w-96 p-2 mr-2 bg-gray-700 text-white placeholder-gray-300 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"/>
            <input type="submit" value="Subscribe" className="p-2 bg-blue-500 rounded-md cursor-pointer hover:bg-blue-600"/>
        </form>
    </div>
  )
}

export default Newsletter;