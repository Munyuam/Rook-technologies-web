import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/rook-tech-4.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Blogs", path: "/blogs" },
    { name: "Downloads", path: "/downloads" },
  ];

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <a href="/" className="flex items-center gap-2">
            <img
              src={logo}
              alt="Rook Tech Logo"
              className="h-10 w-10 object-contain"
            />
            <span className="font-bold text-lg">Rook Technologies</span>
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-gray-700 hover:text-orange-500 font-medium transition"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/services"
            className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition flex items-center gap-2"
          >
            <i className="bx bx-rocket text-xl"></i> Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 hover:text-orange-500 focus:outline-none"
          >
            <i className={`bx ${isOpen ? "bx-x" : "bx-menu"} text-3xl`}></i>
          </button>
        </div>
      </div>
    </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-6 space-y-4 shadow-lg absolute w-full left-0 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block text-gray-700 hover:text-orange-500 font-medium transition py-2"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/services"
            onClick={() => setIsOpen(false)}
            className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition flex items-center gap-2"
          >
            <i className="bx bx-rocket text-xl"></i> Get Started
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
