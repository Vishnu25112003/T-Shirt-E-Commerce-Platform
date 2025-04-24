import React, { useState } from 'react';
import productsData from './productsData';
import ProductCard from './ProductCard';
import FilterSidebar from './FilterSidebar';


const AllProducts = () => {
  const [maxPrice, setMaxPrice] = useState(60000);

  const filteredProducts = productsData.filter((product) => product.price <= maxPrice);

  return (
    <div className="min-h-screen bg-gray-600 to-black p-6 md:p-10">
      <h1 className="text-3xl mt-10 ml-23 font-bold text-white mb-6">All Products</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Left Filters */}
        <div className="md:col-span-1">
          <FilterSidebar maxPrice={maxPrice} setMaxPrice={setMaxPrice} />
        </div>

        {/* Right Products */}
        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
