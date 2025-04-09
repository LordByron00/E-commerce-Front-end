import React from "react";
import { Heart, ShoppingBag, User, Search } from "lucide-react";

const Navbar: React.FC = () => {
  return (
    <header className="bg-gray-100 w-full py-3 px-4 md:px-8 flex items-center">
      {/* Logo Container */}
      <div className="p-3 flex items-center">
        <img src="/images/logotemp.png" alt="Logo" className="h-8" />
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex space-x-6 ml-5 text-gray-700 font-medium">
        <a href="#shop" className="hover:text-gray-900 transition-colors">Shop</a>
        <a href="#about" className="hover:text-gray-900 transition-colors">About</a>
        <a href="#contact" className="hover:text-gray-900 transition-colors">Contact Us</a>
      </nav>

      {/* Search and Icons */}
      <div className="flex items-center space-x-4 ml-auto">
        {/* Search Bar */}
        <div className="hidden md:flex items-center bg-gray-300 rounded-full px-4 py-2 w-60 lg:w-80">
          <Search className="text-gray-500" size={18} />
          <input
            type="text"
            placeholder="Search Product"
            className="ml-2 text-sm bg-transparent focus:outline-none w-full"
          />
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <Heart size={22} className="text-gray-700 hover:text-gray-900" />
          <ShoppingBag size={22} className="text-gray-700 hover:text-gray-900" />
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px h-6 bg-gray-400 mx-2"></div>

        {/* Extra Icon Placeholder */}
        <div className="bg-gray-300 rounded-full p-2">
          <User size={22} className="text-gray-700" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;