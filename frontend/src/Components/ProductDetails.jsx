"use client";

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingCart, ChevronLeft, ArrowLeft, ArrowRight } from "lucide-react";

const StarryBackground = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/30 to-black" />
  </div>
);

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [loading, setLoading] = useState(true);
  const [mainImage, setMainImage] = useState("");
  const [cart, setCart] = useState([]);
  const [suggestedProducts, setSuggestedProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const productsPerView = 4;

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

  useEffect(() => {
    const fetchSuggestedProducts = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/products");
        const data = await res.json();
        const shuffled = data.sort(() => 0.5 - Math.random()).slice(0, 8); // Select 8 random products
        setSuggestedProducts(shuffled);
      } catch (error) {
        console.error("Error fetching suggested products:", error);
      }
    };

    fetchSuggestedProducts();
  }, []);

  useEffect(() => {
    // Fetch existing cart from localStorage when the component loads
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

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

  const handleAddToCart = () => {
    if (!selectedSize) return alert("Please select a size!");

    const newItem = {
      ...product,
      selectedSize,
      id: `${product.id}-${selectedSize}-${Date.now()}`,
    };

    // Fetch existing cart items from localStorage
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];

    // Add the new product to the existing cart
    const updatedCart = [...savedCart, newItem];

    // Update both state and localStorage
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-black">
        <StarryBackground />
        <p className="text-white text-xl">Loading...</p>
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

  return (
    <div className="min-h-screen text-white relative overflow-hidden pt-24">
      <StarryBackground />

      {/* Back button */}
      <motion.button
        className="absolute top-20 left-6 z-50 px-4 py-2 bg-white/10 border border-white/30 rounded-full hover:bg-white/20 transition-all"
        onClick={() => navigate(-1)}
      >
        <ChevronLeft className="w-5 h-5" /> Back
      </motion.button>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Product Image */}
          <motion.div className="space-y-4">
            <img src={mainImage || "/placeholder.svg"} alt={product.name} className="w-full rounded-lg" />
          </motion.div>

          {/* Product Details */}
          <motion.div className="space-y-6">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-gray-300">Price: ₹{product.price}</p>

            {/* Size Selection */}
            <div className="flex gap-3">
              {product.size.map((size) => (
                <button
                  key={size}
                  className={`px-4 py-2 rounded-md ${selectedSize === size ? "bg-purple-600" : "bg-gray-800"}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>

            {/* Add to Cart Button */}
            <motion.button
              className="px-6 py-3 rounded-md bg-purple-600 hover:bg-purple-700 transition-all"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="w-5 h-5" /> Add to Cart
            </motion.button>
          </motion.div>
        </div>

        {/* Suggested Products Section with Manual Navigation */}
        <div className="mt-12 relative">
          <h2 className="text-2xl font-bold mb-4">Suggested Products</h2>
          <div className="flex items-center gap-4">
            <button onClick={handlePrev} className="text-white p-2 bg-gray-700 rounded-full">
              <ArrowLeft className="w-6 h-6" />
            </button>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {suggestedProducts.slice(currentIndex, currentIndex + productsPerView).map((item) => (
                <div key={item._id} className="cursor-pointer" onClick={() => navigate(`/product/${item._id}`)}>
                  <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-full h-36 object-cover rounded-lg" />
                  <p className="mt-2 text-lg text-center">{item.name}</p>
                </div>
              ))}
            </div>

            <button onClick={handleNext} className="text-white p-2 bg-gray-700 rounded-full">
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;