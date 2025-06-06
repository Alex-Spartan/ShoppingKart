import React from "react";

const Deals = () => {
  return (
    <div className="mb-12 bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6 sm:p-10 text-center shadow-md">
      <h2 className="text-3xl font-bold mb-2">🔥 Limited Time Offer</h2>
      <p className="text-lg">
        Get up to <span className="font-semibold">50% off</span> on select
        styles. Hurry before it ends!
      </p>
      <button className="mt-4 bg-white text-purple-700 font-semibold py-2 px-6 rounded-md hover:bg-purple-100 transition">
        Shop Deals
      </button>
    </div>
  );
};

export default Deals;
