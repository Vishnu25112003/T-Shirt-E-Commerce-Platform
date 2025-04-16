import React from 'react';

const CartPage = () => {
  return (
    <div className="p-6 md:p-12 bg-white text-black min-h-screen">
      {/* Heading */}
      <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
        🛍️ My Cart
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Cart Items */}
        <div className="md:col-span-2 space-y-6">
          <div className="flex items-start gap-4 border-b pb-6">
            <img
              src="https://your-cloudinary-url-here.jpg"
              alt="Product"
              className="w-24 h-32 object-cover"
            />
            <div className="flex-1">
              <h3 className="font-semibold">Plaid Shirt & Buttoned Skirt Set</h3>
              <p className="text-sm text-gray-600">Color: OLIVE/MULTI</p>
              <p className="text-sm text-gray-600">Size: S</p>
              <p className="text-sm text-green-600 mt-1">In Stock</p>

              <div className="flex items-center justify-between mt-4">
                <span className="font-bold">$39.99</span>
                <input
                  type="number"
                  min="1"
                  defaultValue="1"
                  className="border border-gray-300 w-16 px-2 py-1 rounded"
                />
                <span>$39.99</span>
              </div>

              <div className="mt-4 text-sm text-blue-500 flex gap-4">
                <button>Edit</button>
                <button>Remove</button>
                <button>Move to Wishlist</button>
                <button>Save for Later</button>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Section */}
        <div className="bg-gray-100 p-6 rounded-lg space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">ENTER PROMO CODE</label>
            <div className="flex">
              <input
                type="text"
                placeholder="Promo Code"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-l"
              />
              <button className="bg-black text-white px-4 rounded-r">Submit</button>
            </div>
          </div>

          <div className="border-t pt-4 space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Shipping cost</span>
              <span>TBD</span>
            </div>
            <div className="flex justify-between">
              <span>Discount</span>
              <span>-$0</span>
            </div>
            <div className="flex justify-between">
              <span>Tax</span>
              <span>TBD</span>
            </div>
            <div className="flex justify-between font-semibold text-lg border-t pt-2">
              <span>Estimated Total</span>
              <span>$39.99</span>
            </div>
          </div>

          <p className="text-red-500 text-sm">
            You're <strong>$10.01</strong> away from free shipping!
          </p>

          <button className="w-full bg-yellow-400 text-black font-bold py-3 rounded hover:bg-yellow-300 transition">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
