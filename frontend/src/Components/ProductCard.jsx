import React from 'react';

const ProductCard = ({ product }) => {
  const { name, image, price, category } = product;

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow hover:scale-105 transition-all duration-300">
      <div className="relative">
        <img src={image} alt={name} className="w-full h-48 object-cover" />
        <span className="absolute top-2 right-2 bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">
          {category.toUpperCase()}
        </span>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-indigo-600 font-bold">₹{price.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default ProductCard;
