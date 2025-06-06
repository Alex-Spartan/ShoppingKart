/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";
import ProductItem from "./ProductItem";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Link } from "react-router-dom";

const Products = ({ category, sort, filter, limit, header }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = category
          ? await publicRequest(`/products?category=${category}`)
          : await publicRequest(`/products`);
        setProducts(res.data);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };
    getProducts();
  }, [category]);

  useEffect(() => {
    if (filter?.filter && filter.filter !== "all") {
      setFilteredProducts(
        products.filter((item) => item.categories.includes(filter.filter))
      );
    } else {
      setFilteredProducts(products);
    }
  }, [filter, products]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      );
    } else if (sort === "Low to High") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else if (sort === "High to Low") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <>
      {header && (
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-6 text-center">
            Explore Our Latest Collection
          </h2>
          <h2 className="text-lg md:text-sm underline font-semibold text-white mb-4 text-right mr-8">
            <Link to="/products">See more</Link>
            <ChevronRightIcon className="inline-block -ml-1" />
          </h2>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 align-items-center justify-items-center p-4 mb-6">
        {filteredProducts.length > 0 && limit
          ? filteredProducts
              .slice(0, limit)
              .map((product) => (
                <ProductItem key={product._id} product={product} />
              ))
          : filteredProducts.map((product) => (
              <ProductItem key={product._id} product={product} />
            ))}
      </div>
      {filteredProducts.length === 0 && (
        <div className="text-center font-bold text-xl">No products</div>
      )}
    </>
  );
};

export default Products;
