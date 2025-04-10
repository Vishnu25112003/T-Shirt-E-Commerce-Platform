import React, { useEffect } from "react";
import { Search, User, Filter, Heart, ShoppingBag } from "lucide-react";
import Homebg from '../assets/Homebg.png';

const categories = ["Men", "Women", "Kids"];

const UserDashboard = () => {
  useEffect(() => {
    document.title = "Tee Galaxy | Marvel Collection";
  }, []);

  return (
    <div className="font-sans bg-gray-100 min-h-screen">
      {/* Top Navbar */}
      <div className="bg-blue-900 text-white px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left: Logo */}
        <div className="text-2xl font-bold tracking-widest">
          <span className="text-yellow-400">TEE</span> Galaxy
        </div>

        {/* Center: Search Bar */}
        <div className="flex-grow flex justify-center">
          <div className="flex items-center border border-gray-300 rounded-full px-4 w-full md:w-[40%] bg-white text-gray-700 h-12">
            <input
              type="text"
              placeholder="Search By Products"
              className="flex-grow outline-none text-lg"
            />
            <Search className="w-6 h-6 text-gray-600" />
          </div>
        </div>

        {/* Right: Login + User Icon */}
        <div className="flex items-center space-x-4">
          <span className="cursor-pointer">Login</span>
          <User className="w-6 h-6" />
        </div>
      </div>

{/* Category Section */}
<div className="bg-white px-6 py-3 shadow-md flex flex-col md:flex-row items-center justify-between gap-4">
  {/* Segmented Category Buttons */}
  <div className="flex-grow flex justify-center ml-4"> {/* Added ml-4 here */}
    <div className="flex items-center bg-yellow-400 rounded-full shadow overflow-hidden h-12">
      {categories.map((category, index) => (
        <button
          key={category}
          className={`px-6 text-black hover:bg-yellow-300 transition h-full text-lg ${
            index !== 0 ? "border-l border-yellow-300" : ""
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  </div>

  {/* Right-side Icons */}
  <div className="flex space-x-4">
    <Filter className="w-6 h-6 text-gray-600 cursor-pointer" />
    <Heart className="w-6 h-6 text-gray-600 cursor-pointer" />
    <ShoppingBag className="w-6 h-6 text-gray-600 cursor-pointer" />
  </div>
</div>



      {/* Marvel Banner Section */}
      <div className="relative overflow-hidden">
        <img
          src={Homebg} // Replace with actual image path
          alt="Marvel Collection"
          className=""
        />
      </div>
    </div>
  );
};

export default UserDashboard;
