import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AiFillApple } from 'react-icons/ai';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Successfully Logged In!', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

    setTimeout(() => {
      navigate(location.state?.from || '/');
    }, 2200);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center p-4 overflow-hidden">
      
      {/* 🌌 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="https://res.cloudinary.com/dypbvh8u8/video/upload/v1744808532/spider-man-2.3840x2160_ex4tyh.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🎨 Overlay tint without blur */}
      <div className="absolute inset-0 bg-black/40 z-0" />


      {/* 💫 Glassmorphic Login Card */}
      <div className="w-full max-w-md z-10">
        <div className="bg-white/10 backdrop-blur-lg border border-pink-500 rounded-2xl p-8 shadow-2xl space-y-6 animate-fade-in-up
        transition-all duration-300 hover:scale-[1.01]
        ring-2 ring-white/40 hover:ring-white/80">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-white drop-shadow-lg animate-slide-in-top">Welcome! to  <br /> </h1> <h1 className='text-pink-500 text-4xl font-bold drop-shadow-lg animate-slide-in-top' >TeeGalaxy</h1> 
            <p className="text-slate-200 text-sm font-medium">Login Here</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-200 mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-white/30 bg-white/20 text-white placeholder-white/70 
                focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-200 mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-white/30 bg-white/20 text-white placeholder-white/70 
                focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="**********"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-pink-500 hover:bg-pink-700 text-white py-2.5 rounded-lg font-medium 
              transition-all transform hover:scale-[1.01] active:scale-95 shadow-lg"
            >
              Login
            </button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/30"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white/10 text-white">OR CONTINUE WITH</span>
            </div>
          </div>

          <div className="flex gap-4">
            <button className="flex items-center justify-center gap-2 w-full py-2.5 border border-white/30 bg-white/20 text-white 
            rounded-lg font-medium hover:bg-white/30 transition-all transform hover:scale-[1.01]">
              <FcGoogle className="text-xl" /> Google
            </button>
            <button className="flex items-center justify-center gap-2 w-full py-2.5 border border-white/30 bg-white/20 text-white 
            rounded-lg font-medium hover:bg-white/30 transition-all transform hover:scale-[1.01]">
              <AiFillApple className="text-xl" /> Apple
            </button>
          </div>

          <p className="text-center text-sm text-white">
            Don't have an account?{' '}
            <Link to="/signin" className="text-pink-500 hover:underline font-medium">Signin</Link>
          </p>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-white/70 animate-pulse">© 2025 All rights reserved.</p>
        </div>
      </div>
      
    </div>
    
  );
};

export default Login;
