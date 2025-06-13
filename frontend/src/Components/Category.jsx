import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Category = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fisher-Yates shuffle algorithm for randomization
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Fetch products on component mount (page load/refresh)
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:5000/api/products"); // Replace with your backend URL if different

        if (!response.ok) throw new Error("Failed to fetch products");

        const data = await response.json();

        if (!Array.isArray(data)) throw new Error("Invalid product data received");

        // Shuffle and pick 9 random products
        const selected = shuffleArray(data).slice(0, 9);
        setProducts(selected);
      } catch (err) {
        console.error("Error loading products:", err.message);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []); // Runs only once on page load

  return (
    <div className="min-h-screen px-12 bg-gradient-to-b from-gray-600 to-gray-900 text-white flex flex-col justify-between">
      {/* Filter Buttons */}
      <div className="flex justify-center gap-6 mb-16 pt-8">
        {[
          {
            title: "MARVEL",
            img: "https://res.cloudinary.com/dypbvh8u8/image/upload/v1746704736/marvel_gtmusq.jpg ",
          },
          {
            title: "DC",
            img: "https://res.cloudinary.com/dypbvh8u8/image/upload/v1746704704/dc_a35cy9.jpg ",
          },
          {
            title: "COMICS",
            img: "https://res.cloudinary.com/dypbvh8u8/image/upload/v1746704662/comics_sn553w.webp ",
          },
          {
            title: "ANIME",
            img: "https://res.cloudinary.com/dypbvh8u8/image/upload/v1746704574/anime_sue97h.jpg ",
          },
          {
            title: "GAMING",
            img: "https://res.cloudinary.com/dypbvh8u8/image/upload/v1746715203/design-an-amazing-gaming-and-simple-banner-for-you_f5ko3e.jpg ",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="relative w-64 h-96 overflow-hidden rounded-lg shadow-lg group"
          >
            {/* Image with blur and overlay on hover */}
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Blur Background Effect */}
            <div
              className="absolute inset-0 bg-cover bg-center filter blur-sm scale-105 opacity-30 group-hover:opacity-100 transition-all duration-500"
              style={{ backgroundImage: `url(${item.img})` }}
            ></div>

            {/* Text Centered on Hover */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h2 className="text-white text-3xl font-bold drop-shadow-lg">{item.title}</h2>
            </div>
          </div>
        ))}
      </div>

      {/* Trending Banner */}
      <div className="relative flex items-center justify-center h-48 w-full rounded-lg overflow-hidden bg-gray-900 shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-black to-gray-200 blur-lg opacity-20"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h2 className="text-5xl font-extrabold text-white tracking-wide">🔥 TRENDING NOW</h2>
          <p className="text-lg text-gray-400 mt-2">Stay ahead of the curve!</p>
        </div>
      </div>

      <br />
      <br />

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[500px]">
        {loading ? (
          <p className="text-white text-center col-span-full text-xl">Loading products...</p>
        ) : products.length > 0 ? (
          products.map((product, index) => (
            <Link
              to={`/product/${product._id}`}
              key={product._id || index}
              className="block"
            >
              <div className="w-full max-w-[300px] mx-auto bg-black/40 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
                <img
                  src={product.image.startsWith("http") ? product.image : `${product.image}`}
                  alt={product.name}
                  className="w-full h-[260px] object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-white mb-2">{product.name}</h3>
                  <p className="text-pink-400 text-md font-bold">${product.price.toFixed(2)}</p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-white text-center text-xl font-semibold col-span-full">No products found.</p>
        )}
      </div>

      {/* View All Button */}
      <div className="flex justify-center mt-12 mb-8">
        <Link to="/all-products">
          <button className="px-10 py-4 bg-gradient-to-r from-pink-900 to-pink-500 text-white font-bold text-lg rounded-full shadow-lg transition-all duration-300 hover:scale-105">
            View All Products
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Category;