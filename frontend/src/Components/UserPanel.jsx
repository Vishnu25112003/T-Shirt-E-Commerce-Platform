import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import navigation

const UserPanel = () => {
  const [activeSection, setActiveSection] = useState("account");
  const navigate = useNavigate(); // Initialize navigate function

  // Superhero masks (emoji-style icons)
  const masks = [
    { src: "src/assets/Avatars/1.png", name: "Iron Man" },
    { src: "src/assets/Avatars/3.png", name: "Spider-Man" },
    { src: "src/assets/Avatars/4.png", name: "Batman" },
  ];

  // Selected mask state
  const [selectedMask, setSelectedMask] = useState(localStorage.getItem("selectedAvatar") || masks[0].src);

  const handleAvatarSelect = (maskSrc) => {
    setSelectedMask(maskSrc);
    localStorage.setItem("selectedAvatar", maskSrc); // Save to localStorage
  };

  const handleLogout = () => {
    localStorage.clear(); // Clear user data
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="flex h-screen mt-18">
      {/* Sidebar Navigation */}
      <aside className="w-1/4 bg-black text-white p-6">
        <h2 className="text-xl font-bold mb-4">User Settings</h2>
        <ul className="space-y-3">
          <li>
            <button
              className={`w-full text-left p-2 rounded-lg transition ${activeSection === "account" ? "bg-gray-600" : "hover:bg-gray-700"}`}
              onClick={() => setActiveSection("account")}
            >
              Account
            </button>
          </li>
          <li>
            <button
              className={`w-full text-left p-2 rounded-lg transition ${activeSection === "privacy" ? "bg-gray-600" : "hover:bg-gray-700"}`}
              onClick={() => setActiveSection("privacy")}
            >
              Privacy
            </button>
          </li>
          <li>
            <button
              className={`w-full text-left p-2 rounded-lg transition ${activeSection === "support" ? "bg-gray-600" : "hover:bg-gray-700"}`}
              onClick={() => setActiveSection("support")}
            >
              Support
            </button>
          </li>
        </ul>
        <button
          onClick={handleLogout}
          className="mt-4 w-full bg-red-500 text-white p-2 rounded-lg transition hover:bg-red-700"
        >
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="w-3/4 p-6 bg-black">
        {activeSection === "account" && (
          <div>
            <h2 className="text-2xl text-white font-bold mb-4">Account Information</h2>
            <form className="space-y-4 text-white">
              <input type="text" placeholder="Full Name" className="w-full p-2 border rounded" />
              <input type="email" placeholder="Email Address" className="w-full p-2 border rounded" />

              {/* Avatar Selector */}
              <div className="mt-4 flex flex-wrap gap-3 justify-center">
                {masks.map((mask, index) => (
                  <button
                    key={index}
                    onClick={() => handleAvatarSelect(mask.src)}
                    className={`p-2 rounded-full transition-transform flex items-center justify-center ${
                      selectedMask === mask.src ? "border-4 border-blue-500" : "border-2 border-gray-500"
                    }`}
                  >
                    <img src={mask.src} alt={mask.name} className="w-12 h-12 rounded-full" />
                  </button>
                ))}
              </div>

              <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">Update Information</button>
            </form>
          </div>
        )}
      </main>
    </div>
  );
};

export default UserPanel;