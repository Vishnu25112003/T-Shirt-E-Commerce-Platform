import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import {
  AiFillApple,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { toast } from "react-toastify";

const Signin = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match!", {
        position: "top-center",
        autoClose: 2000,
        theme: "colored",
      });
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const contentType = response.headers.get("content-type");

      if (!response.ok || !contentType?.includes("application/json")) {
        throw new Error("Invalid server response");
      }

      const data = await response.json();

      toast.success("🎉 Signup Successful!", {
        position: "top-center",
        autoClose: 2500,
        theme: "colored",
      });

      setTimeout(() => {
        navigate(location.state?.from || "/login");
      }, 2600);
    } catch (error) {
      console.error("Signup error:", error);
      toast.error("🚫 Signup failed. Please try again.", {
        position: "top-center",
        autoClose: 2500,
        theme: "colored",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-1">
      {/* 🌌 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source
          src="https://res.cloudinary.com/dypbvh8u8/video/upload/v1744820053/batman-in-night-city.3840x2160_vhtft3.mp4"
          type="video/mp4"
        />
      </video>

      <div className="w-full max-w-md z-10 transform transition-all duration-300 hover:scale-[1.01]">
        <div className="bg-white/5  hover:bg-black/60 hover:backdrop-blur-lg border border-white/30 rounded-2xl px-8 py-6 shadow-2xl space-y-6 ring-1 ring-white/10 hover:ring-white/60 transition-all duration-300">

          <div className="text-center space-y-2">
            <h1 className="text-3xl text-white font-bold">
              Signup for TeeGalaxy
            </h1>
            <p className="text-pink-500 text-sm font-medium">
              Create Your Account
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-white mb-1">
                Full Name
              </label>
              <input
               type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-slate-300  text-white focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
                required
                />

            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-1">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-slate-300  text-white focus:ring-2 focus:ring-blue-500"
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full relative">
                <label className="block text-sm font-medium text-white mb-1">
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-slate-300  text-white focus:ring-2 focus:ring-blue-500"
                  placeholder="**********"
                  required
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-9 cursor-pointer text-xl text-gray-500"
                >
                  {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </span>
              </div>

              <div className="w-full relative">
                <label className="block text-sm font-medium text-white mb-1">
                  Confirm Password
                </label>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-slate-300  text-white focus:ring-2 focus:ring-blue-500"
                  placeholder="**********"
                  required
                />
                <span
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-9 cursor-pointer text-xl text-gray-500"
                >
                  {showConfirmPassword ? (
                    <AiOutlineEyeInvisible />
                  ) : (
                    <AiOutlineEye />
                  )}
                </span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-pink-500 hover:bg-pink-700 text-white py-2.5 rounded-lg font-medium transition-all transform hover:scale-[1.01] active:scale-95"
            >
              Sign Up
            </button>
          </form>

          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-slate-300"></div>
            <span className="mx-4 text-white text-xs tracking-wider font-semibold opacity-70">
              OR CONTINUE WITH
            </span>
            <div className="flex-grow border-t border-slate-300"></div>
          </div>

          <div className="flex gap-4">
            <button className="flex items-center justify-center gap-2 w-full py-2.5 border border-white/30 bg-white/20 text-white rounded-lg font-medium hover:bg-white/30 transition-all transform hover:scale-[1.01]">
              <FcGoogle className="text-xl" /> Google
            </button>
            <button className="flex items-center justify-center gap-2 w-full py-2.5 border border-white/30 bg-white/20 text-white rounded-lg font-medium hover:bg-white/30 transition-all transform hover:scale-[1.01]">
              <AiFillApple className="text-xl" /> Apple
            </button>
          </div>

          <p className="text-center text-sm text-white">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-pink-500 hover:underline font-medium"
            >
              Login
            </Link>
          </p>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-slate-400 animate-pulse">
            Copyrights, 2025 all rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
