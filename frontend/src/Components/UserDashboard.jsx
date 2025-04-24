import React, { useState, useEffect } from 'react';
import { FaFire, FaStar, FaUsers, FaTruck } from 'react-icons/fa';
import { GiSpiderMask } from "react-icons/gi";
import { GiBatMask } from "react-icons/gi";

const images = [
  'https://res.cloudinary.com/dypbvh8u8/image/upload/v1744793845/venom_banner_1440x550_492dcbdb-bf5b-48a3-a12c-8acb803da9b8_bc3vct.webp',
  'https://res.cloudinary.com/dypbvh8u8/image/upload/v1744793844/Inside-Banner-Msite-Black-Panther-1668149531_gb7hbv.webp',
  'https://res.cloudinary.com/dypbvh8u8/image/upload/v1744793844/msite-marvel_floating_tee-1743501436_fmulmi.webp',
];

const UserDashboard = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    
    <div className="bg-gradient-to-b from-black to-gray-800 text-white min-h-screen px-8 pt-24 pb-10 text-center">
      <h1 className="text-5xl font-extrabold text-pink-500 mb-4 animate-fade-slide-in flex items-center justify-center gap-3">
  <GiSpiderMask className="text-6xl text-pink-500" />
  Fandom Fashion
  <GiBatMask className="text-6xl text-pink-500" />
</h1>
      <p className="text-lg text-gray-300 mb-10 animate-fade-slide-in delay-200">
        Discover our collection of premium T-shirts featuring your favorite characters from Marvel, DC, Comics, and Anime universes.
      </p>
          {/* Image Slider */}
          <div className="mb-10">
        <img
          src={images[currentImage]}
          alt="Fandom Banner"
          className="rounded-xl w-full max-w-8.9xl mx-auto object-cover shadow-lg transition-all duration-900 ease-in-out h-[400px]"
        />
      </div>
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
      <button className="backdrop-blur-lg bg-white/10 text-white py-4 px-8 rounded-lg text-xl mt-8 border border-white/20 shadow-lg hover:bg-white/10 transition">
  Shop Now
</button>

    </div>
  );
};

export default UserDashboard;
