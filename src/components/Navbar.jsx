import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Plus, Sparkles } from "lucide-react";
import axios from "axios";

function Navbar() {
  // LOAD IMAGE FROM LOCAL STORAGE
  const [profileImage, setProfileImage] = useState(() => {
    return (
      localStorage.getItem("profileImage") ||
      "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
    );
  });

  // SAVE IMAGE TO LOCAL STORAGE
  useEffect(() => {
    localStorage.setItem("profileImage", profileImage);
  }, [profileImage]);

  // HANDLE IMAGE UPLOAD
  const handleImageUpload = async (event) => {
    const file = event.target.files[0];

    if (!file) return;

    try {
      const formData = new FormData();

      formData.append("image", file);

      const response = await axios.post(
        "https://portfolio-backend-gx7c.onrender.com/upload",
        formData
      );

      // CLOUDINARY IMAGE URL
      const imageUrl = response.data.imageUrl;

      // UPDATE STATE
      setProfileImage(imageUrl);

      alert("Image uploaded successfully!");
    } catch (error) {
      console.log(error);

      alert("Upload failed!");
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0f172a]/80 backdrop-blur-xl shadow-2xl">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
        
        {/* LEFT SIDE */}
        <div className="flex items-center gap-5">
          
          {/* PROFILE IMAGE */}
          <div className="relative group">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 blur-md opacity-70 group-hover:opacity-100 transition duration-300"></div>

            <img
              src={profileImage}
              alt="Profile"
              className="relative w-20 h-20 rounded-full border-4 border-white/20 object-cover shadow-2xl"
            />

            {/* UPLOAD BUTTON */}
            <label className="absolute bottom-0 right-0 bg-gradient-to-r from-cyan-500 to-purple-600 hover:scale-110 transition-all duration-300 w-9 h-9 rounded-full flex items-center justify-center cursor-pointer shadow-lg border border-white/20">
              <Plus size={18} className="text-white" />

              <input
                type="file"
                accept="image/*"
                hidden
                onChange={handleImageUpload}
              />
            </label>
          </div>

          {/* NAME */}
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl lg:text-3xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent tracking-wide">
                AHAD SALIM ABDALLA
              </h1>

              <Sparkles className="text-yellow-400 animate-pulse" size={20} />
            </div>

            <p className="text-gray-300 text-sm lg:text-base font-medium mt-1">
              Bachelor Degree in Data Science
            </p>
          </div>
        </div>

        {/* NAVIGATION */}
        <ul className="hidden md:flex items-center gap-3 text-sm lg:text-base font-semibold">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Skills", path: "/skills" },
            { name: "Projects", path: "/projects" },
            { name: "Contact", path: "/contact" },
          ].map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className="relative px-5 py-2 rounded-full text-gray-200 transition-all duration-300 hover:text-white hover:bg-white/10 border border-transparent hover:border-white/10"
              >
                {item.name}

                <span className="absolute left-1/2 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;