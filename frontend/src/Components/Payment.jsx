import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const navigate = useNavigate();

  // Address state
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [isAddingAddress, setIsAddingAddress] = useState(false);
  const [newAddress, setNewAddress] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    isDefault: false,
  });

  // Payment method state
  const [paymentMethod, setPaymentMethod] = useState("");
  const [upiId, setUpiId] = useState("");
  const [cardDetails, setCardDetails] = useState({ number: "", expiry: "", cvv: "" });
  const [bank, setBank] = useState("");

  // Cart & Payment
  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  // Load data from localStorage
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);

    const amount = savedCart.reduce(
      (sum, item) => sum + item.price * (item.quantity || 1),
      0
    );
    setTotalAmount(Math.round(amount * 100)); // paise

    const savedAddresses = JSON.parse(localStorage.getItem("addresses")) || [];
    setAddresses(savedAddresses);

    if (savedAddresses.length > 0) {
      setSelectedAddress(savedAddresses.find((a) => a.isDefault) || savedAddresses[0]);
    }
  }, []);

  // Save updated addresses to localStorage
  useEffect(() => {
    localStorage.setItem("addresses", JSON.stringify(addresses));
  }, [addresses]);

  // Toggle add new address form
  const toggleAddAddress = () => {
    setIsAddingAddress(!isAddingAddress);
  };

  // Handle input changes
  const handleInputChange = (e) => {
    setNewAddress({ ...newAddress, [e.target.name]: e.target.value });
  };

  // Save new address
  const handleAddAddress = () => {
    if (!newAddress.name || !newAddress.phone || !newAddress.address || !newAddress.pincode) {
      alert("Please fill in required fields.");
      return;
    }

    const updatedAddresses = [...addresses, newAddress];
    setAddresses(updatedAddresses);
    setSelectedAddress(newAddress);
    setNewAddress({
      name: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      pincode: "",
      isDefault: false,
    });
    setIsAddingAddress(false);
  };

  // Delete an address
  const handleDeleteAddress = (id) => {
    const updated = addresses.filter((addr, index) => index !== id);
    setAddresses(updated);
    if (selectedAddress === addresses[id]) {
      setSelectedAddress(updated.length > 0 ? updated[0] : null);
    }
  };

  // Set selected address
  const handleSelectAddress = (index) => {
    setSelectedAddress(addresses[index]);
  };

  // Submit payment
  const handlePayment = () => {
    if (!selectedAddress) {
      alert("Please select or add an address.");
      return;
    }

    if (!paymentMethod) {
      alert("Please choose a payment method.");
      return;
    }

    alert(`Proceeding with ${paymentMethod.toUpperCase()}...`);
    // You can integrate Razorpay or backend here
  };

  return (
    <div className="relative min-h-screen text-white bg-black">
      {/* Background Video */}
      <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover opacity-90">
        <source
          src="https://res.cloudinary.com/dypbvh8u8/video/upload/v1746700076/2611250-uhd_3840_2160_30fps_vksmer.mp4 "
          type="video/mp4"
        />
      </video>

      <div className="relative z-10 p-6 md:p-12 backdrop-blur-sm">
        <h2 className="text-4xl font-extrabold mb-8 mt-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-300">
          🚀 Checkout
        </h2>

        {/* Address Section */}
        <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-black p-6 rounded-xl shadow-lg border border-purple-700 mb-8 max-w-2xl mx-auto">
          <h3 className="text-xl font-bold mb-4 text-yellow-400">Shipping Address</h3>

          {/* Saved Addresses */}
          <div className="space-y-4 mb-6">
            {addresses.map((addr, index) => (
              <div
                key={index}
                onClick={() => handleSelectAddress(index)}
                className={`p-4 rounded-lg cursor-pointer transition-all ${
                  selectedAddress === addr
                    ? "ring-2 ring-yellow-400 scale-105"
                    : "hover:bg-gray-800"
                }`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <strong>{addr.name}</strong>{" "}
                    {addr.isDefault && (
                      <span className="text-xs text-yellow-400">(Default)</span>
                    )}
                    <p>{addr.phone}</p>
                    <p>
                      {addr.address}, {addr.city}, {addr.state} - {addr.pincode}
                    </p>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteAddress(index);
                    }}
                    className="text-red-400 hover:text-red-300 text-sm"
                  >
                    🗑️ Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* "Add New Address" Button */}
          <button
            onClick={toggleAddAddress}
            className="w-full py-3 px-4 bg-gray-800 hover:bg-gray-700 text-sm rounded-md flex items-center justify-center gap-2"
          >
            ➕ Add New Address
          </button>

          {/* Add/Edit Address Form */}
          {isAddingAddress && (
            <div className="mt-4 space-y-3 animate-fadeIn">
              <input
                name="name"
                placeholder="Full Name"
                value={newAddress.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 bg-gray-800 rounded-md text-white"
              />
              <input
                name="phone"
                placeholder="Phone Number"
                value={newAddress.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-2 bg-gray-800 rounded-md text-white"
              />
              <textarea
                name="address"
                placeholder="Full Address"
                value={newAddress.address}
                onChange={handleInputChange}
                className="w-full px-4 py-2 bg-gray-800 rounded-md text-white"
              />
              <div className="grid grid-cols-3 gap-3">
                <input
                  name="city"
                  placeholder="City"
                  value={newAddress.city}
                  onChange={handleInputChange}
                  className="px-4 py-2 bg-gray-800 rounded-md text-white"
                />
                <input
                  name="state"
                  placeholder="State"
                  value={newAddress.state}
                  onChange={handleInputChange}
                  className="px-4 py-2 bg-gray-800 rounded-md text-white"
                />
                <input
                  name="pincode"
                  placeholder="Pincode"
                  value={newAddress.pincode}
                  onChange={handleInputChange}
                  className="px-4 py-2 bg-gray-800 rounded-md text-white"
                />
              </div>
              <div className="flex gap-2">
                <label className="flex items-center gap-1 text-sm">
                  <input
                    type="checkbox"
                    checked={newAddress.isDefault}
                    onChange={(e) =>
                      setNewAddress({ ...newAddress, isDefault: e.target.checked })
                    }
                  />{" "}
                  Set as Default
                </label>
              </div>
              <button
                onClick={handleAddAddress}
                className="bg-green-600 hover:bg-green-500 px-4 py-2 rounded-md w-full"
              >
                Save Address
              </button>
            </div>
          )}

          {/* No Address Message */}
          {addresses.length === 0 && (
            <p className="text-sm text-gray-400 mt-4">No address found. Please add one.</p>
          )}
        </div>

        {/* Payment Method Selector */}
        <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-black p-6 rounded-xl shadow-lg border border-purple-700 max-w-2xl mx-auto">
          <h3 className="text-xl font-bold mb-4 text-yellow-400">Choose Payment Method</h3>

          {/* Grid of Methods with Glowing Icons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
            {[
              {
                id: "gpay",
                name: "Google Pay",
                icon: (
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3957/3957180.png "
                    alt="Google Pay"
                    className="w-8 h-8 inline-block"
                  />
                ),
              },
              {
                id: "phonepe",
                name: "PhonePe",
                icon: (
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3957/3957175.png "
                    alt="PhonePe"
                    className="w-8 h-8 inline-block"
                  />
                ),
              },
              {
                id: "upi",
                name: "Other UPI",
                icon: (
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3957/3957176.png "
                    alt="UPI"
                    className="w-8 h-8 inline-block"
                  />
                ),
              },
              {
                id: "card",
                name: "Credit/Debit Card",
                icon: <span className="text-2xl">💳</span>,
              },
              {
                id: "netbanking",
                name: "Net Banking",
                icon: <span className="text-2xl">🏦</span>,
              },
              {
                id: "paypal",
                name: "PayPal",
                icon: (
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3957/3957177.png "
                    alt="PayPal"
                    className="w-8 h-8 inline-block"
                  />
                ),
              },
            ].map((method) => (
              <div
                key={method.id}
                onClick={() => setPaymentMethod(method.id)}
                className={`p-4 rounded-lg flex flex-col items-center justify-center cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                  paymentMethod === method.id
                    ? "bg-gradient-to-r from-yellow-500 to-pink-500 text-black font-bold"
                    : "bg-gray-800 hover:bg-gray-700"
                }`}
              >
                <span className="mb-2">{method.icon}</span>
                <span className="text-sm">{method.name}</span>
              </div>
            ))}
          </div>

          {/* Conditional Fields Based on Selection */}
          {paymentMethod === "upi" && (
            <div className="mb-4">
              <label className="block text-sm mb-1">Enter UPI ID:</label>
              <input
                type="text"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
                placeholder="e.g., user@upi"
                className="w-full px-4 py-2 bg-gray-800 rounded-md text-white"
              />
            </div>
          )}

          {paymentMethod === "card" && (
            <div className="space-y-3 mb-4">
              <div>
                <label className="block text-sm mb-1">Card Number</label>
                <input
                  type="text"
                  value={cardDetails.number}
                  onChange={(e) =>
                    setCardDetails({ ...cardDetails, number: e.target.value })
                  }
                  placeholder="1234 4567 8901 2345"
                  className="w-full px-4 py-2 bg-gray-800 rounded-md text-white"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm mb-1">Expiry</label>
                  <input
                    type="text"
                    value={cardDetails.expiry}
                    onChange={(e) =>
                      setCardDetails({ ...cardDetails, expiry: e.target.value })
                    }
                    placeholder="MM/YY"
                    className="w-full px-4 py-2 bg-gray-800 rounded-md text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">CVV</label>
                  <input
                    type="text"
                    value={cardDetails.cvv}
                    onChange={(e) =>
                      setCardDetails({ ...cardDetails, cvv: e.target.value })
                    }
                    placeholder="123"
                    className="w-full px-4 py-2 bg-gray-800 rounded-md text-white"
                  />
                </div>
              </div>
            </div>
          )}

          {paymentMethod === "netbanking" && (
            <div className="mb-4">
              <label className="block text-sm mb-1">Select Bank:</label>
              <select
                value={bank}
                onChange={(e) => setBank(e.target.value)}
                className="w-full px-4 py-2 bg-gray-800 rounded-md text-white"
              >
                <option value="">-- Select --</option>
                <option value="sbi">State Bank of India</option>
                <option value="hdfc">HDFC Bank</option>
                <option value="icici">ICICI Bank</option>
                <option value="axis">Axis Bank</option>
              </select>
            </div>
          )}

          {["gpay", "phonepe"].includes(paymentMethod) && (
            <div className="mb-4 text-sm text-gray-300 animate-pulse">
              You will be redirected to the app for payment.
            </div>
          )}

          {paymentMethod === "paypal" && (
            <div className="mb-4 text-sm text-gray-300 animate-pulse">
              Redirecting to PayPal securely...
            </div>
          )}

          {/* Proceed Button */}
          <button
            onClick={handlePayment}
            disabled={!selectedAddress || !paymentMethod}
            className={`mt-4 w-full py-3 px-4 rounded-lg font-bold text-black transition-all transform hover:scale-105 focus:outline-none ${
              selectedAddress && paymentMethod
                ? "bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500 hover:from-yellow-500 hover:to-pink-500"
                : "bg-gray-500 cursor-not-allowed"
            }`}
          >
            Pay ₹{(totalAmount / 100).toFixed(2)} Now 💵
          </button>
        </div>

        {/* Back Button */}
        <div className="mt-6 text-center">
          <button
            onClick={() => navigate(-1)}
            className="text-sm text-purple-400 hover:text-purple-300 underline"
          >
            ← Back to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;