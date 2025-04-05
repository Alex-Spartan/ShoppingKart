import { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({filter: "all"});
  const [sort, setSort] = useState("latest");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleFilter = (e) => {
    setFilters({
      filter: e.target.value,
    });
  };
  
  const handleSort = (e) => {
    setSort(e.target.value);
  };

  return (
    <div className="bg-slate-200 ">
      <Navbar />
      <Announcement />
      <div className="min-h-screen bg-gray-900 text-white p-6">
        <div className="flex flex-col md:flex-row justify-between md:justify-around text-md font-bold">
          <h1 className="text-3xl font-semibold text-center mb-6">
            Our Products
          </h1>
          <div className="flex flex-col md:flex-row md:gap-8">
            <div className="flex justify-between mb-4 items-center gap-1">
              <div>Category:</div>
              <select
                name="category"
                id="category"
                defaultValue="all"
                onChange={handleFilter}
                className="bg-gray-700 p-2 rounded-md"
              >
                <option value="all">All Categories</option>
                <option value="shirts">Shirts</option>
                <option value="pants">Pants</option>
                <option value="hoodies">Hoodies</option>
              </select>
            </div>
            <div className="flex justify-between mb-4 items-center gap-1">
              <div>Sort By:</div>
              <select
                name="Sort"
                id="Sort"
                defaultValue={sort}
                className="bg-gray-700 p-2 rounded-md"
                onChange={handleSort}
              >
                <option>Latest</option>
                <option>Low to High</option>
                <option>High to Low</option>
              </select>
            </div>
          </div>
        </div>
        <Products category={cat} sort={sort} filter={filters} />
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductList;
