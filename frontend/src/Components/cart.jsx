import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaTrash, FaHeart, FaEdit } from "react-icons/fa";
import { dispatchCartUpdate } from "./Navbar";

const CartPage = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  const handleRemoveItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    dispatchCartUpdate(updatedCart); // Notify navbar of cart change
  };

  const totalAmount = cart
    .reduce((total, item) => total + item.price * (item.quantity || 1), 0)
    .toFixed(2);

  const handleBuyNow = (item) => {
    const singleItemCart = [item];
    localStorage.setItem("cart", JSON.stringify(singleItemCart));
    dispatchCartUpdate(singleItemCart);
    navigate("/payment");
  };

  return (
    <div className="relative min-h-screen text-white bg-black">
      {/* Background: Starry Night Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover opacity-90"
      >
        <source
          src="https://res.cloudinary.com/dypbvh8u8/video/upload/v1746700076/2611250-uhd_3840_2160_30fps_vksmer.mp4 "
          type="video/mp4"
        />
      </video>

      <div className="relative z-10 p-6 md:p-12 backdrop-blur-sm">
        <motion.h2
          className="text-4xl font-extrabold mb-12 mt-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-300"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          🛍️ My Cosmic Cart
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Cart Items */}
          <motion.div className="md:col-span-2 space-y-6 pr-2">
            {cart.length === 0 ? (
              <p className="text-center text-gray-300">Your cart is empty.</p>
            ) : (
              cart.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col md:flex-row items-start gap-4 bg-gradient-to-br from-gray-900 to-blue-900 rounded-xl p-6 shadow-lg shadow-purple-500/20 border border-gray-700"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full md:w-28 md:h-36 object-cover rounded-md border border-purple-500"
                  />
                  <div className="flex-1 space-y-2">
                    <h3 className="font-bold text-lg text-purple-300">{item.name}</h3>
                    <p className="text-sm text-gray-400">Size: {item.selectedSize}</p>
                    <p className="text-sm text-green-400">✔ In Stock</p>

                    <div className="mt-3">
                      <span className="text-sm text-gray-300">Qty: {item.quantity || 1}</span>
                    </div>

                    <div className="flex justify-between mt-4 text-lg font-bold">
                      ₹{(item.price * (item.quantity || 1)).toFixed(2)}
                    </div>

                    <div className="mt-4 flex flex-wrap gap-3">
                      {/* Edit Button */}
                      <button
                        title="Edit Product"
                        className="group flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white rounded-full shadow-md shadow-indigo-500/30 transition-all duration-300 transform hover:scale-105"
                      >
                        <span className="text-lg group-hover:rotate-12 transition-transform">💡</span>
                        <span>Edit</span>
                      </button>

                      {/* Remove Button */}
                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        title="Remove from Cart"
                        className="group flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-500 hover:to-pink-500 text-white rounded-full shadow-md shadow-red-500/30 transition-all duration-300 transform hover:scale-105"
                      >
                        <span className="text-lg group-hover:scale-110 transition-transform">🗑️</span>
                        <span>Remove</span>
                      </button>

                      {/* Wishlist Button */}
                      <button
                        title="Move to Wishlist"
                        className="group flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-pink-600 to-purple-700 hover:from-pink-500 hover:to-purple-600 text-white rounded-full shadow-md shadow-pink-500/30 transition-all duration-300 transform hover:scale-105"
                      >
                        <span className="text-lg group-hover:text-red-300 transition-colors">❤️</span>
                        <span>Wishlist</span>
                      </button>

                      {/* Buy Now Button */}
                      <button
                        onClick={() => handleBuyNow(item)}
                        title="Buy This Item"
                        className="group flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500 hover:via-orange-500 hover:to-pink-400 text-black font-bold rounded-full shadow-lg shadow-yellow-500/40 transition-all duration-300 transform hover:scale-105"
                      >
                        <span className="text-lg group-hover:animate-pulse">💵</span>
                        <span>Buy Now</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </motion.div>

          {/* Order Summary */}
          <motion.div
            className={`${cart.length > 0 ? "md:sticky md:top-24 self-start" : ""}
              bg-gradient-to-br from-gray-900 via-blue-900 to-black p-6 rounded-xl shadow-lg border border-purple-700 md:col-span-1 w-full backdrop-blur-md`}
          >
            <h3 className="text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-400">
              Celestial Order
            </h3>

            {/* Item List */}
            <div className="space-y-3 max-h-60 overflow-y-auto pr-2 mt-4">
              {cart.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border-b border-gray-700 pb-2"
                >
                  <div className="flex items-center gap-2">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-10 h-10 object-cover rounded"
                    />
                    <span className="text-sm">{item.name}</span>
                  </div>
                  <span className="font-semibold text-sm">
                    ₹{(item.price * (item.quantity || 1)).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            {/* Total */}
            <div className="border-t border-gray-700 pt-4 mt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span>Subtotal:</span>
                <span>₹{totalAmount}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Tax (5%):</span>
                <span>₹{(parseFloat(totalAmount) * 0.05).toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold text-lg">
                <span>Total:</span>
                <span>
                  ₹
                  {(parseFloat(totalAmount) + parseFloat(totalAmount) * 0.05).toFixed(2)}
                </span>
              </div>
            </div>

            {/* Checkout Button */}
            <button
              onClick={() => navigate("/payment")}
              disabled={cart.length === 0 || totalAmount === "0.00"}
              className={`mt-6 w-full py-3 px-4 rounded-lg font-bold text-black transition-all transform hover:scale-105 focus:outline-none ${
                cart.length === 0 || totalAmount === "0.00"
                  ? "bg-yellow-300 opacity-60 cursor-not-allowed"
                  : "bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500 hover:from-yellow-500 hover:to-pink-500"
              }`}
            >
              Proceed to Checkout 🚀
            </button>

            {/* Info */}
            <div className="text-xs text-gray-400 mt-4 text-center">
              Taxes included • Free shipping above ₹1,000
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;