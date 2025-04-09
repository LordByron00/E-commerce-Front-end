import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-200 w-full text-gray-800 mt-auto">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-start">
        {/* Company Info */}
        <div className="flex items-start space-x-4">
          {/* Circular Image */}
          <div className="w-16 h-16 bg-gray-400 rounded-full"></div>
          <div>
            <h2 className="text-xl font-bold mb-4 py-4">COMPANY NAME</h2>
            <p className="text-sm mb-2 -ml-25 mt-8">Follow Us On</p> {/* Added -ml-2 to move it left */}
            <div className="flex space-x-4 -ml-25"> {/* Added -ml-2 to move icons left */}
                <Facebook className="w-6 h-6 text-gray-600 hover:text-gray-800 cursor-pointer" />
                <Twitter className="w-6 h-6 text-gray-600 hover:text-gray-800 cursor-pointer" />
                <Instagram className="w-6 h-6 text-gray-600 hover:text-gray-800 cursor-pointer" />
                <Linkedin className="w-6 h-6 text-gray-600 hover:text-gray-800 cursor-pointer" />
            </div>
          </div>
        </div>
        

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8 md:mt-0">
          {/* Categories */}
          <div>
            <h3 className="text-sm font-semibold mb-4">CATEGORIES</h3>
            <ul className="space-y-2 text-xs">
              <li>Laptop</li>
              <li>Phone</li>
              <li>Accessories</li>
              <li>Technology</li>
            </ul>
          </div>

          {/* Orders */}
          <div>
            <h3 className="text-sm font-semibold mb-4">ORDERS</h3>
            <ul className="space-y-2 text-xs">
              <li>Orders and Delivery</li>
              <li>Returns and Refunds</li>
              <li>Payment and Pricing</li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-sm font-semibold mb-4">ABOUT</h3>
            <ul className="space-y-2 text-xs">
              <li>About Us</li>
              <li>Blog</li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-sm font-semibold mb-4">HELP</h3>
            <ul className="space-y-2 text-xs">
              <li>FAQs</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-800 text-white text-xs py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2025 Company Name</p>
          <p>Website made with love by Power Puff Girls</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;