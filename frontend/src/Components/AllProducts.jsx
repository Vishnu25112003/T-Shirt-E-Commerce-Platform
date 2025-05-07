import React, { useState } from 'react';
import productsData from './productsData';
import ProductCard from './ProductCard';
import FilterSidebar from './FilterSidebar';

const AllProducts = () => {
  const [maxPrice, setMaxPrice] = useState(60000);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);

  // Filter products based on price, size, AND selected categories
  const filteredProducts = productsData.filter((product) =>
    product.price <= maxPrice &&
    (selectedSize === "" || product.size.includes(selectedSize)) &&
    (selectedCategories.length === 0 || selectedCategories.includes(product.category))
  );

  return (
    <div className="min-h-screen bg-gray-700 to-black p-6 md:p-10">
      <h1 className="text-3xl mt-10 ml-23 font-bold text-white mb-6">All Products</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Left Filters */}
        <div className="md:col-span-1">
          <FilterSidebar
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
          />
        </div>

        {/* Right Products */}
        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[500px]">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="w-full max-w-[300px] mx-auto">
                <ProductCard product={product} />
              </div>
            ))
          ) : (
            <p className="text-white text-center text-xl font-semibold">No products found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;