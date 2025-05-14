import React from "react";
import { Link } from "react-router-dom";
import { HiFire, HiOutlineSparkles } from "react-icons/hi2"; // HeroIcons

import { MdMovie, MdSportsEsports, MdDraw } from "react-icons/md"; // Material Design

import { BsMagic } from "react-icons/bs"; // Bootstrap

import { GiFairyWand, GiMaskedSpider } from "react-icons/gi"; // Game Icons

// Generate 20 products by duplicating the original array with web image URLs
const generateProducts = () => {
  const baseProducts = [
    {
      id: 1,
      title: "Spider-Man Web Swing",
      category: "MARVEL",
      price: "₹2999",
      oldPrice: "$35.99",
      rating: 4.8,
      image: new URL("../assets/anime/1.jpg", import.meta.url).href,
    },
    {
      id: 2,
      title: "Batman Dark Knight",
      category: "DC",
      price: "₹999",
      oldPrice: "$39.59",
      rating: 4.9,
      image: new URL("../assets/gaming/4.webp", import.meta.url).href,
    },
    {
      id: 3,
      title: "Classic Comics Collage",
      category: "COMIC",
      price: "₹999",
      oldPrice: "$31.19",
      rating: 4.6,
      image:
        "https://veirdo.in/cdn/shop/files/Black-Spidey-Original-Marvel-Oversized-Tee-Veirdo-7773.jpg?v=1707127141",
    },
    {
      id: 4,
      title: "Classic Comics Collage",
      category: "COMIC",
      price: "₹1599",
      oldPrice: "$31.19",
      rating: 4.6,
      image: new URL("../assets/dc/5.jpg", import.meta.url).href,
    },
    {
      id: 5,
      title: "Classic Comics Collage",
      category: "COMIC",
      price: "₹1999",
      oldPrice: "$31.19",
      rating: 4.6,
      image: new URL("../assets/anime/6.webp", import.meta.url).href,
    },
    {
      id: 6,
      title: "Classic Comics Collage",
      category: "COMIC",
      price: "₹899",
      oldPrice: "$31.19",
      rating: 4.6,
      image: new URL("../assets/anime/10.avif", import.meta.url).href,
    },
    {
      id: 7,
      title: "Classic Comics Collage",
      category: "COMIC",
      price: "₹4999",
      oldPrice: "$31.19",
      rating: 4.6,
      image: new URL("../assets/anime/11.jpg", import.meta.url).href,
    },
    {
      id: 8,
      title: "Classic Comics Collage",
      category: "COMIC",
      price: "₹7999",
      oldPrice: "$31.19",
      rating: 4.6,
      image: new URL("../assets/gaming/3.webp", import.meta.url).href,
    },
    {
      id: 9,
      title: "Classic Comics Collage",
      category: "COMIC",
      price: "₹3999",
      oldPrice: "$31.19",
      rating: 4.6,
      image: new URL("../assets/dc/7.webp", import.meta.url).href,
    },
  ];
  return Array.from({ length: 9 }, (_, index) => ({
    ...baseProducts[index % baseProducts.length],
    id: index + 1,
  }));
};

const products = generateProducts();

const Category = () => {
  return (
    <div className="min-h-screen px-12 bg-gradient-to-b from-gray-600 to-gray-900 text-white flex flex-col justify-between">
      {/* Filter Buttons */}
      <div className="flex justify-center gap-6 mb-16 pt-8">
  {[
    { title: "MARVEL", img: "https://res.cloudinary.com/dypbvh8u8/image/upload/v1746704736/marvel_gtmusq.jpg" },
    { title: "DC", img: "https://res.cloudinary.com/dypbvh8u8/image/upload/v1746704704/dc_a35cy9.jpg" },
    { title: "COMICS", img: "https://res.cloudinary.com/dypbvh8u8/image/upload/v1746704662/comics_sn553w.webp" },
    { title: "ANIME", img: "https://res.cloudinary.com/dypbvh8u8/image/upload/v1746704574/anime_sue97h.jpg" },
    { title: "GAMING", img: "https://res.cloudinary.com/dypbvh8u8/image/upload/v1746715203/design-an-amazing-gaming-and-simple-banner-for-you_f5ko3e.jpg" },

  ].map((item, index) => (
    <div key={index} className="relative w-64 h-96 overflow-hidden rounded-lg shadow-lg group">
      {/* Image with Zoom Effect */}
      <img
        src={item.img}
        alt={item.title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
      {/* Text Overlay */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <h2 className="text-white text-3xl font-bold">{item.title}</h2>
      </div>
    </div>
  ))}
</div>
<div className="relative flex items-center justify-center h-48 w-full rounded-lg overflow-hidden bg-gray-900 shadow-lg">
  {/* Neon Border Effect */}
  <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-black to-gray-200 blur-lg opacity-20"></div>

  {/* Futuristic Overlay */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
    <h2 className="text-5xl font-extrabold text-white tracking-wide">
      🔥 TRENDING NOW
    </h2>
    <p className="text-lg text-gray-400 mt-2">Stay ahead of the curve!</p>
  </div>
</div>
<br />
<br />

      {/* Updated Product Grid (Only Image, Name & Price) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[500px]">
        {products.length > 0 ? (
          products.map((product) => (
            <div
              key={product.id}
              className="w-full max-w-[300px] mx-auto bg-black/40 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-[260px] object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white mb-2">
                  {product.title}
                </h3>
                <p className="text-pink-400 text-md font-bold">
                  {product.price}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-white text-center text-xl font-semibold">
            No products found.
          </p>
        )}
      </div>

      {/* All Products Button */}
      <div className="flex justify-center mt-12 mb-8">
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
