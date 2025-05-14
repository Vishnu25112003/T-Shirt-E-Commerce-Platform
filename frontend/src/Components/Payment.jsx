"use client";

import { useState, useEffect } from "react";
import Navbar from "./Navbar"; // Ensure Navbar is imported
import { FaCreditCard, FaGoogle, FaMoneyBillWave, FaPlus } from "react-icons/fa";

const Payment = () => {
  const [cartTotal, setCartTotal] = useState(0);
  const [selectedPayment, setSelectedPayment] = useState("");
  const [address, setAddress] = useState("123, ABC Street, XYZ City, India");
  const [newAddress, setNewAddress] = useState("");
  const [deliveryInstructions, setDeliveryInstructions] = useState("");
  const [showUPIOptions, setShowUPIOptions] = useState(false);

  useEffect(() => {
    // Fetch cart data from localStorage and calculate total
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const total = savedCart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);
    setCartTotal(total.toFixed(2));
  }, []);

  const paymentMethods = [
    { id: "credit", name: "Credit / Debit Card", icon: <FaCreditCard /> },
    { id: "upi", name: "UPI Apps (Google Pay, PhonePe, Paytm)", icon: <FaGoogle /> },
    { id: "cod", name: "Cash on Delivery", icon: <FaMoneyBillWave /> },
  ];

  const upiOptions = ["Google Pay", "PhonePe", "Paytm", "Amazon Pay", "BHIM UPI"];

  const handleAddressChange = () => {
    if (newAddress.trim()) {
      setAddress(newAddress);
      setNewAddress("");
    }
  };

  return (
    <>
      <Navbar /> {/* Navbar included */}
      <div className="min-h-screen mt-19 bg-gray-500 text-white p-6 flex flex-col">
        
        {/* Address Section */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold">Shipping Address</h2>
          <p className="p-3 bg-gray-700 rounded-md">{address}</p>

          <h3 className="text-lg font-semibold">Add a New Address</h3>
          <input
            type="text"
            placeholder="Enter new address"
            value={newAddress}
            onChange={(e) => setNewAddress(e.target.value)}
            className="w-full p-2 border rounded-md bg-gray-600 text-white mt-2"
          />
          <button
            onClick={handleAddressChange}
            className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md flex items-center gap-2"
          >
            <FaPlus /> Add Address
          </button>
        </div>

        {/* Delivery Instructions */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold">Add Delivery Instructions</h3>
          <textarea
            placeholder="Provide special instructions..."
            value={deliveryInstructions}
            onChange={(e) => setDeliveryInstructions(e.target.value)}
            className="w-full p-2 border rounded-md bg-gray-600 text-white mt-2"
          />
        </div>

        {/* Payment Method Section */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold">Choose Payment Method</h3>
          <div className="space-y-3">
            {paymentMethods.map((method) => (
              <label key={method.id} className="block p-3 border rounded-md bg-gray-700 flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  value={method.id}
                  checked={selectedPayment === method.id}
                  onChange={(e) => {
                    setSelectedPayment(e.target.value);
                    setShowUPIOptions(e.target.value === "upi");
                  }}
                />
                {method.icon} {method.name}
              </label>
            ))}
          </div>

          {/* Show UPI Options If Selected */}
          {showUPIOptions && (
            <div className="mt-4 space-y-2">
              <h3 className="text-md font-semibold">Select UPI App</h3>
              {upiOptions.map((app, index) => (
                <label key={index} className="block p-2 border rounded-md bg-gray-600 cursor-pointer">
                  <input type="radio" name="upi" value={app} /> {app}
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Order Summary */}
        <div className="mt-6 text-center">
          <h2 className="text-2xl font-bold">Order Total</h2>
          <p className="text-xl font-semibold mt-2">₹{cartTotal}</p>
          <button className="mt-4 px-6 py-3 bg-pink-500 text-white rounded-md w-full">
            Confirm & Place Order
          </button>
        </div>
      </div>
    </>
  );
};

export default Payment;