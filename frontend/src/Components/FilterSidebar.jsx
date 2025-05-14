import React from 'react';

const categories = ["MARVEL", "DC", "ANIME", "COMIC", "FANTACY", "GAMING",];

const FilterSidebar = ({ maxPrice, setMaxPrice, selectedSize, setSelectedSize, selectedCategories, setSelectedCategories }) => {
  
  // Handle category selection
  const handleCategoryChange = (category) => {
    setSelectedCategories(prev => 
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );
  };

  return (
    <div className="space-y-6 p-4 bg-gray-900 text-white rounded-xl shadow h-fit">
      <h2 className="text-lg font-bold">Filters</h2>

      {/* Price Filter */}
      <div>
        <label className="block mb-1 font-medium">Price</label>
        <input
          type="range"
          min={0}
          max={10000}
          value={maxPrice}  
          onChange={(e) => setMaxPrice(e.target.value)}
          className="w-full appearance-none bg-white cursor-pointer"
          style={{ borderRadius: "4px" }}
        />
        <p className="text-sl mt-1">₹{Number(maxPrice).toLocaleString()}</p>
      </div> 

      {/* Size Filter */}
      <div>
        <label className="block mb-1 font-medium">Size</label>
        <select
          onChange={(e) => setSelectedSize(e.target.value)}
          className="w-full p-2 border rounded text-black bg-white cursor-pointer hover:bg-gray-100 transition"
        >
          <option value="">All Sizes</option>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        </select>
      </div>

      {/* Category Filter */}
      <div>
        <label className="block mb-1 font-medium">Category</label>
        {categories.map((category) => (
          <div key={category} className="flex items-center">
            <input
              type="checkbox"
              checked={selectedCategories.includes(category)}
              onChange={() => handleCategoryChange(category)}
              className="mr-2 cursor-pointer"
            />
            <span>{category}</span>
          </div>
        ))}
      </div>

      {/* Clear Filters Button */}
      <button
        onClick={() => {
          setMaxPrice(10000);
          setSelectedSize("");
          setSelectedCategories([]);
        }}
        className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-red-600 w-full transition"
      >
        Clear Filters
      </button>
    </div>
  );
};

export default FilterSidebar;