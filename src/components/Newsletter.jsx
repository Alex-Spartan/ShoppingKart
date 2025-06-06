import React from 'react'

const Newsletter = () => {
  return (
    <section className="bg-gray-900 text-white py-10 px-6 text-center">
  <div className="max-w-xl mx-auto">
    <div className="mb-6">
      <h2 className="text-3xl font-bold mb-2">Join Our Newsletter</h2>
      <p className="text-gray-300">Get updates on new arrivals and exclusive deals.</p>
    </div>
    <form className="flex flex-col sm:flex-row items-center gap-3 justify-center">
      <input
        type="email"
        placeholder="Enter your email address"
        className="w-full sm:w-2/3 px-4 py-3 rounded-md text-gray-900 focus:outline-none"
      />
      <button
        type="submit"
        className="bg-purple-600 hover:bg-purple-700 transition px-6 py-3 rounded-md font-semibold"
      >
        Subscribe
      </button>
    </form>
  </div>
</section>

  )
}

export default Newsletter;