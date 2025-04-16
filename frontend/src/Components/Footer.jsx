import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-16 ">
      <div className="max-w-7xl mx-auto px-8 lg:px-12 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16 border-b border-gray-700 pb-16">
          
          {/* Brand Info */}
          <div className="space-y-6 pr-4">
            <h3 className="text-pink-500 text-2xl font-extrabold tracking-wider">TeeGalaxy</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your ultimate destination for premium pop culture apparel. Quality meets fandom in every stitch.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-300 mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['About Us', 'Collections', 'Blog', 'FAQs'].map((item) => (
                <li key={item}>
                  <a href="#" className="block text-gray-400 hover:text-pink-400 transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-300 mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-400 text-sm">
              <p className="flex items-center gap-2">
                📧 support@teegalaxy.com
              </p>
              <p className="flex items-center gap-2">
                📞 +1 (555) 123-4567
              </p>
              <p className="flex items-center gap-2">
                🏢 123 Comic Lane, Art City, CC 56789
              </p>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-300 mb-4">Follow Us</h4>
            <div className="flex gap-4 text-2xl">
              <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
                <FaFacebook />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
                <FaInstagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 text-center text-gray-400 text-sm">
          <p>© 2024 TeeGalaxy. All rights reserved. | Designed with ❤️ by Comic Fans</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;