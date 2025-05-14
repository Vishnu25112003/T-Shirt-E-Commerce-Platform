"use client"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

const AllProducts = () => {
  const [products, setProducts] = useState([])
  const [maxPrice, setMaxPrice] = useState(60000)
  const [selectedSize, setSelectedSize] = useState("")
  const [selectedCategories, setSelectedCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/products")
        const data = await res.json()
        setProducts(data)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching products:", error)
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  const filteredProducts = products.filter(
    (product) =>
      product.price <= maxPrice &&
      (selectedSize === "" || product.size.includes(selectedSize)) &&
      (selectedCategories.length === 0 || selectedCategories.includes(product.category)),
  )

  // Handle product click to navigate to details page
  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`)
  }

  // ProductCard component
  const ProductCard = ({ product }) => {
    const { _id, name, image, price, category } = product

    return (
      <div
        className="bg-black/40 text-white rounded-xl overflow-hidden shadow hover:scale-105 transition-all duration-300 cursor-pointer"
        onClick={() => handleProductClick(_id)}
      >
        <div className="relative">
          <img src={image || "/placeholder.svg"} alt={name} className="w-full h-48 object-cover" loading="lazy" />
          <span className="absolute top-2 right-2 bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">
            {category?.toUpperCase()}
          </span>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold truncate">{name}</h3>
          <p className="text-indigo-400 font-bold mt-1">₹{price?.toLocaleString()}</p>
        </div>
      </div>
    )
  }

  // FilterSidebar component (Optional - add a basic sidebar for filters)
  const FilterSidebar = ({
    maxPrice,
    setMaxPrice,
    selectedSize,
    setSelectedSize,
    selectedCategories,
    setSelectedCategories,
  }) => {
    const sizes = ["S", "M", "L", "XL", "XXL"]
    const categories = [
      "MARVEL",
      "DC",
      "COMICS",
      "ANIME",
      "Fantasy",
      "Gaming",
    ]
  
    const handleCategoryChange = (category) => {
      if (selectedCategories.includes(category)) {
        setSelectedCategories(selectedCategories.filter((c) => c !== category))
      } else {
        setSelectedCategories([...selectedCategories, category])
      }
    }
  
    return (
      <div className="bg-gray-800 text-white p-6 rounded-xl shadow-lg space-y-6">
        <h2 className="text-2xl font-bold border-b border-gray-600 pb-2">Filters</h2>
  
        {/* Price Filter */}
        <div>
          <label className="block text-sm font-semibold mb-1">Max Price: ₹{maxPrice}</label>
          <input
            type="range"
            min={100}
            max={10000}
            step={100}
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="w-full accent-indigo-500"
          />
          <div className="text-xs text-gray-400 mt-1 flex justify-between">
            <span>₹100</span>
            <span>₹10k</span>
          </div>
        </div>
  
        {/* Sizes - Styled Radio Buttons */}
        <div>
          <label className="block text-sm font-semibold mb-2">Sizes</label>
          <div className="flex flex-wrap gap-2">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-4 py-1 rounded-full border text-sm font-medium transition duration-200 ${
                  selectedSize === size
                    ? "bg-indigo-500 text-white border-indigo-500"
                    : "bg-transparent border-gray-400 text-gray-300 hover:border-white hover:text-white"
                }`}
              >
                {size}
              </button>
            ))}
            <button
              onClick={() => setSelectedSize("")}
              className={`px-4 py-1 rounded-full border text-sm font-medium transition duration-200 ${
                selectedSize === ""
                  ? "bg-indigo-500 text-white border-indigo-500"
                  : "bg-transparent border-gray-400 text-gray-300 hover:border-white hover:text-white"
              }`}
            >
              All
            </button>
          </div>
        </div>
  
        {/* Categories - Styled Checkboxes */}
        <div>
          <label className="block text-sm font-semibold mb-2">Categories</label>
          <div className="grid grid-cols-2 gap-2">
            {categories.map((category) => (
              <label
                key={category}
                className={`flex items-center gap-2 text-sm px-3 py-2 rounded-full border transition duration-200 cursor-pointer ${
                  selectedCategories.includes(category)
                    ? "bg-indigo-600 text-white border-indigo-600"
                    : "bg-gray-700 border-gray-500 text-gray-300 hover:border-white hover:text-white"
                }`}
              >
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCategoryChange(category)}
                  className="hidden"
                />
                {category}
              </label>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-700 p-6 md:p-10">
      <h1 className="text-3xl font-bold text-white mb-6 pt-16">All Products</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1">
          <FilterSidebar
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
          />
        </div>

        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[500px]">
          {loading ? (
            <p className="text-white text-xl text-center col-span-full">Loading...</p>
          ) : filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product._id} className="w-full max-w-[300px] mx-auto">
                <ProductCard product={product} />
              </div>
            ))
          ) : (
            <p className="text-white text-xl text-center font-semibold col-span-full">No products found.</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default AllProducts
