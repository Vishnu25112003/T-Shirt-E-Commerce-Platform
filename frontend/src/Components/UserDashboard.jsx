import React from 'react';
import { FaFire, FaStar, FaUsers, FaTruck } from 'react-icons/fa';

const UserDashboard = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white min-h-screen px-8 pt-24 pb-10 text-center">
      <h1 className="text-5xl font-extrabold text-pink-500 mb-4 animate-fade-slide-in">Fandom Fashion</h1>
      <p className="text-lg text-gray-300 mb-10 animate-fade-slide-in delay-200">
        Discover our collection of premium T-shirts featuring your favorite characters from Marvel, DC, Comics, and Anime universes.
      </p>

      {/* Information Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
        <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition hover:scale-105 hover:shadow-lg">
          <FaFire className="text-pink-500 text-3xl mb-2 mx-auto" />
          <h2 className="text-lg font-bold text-white">Trending Designs</h2>
          <p className="text-sm text-gray-400">Updated weekly</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition hover:scale-105 hover:shadow-lg">
          <FaStar className="text-pink-500 text-3xl mb-2 mx-auto" />
          <h2 className="text-lg font-bold text-white">Premium Quality</h2>
          <p className="text-sm text-gray-400">100% cotton</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition hover:scale-105 hover:shadow-lg">
          <FaUsers className="text-pink-500 text-3xl mb-2 mx-auto" />
          <h2 className="text-lg font-bold text-white">Fan Favorite</h2>
          <p className="text-sm text-gray-400">5000+ reviews</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition hover:scale-105 hover:shadow-lg">
          <FaTruck className="text-pink-500 text-3xl mb-2 mx-auto" />
          <h2 className="text-lg font-bold text-white">Fast Shipping</h2>
          <p className="text-sm text-gray-400">2-3 day delivery</p>
        </div>
      </div>

      {/* Shop Now Button */}
      <button className="bg-pink-500 text-white py-2 px-6 rounded-full text-lg mt-8 hover:bg-pink-600 transition">
        Shop Now
      </button>
    </div>
  );
};

export default UserDashboard;
