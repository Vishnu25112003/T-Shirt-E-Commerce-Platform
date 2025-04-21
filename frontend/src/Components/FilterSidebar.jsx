import React from 'react';

const FilterSidebar = ({ maxPrice, setMaxPrice }) => {
  return (
    <div className="space-y-6 p-4 bg-white rounded-xl shadow h-fit">
      <h2 className="text-lg font-bold">Filters</h2>

      <div>
        <label className="block mb-1 font-medium">Price</label>
        <input
          type="range"
          min={0}
          max={60000}
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="w-full"
        />
        <p className="text-sm mt-1">₹{Number(maxPrice).toLocaleString()}</p>
      </div>

      <button
        onClick={() => setMaxPrice(60000)}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 w-full"
      >
        Clear Filters
      </button>
    </div>
  );
};

export default FilterSidebar;
