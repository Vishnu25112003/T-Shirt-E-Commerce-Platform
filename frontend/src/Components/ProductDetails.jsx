"use client";

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Heart,
  ShoppingCart,
  Star,
  ChevronLeft,
  Sparkles,
  Shirt,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

// Star animation component
const AnimatedStar = ({ delay = 0 }) => {
  return (
    <motion.div
      className="absolute rounded-full bg-white"
      initial={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        scale: 0,
        opacity: 0,
      }}
      animate={{
        scale: [0, 1, 0.5, 1, 0],
        opacity: [0, 0.8, 0.4, 0.8, 0],
      }}
      transition={{
        duration: 5 + Math.random() * 5,
        delay: delay,
        repeat: Number.POSITIVE_INFINITY,
        repeatDelay: Math.random() * 3,
      }}
      style={{
        width: `${Math.random() * 3 + 1}px`,
        height: `${Math.random() * 3 + 1}px`,
      }}
    />
  );
};

// Stars background component
const StarryBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/30 to-black" />
      {Array.from({ length: 100 }).map((_, i) => (
        <AnimatedStar key={i} delay={i * 0.05} />
      ))}
    </div>
  );
};

const formatPrice = (price) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);
};

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [loading, setLoading] = useState(true);
  const [mainImage, setMainImage] = useState("");
  const [isAddedToWishlist, setIsAddedToWishlist] = useState(false);
  const [cart, setCart] = useState([]);
  const [suggestedProducts, setSuggestedProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const productsPerView = 4;
  const [quantity, setQuantity] = useState(1);

  // Fetch product data
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/products/${id}`);
        const data = await res.json();
        setProduct(data);
        setMainImage(data.image);
        setSelectedSize(data.size[0] || "");
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  // Fetch suggested products
  useEffect(() => {
    const fetchSuggestedProducts = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/products");
        const data = await res.json();

        const filtered = data.filter((item) => item._id !== id);
        const shuffled = [...filtered]
          .sort(() => 0.5 - Math.random())
          .slice(0, 8);
        setSuggestedProducts(shuffled);
      } catch (error) {
        console.error("Error fetching suggested products:", error);
      }
    };

    fetchSuggestedProducts();
  }, [id]);

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  // Navigation for suggested products
  const handleNext = () => {
    if (currentIndex + productsPerView < suggestedProducts.length) {
      setCurrentIndex(currentIndex + productsPerView);
    }
  };

  const handlePrev = () => {
    if (currentIndex - productsPerView >= 0) {
      setCurrentIndex(currentIndex - productsPerView);
    }
  };

  // Add to cart handler (without animation)
  const handleAddToCart = () => {
    if (!selectedSize) return alert("Please select a size!");

    const newItem = {
      ...product,
      selectedSize,
      quantity,
      id: `${product._id}-${selectedSize}-${Date.now()}`,
    };

    const updatedCart = [...cart, newItem];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Toggle wishlist
  const handleAddToWishlist = () => {
    setIsAddedToWishlist(!isAddedToWishlist);
  };

  // Generate additional images based on main image for gallery
  const getProductImages = (mainImg) => {
    if (!mainImg) return [];
    return [mainImg, mainImg, mainImg, mainImg];
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <StarryBackground />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          <Shirt className="w-12 h-12 text-purple-400" />
        </motion.div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white">
        <StarryBackground />
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product not found</h2>
          <button
            className="px-4 py-2 bg-purple-600 rounded-md hover:bg-purple-700 transition-colors"
            onClick={() => navigate(-1)}
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const productImages = getProductImages(product.image);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden pt-24">
      <StarryBackground />

      {/* Back button */}
      <motion.button
        className="absolute top-20 left-6 z-50 flex items-center gap-2 px-4 py-2 text-white font-medium bg-white/10 backdrop-blur-md border border-white/30 rounded-full shadow-lg hover:bg-white/20 hover:text-pink-400 transition-all duration-300"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        onClick={() => navigate(-1)}
      >
        <ChevronLeft className="w-5 h-5" />
        <span>Back</span>
      </motion.button>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 relative">
          {/* Product Images */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Main image */}
            <div className="relative rounded-lg overflow-hidden group">
              <img
                src={mainImage || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-auto object-cover rounded-lg transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Thumbnail gallery */}
            <div className="flex gap-2 overflow-x-auto pb-2 snap-x">
              {productImages.map((img, index) => (
                <motion.div
                  key={index}
                  className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden cursor-pointer snap-start ${
                    mainImage === img
                      ? "ring-2 ring-purple-500"
                      : "ring-1 ring-white/10"
                  }`}
                  onClick={() => setMainImage(img)}
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <img
                    src={img || "/placeholder.svg"}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Product Details */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Category */}
            <motion.div
              className="text-purple-400 font-medium"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {product.category}
            </motion.div>

            {/* Product Name */}
            <motion.h1
              className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-300 to-blue-400"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {product.name}
            </motion.h1>

            {/* Rating */}
            <motion.div
              className="flex items-center gap-1"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-5 h-5 ${
                    star <= 4
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-600"
                  }`}
                />
              ))}
              <span className="ml-2 text-gray-400">4.0/5</span>
            </motion.div>

            {/* Price */}
            <motion.div
              className="text-3xl font-bold"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {formatPrice(product.price)}
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              Premium quality {product.name} made with the finest materials.
              Perfect for casual wear or special occasions.
            </motion.p>

            {/* Features */}
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <h3 className="font-semibold text-lg">Features:</h3>
              <ul className="space-y-1">
                {[
                  "Premium quality fabric",
                  "Official licensed merchandise",
                  "Machine washable",
                  `Available in ${product.color}`,
                ].map((feature, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-2"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                  >
                    <Sparkles className="w-5 h-5 text-purple-400 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Color */}
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
            >
              <h3 className="font-semibold">Color:</h3>
              <div className="flex items-center gap-2">
                <div
                  className="w-8 h-8 rounded-full ring-2 ring-white/50"
                  style={{ backgroundColor: product.color.toLowerCase() }}
                  title={product.color}
                ></div>
                <span>{product.color}</span>
              </div>
            </motion.div>

            {/* Size Selection */}
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
            >
              <h3 className="font-semibold">Size:</h3>
              <div className="flex gap-3">
                {product.size.map((size) => (
                  <button
                    key={size}
                    className={`px-4 py-2 rounded-md cursor-pointer transition-all duration-300 ${
                      selectedSize === size
                        ? "bg-purple-600 text-white"
                        : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Quantity Selector */}
            <motion.div
              className="flex items-center space-x-4"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <h3 className="font-semibold">Quantity:</h3>
              <div className="flex items-center border border-gray-600 rounded-md">
                <button
                  className="px-3 py-1 text-xl font-bold text-white bg-gray-800 hover:bg-gray-700"
                  onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
                >
                  -
                </button>
                <span className="px-4 py-1 text-lg font-medium">
                  {quantity}
                </span>
                <button
                  className="px-3 py-1 text-xl font-bold text-white bg-gray-800 hover:bg-gray-700"
                  onClick={() => setQuantity((prev) => prev + 1)}
                >
                  +
                </button>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
            >
              {/* Normal Add to Cart Button (No Animation) */}
              <button
                className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-6 py-3 rounded-md font-medium transition-all"
                onClick={handleAddToCart}
              >
                <div className="flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </div>
              </button>

              {/* Buy Now Button */}
              <button
                className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-md font-medium transition-all"
                onClick={() => {
                  if (!selectedSize) return alert("Please select a size!");

                  const orderData = {
                    product,
                    selectedSize,
                    quantity,
                    totalPrice: product.price * quantity,
                  };

                  navigate("/payment", { state: { order: orderData } });
                }}
              >
                Buy Now
              </button>

              {/* Wishlist Button */}
              <button
                className={`border border-purple-500 text-purple-400 hover:bg-purple-950/30 px-6 py-3 rounded-md font-medium flex items-center justify-center ${
                  isAddedToWishlist ? "bg-purple-950/30" : ""
                }`}
                onClick={handleAddToWishlist}
              >
                <Heart
                  className={`w-5 h-5 mr-2 transition-all ${
                    isAddedToWishlist ? "fill-red-500 text-red-500" : ""
                  }`}
                />
                {isAddedToWishlist ? "Added to Wishlist" : "Add to Wishlist"}
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Suggested Products Section */}
        <div className="mt-12 relative">
          <h2 className="text-2xl font-bold mb-4">Suggested Products</h2>
          <div className="flex items-center gap-4">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`p-2 rounded-full ${
                currentIndex === 0
                  ? "opacity-50 cursor-not-allowed"
                  : "bg-gray-700"
              }`}
            >
              <ArrowLeft className="w-6 h-6" />
            </button>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 flex-1">
              {suggestedProducts
                .slice(currentIndex, currentIndex + productsPerView)
                .map((item) => (
                  <motion.div
                    key={item._id}
                    className="cursor-pointer h-64"
                    onClick={() => navigate(`/product/${item._id}`)}
                    whileHover={{ scale: 1.05 }}
                  >
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-40 object-cover rounded-lg"
                    />
                    <p className="mt-2 text-lg text-center">{item.name}</p>
                  </motion.div>
                ))}
            </div>

            <button
              onClick={handleNext}
              disabled={
                currentIndex + productsPerView >= suggestedProducts.length
              }
              className={`p-2 rounded-full ${
                currentIndex + productsPerView >= suggestedProducts.length
                  ? "opacity-50 cursor-not-allowed"
                  : "bg-gray-700"
              }`}
            >
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
