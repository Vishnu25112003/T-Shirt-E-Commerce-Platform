import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import UserDashboard from "./Components/UserDashboard";
import Login from "./Login";
import Category from "./Components/Category";
import Footer from "./Components/Footer";
import Signin from "./Signin";
import AboutUs from "./AboutUs"; // adjust path if needed
import AllProducts from "./components/AllProducts";

const Layout = ({ children }) => {
  const location = useLocation();
  const hideNavbarOn = ["/login", "/signin"]; // Hide Navbar on both Login and Signin pages

  return (
    <div className="font-sans">
      {!hideNavbarOn.includes(location.pathname) && <Navbar />}
      {children}
    </div>
  );
};

const App = () => {
  return (
    <Router>
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
          <Route path="/all-products" element={<AllProducts />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
