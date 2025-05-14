import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaTrash, FaHeart, FaEdit, FaPlus, FaMinus } from "react-icons/fa";

const CartPage = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  const handleRemoveItem = (id) => {
    const itemIndex = cart.findIndex((item) => item.id === id);

    if (itemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart.splice(itemIndex, 1); // Removes only ONE instance

      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };

  const handleQuantityChange = (id, action) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: action === "increase" ? (item.quantity || 1) + 1 : Math.max(1, (item.quantity || 1) - 1),
        };
      }
      return item;
    });

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const totalAmount = cart.reduce((total, item) => total + item.price * (item.quantity || 1), 0).toFixed(2);

  return (
    <div className="relative min-h-screen text-white">
      <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover opacity-100">
        <source src="https://res.cloudinary.com/dypbvh8u8/video/upload/v1746700076/2611250-uhd_3840_2160_30fps_vksmer.mp4" type="video/mp4" />
      </video>

      <div className="relative p-6 md:p-12 z-10">
        <motion.h2
          className="text-3xl font-bold mb-12 mt-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          🛍️ My Cart
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Cart Items */}
          <motion.div className="md:col-span-2 space-y-6">
            {cart.length === 0 ? (
              <p className="text-center text-gray-300">Your cart is empty.</p>
            ) : (
              cart.map((item, index) => (
                <motion.div key={index} className="flex items-start gap-4 bg-gray-700 rounded-lg p-6 shadow-lg">
                  <img src={item.image} alt={item.name} className="w-28 h-36 object-cover rounded-md border border-gray-500" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{item.name}</h3>
                    <p className="text-sm text-gray-400">Size: {item.selectedSize}</p>
                    <p className="text-sm text-green-400 mt-1">✔ In Stock</p>

                    {/* Quantity Selector */}
                    <div className="flex items-center gap-3 mt-3">
                      <button className="p-2 bg-gray-600 rounded-md hover:bg-gray-500" onClick={() => handleQuantityChange(item.id, "decrease")}>
                        <FaMinus />
                      </button>
                      <span className="text-lg font-bold">{item.quantity || 1}</span>
                      <button className="p-2 bg-gray-600 rounded-md hover:bg-gray-500" onClick={() => handleQuantityChange(item.id, "increase")}>
                        <FaPlus />
                      </button>
                    </div>

                    <div className="flex justify-between mt-4 text-lg">
                      <span className="font-bold">₹{(item.price * (item.quantity || 1)).toFixed(2)}</span>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-4 flex gap-4 text-sm">
                      <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300">
                        <FaEdit /> Edit
                      </button>
                      <button className="flex items-center gap-2 text-red-500 hover:text-red-400" onClick={() => handleRemoveItem(item.id)}>
                        <FaTrash /> Remove
                      </button>
                      <button className="flex items-center gap-2 text-purple-400 hover:text-purple-300">
                        <FaHeart /> Move to Wishlist
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </motion.div>

          {/* Right-Side Order Summary */}
          <motion.div className="bg-gray-800 bg-opacity-90 p-6 rounded-lg shadow-lg space-y-4 backdrop-blur-md">
            <h3 className="text-xl font-semibold text-center">Order Summary</h3>

            {/* Product Names & Prices */}
            <div className="border-t border-gray-500 pt-4 space-y-2 text-sm">
              {cart.map((item, index) => (
                <div key={index} className="flex justify-between">
                  <span>{item.name} x {item.quantity || 1}</span>
                  <span className="font-semibold">₹{(item.price * (item.quantity || 1)).toFixed(2)}</span>
                </div>
              ))}
            </div>

            {/* Total Price */}
            <div className="border-t border-gray-500 pt-4 text-lg font-semibold flex justify-between">
              <span>Total:</span>
              <span>₹{totalAmount}</span>
            </div>

            {/* Checkout Button (Disabled if cart is empty or amount is zero) */}
            <button
              onClick={() => navigate("/payment")}
              className={`w-full bg-yellow-400 text-black font-bold py-3 rounded transition ${cart.length === 0 || totalAmount === "0.00" ? "opacity-50 cursor-not-allowed" : "hover:bg-yellow-300"}`}
              disabled={cart.length === 0 || totalAmount === "0.00"}
            >
              Proceed to Checkout
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;