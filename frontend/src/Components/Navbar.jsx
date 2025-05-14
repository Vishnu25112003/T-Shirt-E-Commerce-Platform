import React, { useState, useEffect } from "react";
import { FaShoppingCart, FaUser, FaSearch } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [userFirstName, setUserFirstName] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const searchRef = React.useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Fetch first name and avatar from localStorage
    const storedName = localStorage.getItem("userFirstName");
    const storedAvatar = localStorage.getItem("selectedAvatar");

    if (storedName) {
      setUserFirstName(storedName);
    }
    if (storedAvatar) {
      setUserAvatar(storedAvatar);
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearch(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLoginClick = () => {
    navigate("/login", { state: { from: location.pathname } });
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-md">
      {/* Logo */}
      <div className="text-pink-500 text-2xl font-extrabold tracking-wider">TeeGalaxy</div>

      {/* Right Side */}
      <div className="flex items-center gap-6 text-lg relative" ref={searchRef}>
        <Link to="/" className="px-4 py-2 hover:bg-gray-500 rounded-full transition-all">Home</Link>
        <Link to="/about" className="px-4 py-2 hover:bg-gray-500 rounded-full transition-all">About</Link>
        <Link to="/all-products" className="px-4 py-2 hover:bg-gray-500 rounded-full transition-all">Products</Link>

        {/* Cart */}
        <div className="relative">
          <Link to="/cart">
            <FaShoppingCart className="cursor-pointer hover:text-pink-400 transition duration-300" />
          </Link>
        </div>

        {/* Avatar Display */}
        <div className="relative">
          <Link to="/User-Panel">
            {userAvatar ? (
              <img src={userAvatar} alt="User Avatar" className="w-10 h-10 rounded-full border-2 border-pink-500" />
            ) : (
              <FaUser className="cursor-pointer hover:text-pink-400 transition duration-300" />
            )}
          </Link>
        </div>

        {/* Login / First Name Display */}
        {userFirstName ? (
          <span className="text-sm bg-pink-500 px-4 py-1.5 rounded-md">{userFirstName}</span>
        ) : (
          <button onClick={handleLoginClick} className="text-sm bg-pink-500 hover:bg-pink-600 text-white px-4 py-1.5 rounded-md transition-all">Login</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;