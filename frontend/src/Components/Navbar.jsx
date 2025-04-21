import React from 'react';
import { FaShoppingCart, FaUser, FaSearch } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [showSearch, setShowSearch] = React.useState(false);
  const searchRef = React.useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearch(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLoginClick = () => {
    navigate('/login', { state: { from: location.pathname } });
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-md">
      {/* Logo */}
      <div className="text-pink-500 text-2xl font-extrabold tracking-wider">TeeGalaxy</div>

      {/* Right Side */}
      <div className="flex items-center gap-6 text-lg relative" ref={searchRef}>

        

        <Link to="#" className="hover:text-blue-500 transition">
  Home
</Link>





        <Link to="/about" className="hover:text-blue-500 transition">
  About 
</Link>
        {/* Search */}
        <div className="flex items-center gap-2 relative">
          <FaSearch
            className="cursor-pointer hover:text-pink-400 transition duration-300"
            onClick={() => setShowSearch(!showSearch)}
          />
          <div
            className={`absolute right-0 top-full mt-2 z-10 transition-all duration-500 ease-in-out origin-top-right ${
              showSearch ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
            }`}
          >
            <input
              type="text"
              placeholder="Search your style..."
              className="w-64 px-4 py-2 rounded-md border border-pink-500 bg-white text-gray-800 shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all duration-300"
            />
          </div>
        </div>
        {/* Cart */}
        <div className="relative">
          <FaShoppingCart className="cursor-pointer hover:text-pink-400 transition duration-300" />
          <span className="absolute -top-2 -right-2 bg-pink-500 text-white rounded-full text-xs px-1">0</span>
        </div>
                {/* User Icon */}
                <FaUser className="text-xl" />
        {/* Login Button */}
        <button
          onClick={handleLoginClick}
          className="text-sm bg-pink-500 hover:bg-pink-600 text-white px-4 py-1.5 rounded-md transition-all duration-300"
        >
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
