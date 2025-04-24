import React from "react";
import { FaStar, FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";


// Generate 20 products by duplicating the original array with web image URLs
const generateProducts = () => {
  const baseProducts = [
    {
      id: 1,
      title: "Spider-Man Web Swing",
      category: "MARVEL",
      price: "$29.99",
      oldPrice: "$35.99",
      rating: 4.8,
      image: "https://veirdo.in/cdn/shop/files/Black-Spidey-Original-Marvel-Oversized-Tee-Veirdo-7773.jpg?v=1707127141", // Hosted image
    },
    {
      id: 2,
      title: "Batman Dark Knight",
      category: "DC",
      price: "$32.99",
      oldPrice: "$39.59",
      rating: 4.9,
      image: "https://veirdo.in/cdn/shop/files/Black-Spidey-Original-Marvel-Oversized-Tee-Veirdo-7773.jpg?v=1707127141",
      description: "Gotham’s protector silhouetted against the moon in this striking design",
    },
    {
      id: 3,
      title: "Classic Comics Collage",
      category: "COMIC",
      price: "$25.99",
      oldPrice: "$31.19",
      rating: 4.6,
      image: "https://veirdo.in/cdn/shop/files/Black-Spidey-Original-Marvel-Oversized-Tee-Veirdo-7773.jpg?v=1707127141",
    },
  ];
  return Array.from({ length: 9 }, (_, index) => ({
    ...baseProducts[index % baseProducts.length],
    id: index + 1
  }));
};

const products = generateProducts();

const Category = () => {
  return (
    <div className="min-h-screen px-12 bg-gradient-to-b from-gray-800 to-gray-900 text-white flex flex-col justify-between">
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-6 mb-16 pt-8">
        <button className="px-6 py-2 rounded-full bg-pink-500 text-white font-semibold hover:bg-pink-600 transition">Trending</button>
        <button className="px-6 py-2 rounded-full bg-gray-700 hover:bg-pink-600">⚡ MARVEL</button>
        <button className="px-6 py-2 rounded-full bg-gray-700 hover:bg-pink-600">💥 DC</button>
        <button className="px-6 py-2 rounded-full bg-gray-700 hover:bg-pink-600">📖 COMICS</button>
        <button className="px-6 py-2 rounded-full bg-gray-700 hover:bg-pink-600">🎌 ANIME</button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 place-items-center mx-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-black/40 rounded-xl overflow-hidden w-full max-w-[320px] h-[520px] flex flex-col shadow-lg transition-transform hover:scale-105 mx-4"
          >
            <div className="flex-shrink-0">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-[260px] object-cover rounded-t-xl"
              />
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <div className="flex-grow">
                {product.description && (
                  <p className="text-sm text-gray-300 mb-2 line-clamp-3">
                    {product.description}
                  </p>
                )}
                <h3 className="text-lg font-semibold text-white">{product.title}</h3>
                <div className="flex justify-between text-sm mt-1 text-gray-400">
                  <span>{product.category}</span>
                  <span className="flex items-center gap-1 text-yellow-400">
                    <FaStar />
                    {product.rating}
                  </span>
                </div>
              </div>
              <div className="mt-6">
                <div className="flex justify-between items-center">
                  <div className="text-pink-400 text-md font-bold">{product.price}</div>
                  <div className="text-gray-500 text-sm line-through">{product.oldPrice}</div>
                </div>
                <button className="w-full mt-4 py-2 bg-pink-500 hover:bg-pink-600 rounded-md text-white font-medium flex items-center justify-center gap-2">
                  <FaCartPlus />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* All Products Button */}
      <div className="flex justify-center mt-12">
      <Link to="/all-products">
  <button className="animate-hover px-10 py-4 bg-gradient-to-r from-pink-900 to-pink-500 text-white font-bold text-lg rounded-full shadow-lg transition-all duration-300 ease-in-out hover:scale-105">
    View All Products
  </button>
</Link>

</div>
    </div>
  );
};

export default Category;
