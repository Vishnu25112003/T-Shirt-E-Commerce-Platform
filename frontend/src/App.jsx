import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Components/Navbar";
import UserDashboard from "./Components/UserDashboard";
import Login from "./Login";
import Category from "./Components/Category";
import Footer from "./Components/Footer";
import Signin from "./Signin";
import AboutUs from "./Components/AboutUs"; // Adjust path if needed
import AllProducts from "./Components/AllProducts";
import Cart from "./Components/cart";
import ProductDetails from "./Components/ProductDetails";
import UserPanel from "./Components/UserPanel"; // Added UserPanel
import Payment from "./Components/Payment"; // Added Payment Page

const Layout = ({ children }) => {
  const location = useLocation();
  const hideNavbarOn = ["/login", "/signin", "/payment"]; // Hide Navbar on Login, Signin, and Payment pages

  return (
    <div className="font-sans">
      {!hideNavbarOn.includes(location.pathname) && <Navbar />}
      {children}
    </div>
  );
};

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <UserDashboard />
                <Category />
                <Footer />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/all-products" element={<AllProducts />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/user-panel" element={<UserPanel />} />
          <Route path="/payment" element={<Payment />} /> {/* Added Payment Route */}
        </Routes>
      </Layout>
      <ToastContainer />
    </>
  );
};

export default App;