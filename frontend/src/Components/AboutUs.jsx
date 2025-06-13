import React, { useState } from "react";
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

const AboutUs = () => {
  const [isImageVisible, setIsImageVisible] = useState(false);

  const handleImageClick = () => {
    setIsImageVisible(!isImageVisible); // Toggle the visibility of the image
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-600 px-6 py-12 flex flex-col items-center mt-16">
      
      {/* Main Box */}
      <div className="flex flex-col md:flex-row items-center bg-white/10 rounded-2xl shadow-lg overflow-hidden max-w-6xl w-full">
        
        {/* Image Section */}
        <div className="w-full md:w-1/2 relative">
          <img
            src="https://res.cloudinary.com/dypbvh8u8/image/upload/v1744994904/aboutlogo_umooz1.png"
            alt="About TeeGalaxy"
            className={`w-full max-h-[400px] md:max-h-[500px] object-contain transition-all duration-500 ${isImageVisible ? 'scale-100' : 'scale-90'}`}
            onClick={handleImageClick}
          />
          {isImageVisible && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center text-white text-xl">
              <span>Image Pop-up</span>
            </div>
          )}
        </div>

        {/* Description Box */}
        <div className="w-full md:w-1/2 p-8 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-300 mb-4">
            About <span className="text-pink-500">TeeGalaxy</span>
          </h2>
          <p className="text-gray-200 mb-4">
            Welcome to TeeGalaxy 👕 — your ultimate destination for premium t-shirts inspired by Anime, Marvel, DC, and classic Comics!
            <br />
            We blend fandom with fashion, offering you styles that speak your universe. Whether you’re a Marvel fan, an anime enthusiast, or a comic book lover, TeeGalaxy has something for everyone.
            <br /><br />
            At TeeGalaxy, we believe in providing high-quality, comfortable tees that express your passion. Our curated collection includes designs that celebrate your favorite characters, superheroes, and stories, all in one place!
            <br /><br />
            Join our community of fans and make your wardrobe as unique as you are!
          </p>
        </div>
      </div>

      {/* Bottom Section with Social Icons */}
      <div className="mt-12 text-center">
        <h3 className="text-xl font-semibold text-gray-200 mb-2">Connect with Us</h3>
        <div className="flex justify-center space-x-6 text-2xl text-pink-500">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
