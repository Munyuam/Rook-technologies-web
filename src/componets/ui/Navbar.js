import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/rook-tech-4.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="w-full flex items-center justify-between px-6 py-4 shadow-md bg-white">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <a href="/" className="flex flex-row items-center gap-2">
            <img
              src={logo}
              alt="Rook Tech Logo"
              className="h-10 w-10 object-contain"
            />
            <span className="font-bold text-lg">ROOK TECHNOLOGIES</span>
          </a>
        </div>

        {/* Desktop Menu (normal) */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/services" className="flex items-center gap-2 hover:text-orange-600 transition">
            <i className="bx bx-briefcase-alt-2 text-xl"></i> Services
          </Link>
          <Link to="/about" className="flex items-center gap-2 hover:text-orange-600 transition">
            <i className="bx bx-info-circle text-xl"></i> About
          </Link>
          <Link to="/contact" className="flex items-center gap-2 hover:text-orange-600 transition">
            <i className="bx bx-phone text-xl"></i> Contact
          </Link>

          <Link to="/blogs" className="flex items-center gap-2 hover:text-orange-600 transition">
            <i class='bx  bx-newspaper text-xl'></i>  Blogs
          </Link>


          <Link
            to="/services"
            className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition flex items-center gap-2"
          >
            <i className="bx bx-rocket text-xl"></i> Get Started
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <i className="bx bx-x text-3xl"></i>
          ) : (
            <i className="bx bx-menu text-3xl"></i>
          )}
        </button>
      </nav>

      {/* Sidebar for Mobile (only phones) */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <span className="font-bold text-lg">Menu</span>
          <button onClick={() => setIsOpen(false)}>
            <i className="bx bx-x text-2xl"></i>
          </button>
        </div>

        {/* Sidebar Links */}
        <div className="flex flex-col space-y-6 px-6 py-6">
          <Link
            to="/services"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 hover:text-orange-600 transition"
          >
            <i className="bx bx-briefcase-alt-2 text-xl"></i> Services
          </Link>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 hover:text-orange-600 transition"
          >
            <i className="bx bx-info-circle text-xl"></i> About
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 hover:text-orange-600 transition"
          >
            <i className="bx bx-phone text-xl"></i> Contact
          </Link>
          <Link
            to="/services"
            onClick={() => setIsOpen(false)}
            className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition flex items-center gap-2"
          >
            <i className="bx bx-rocket text-xl"></i> Get Started
          </Link>
        </div>
      </aside>
    </>
  );
}

export default Navbar;
