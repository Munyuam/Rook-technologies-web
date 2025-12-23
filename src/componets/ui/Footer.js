import React from "react";
import logo from "../../assets/images/rook-tech-4.png";

const Footer = () => {
  return (
    <footer className="bg-white-500 text-gray-700 py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div className="flex items-center gap-3">
           <img
            src={logo}
            alt="Rook Tech Logo"
            className="h-16 w-16 object-contain"
          />
          <h2 className="text-xl font-semibold text-gray-900">
            Rook Technologies
          </h2>
          </div>
          <p className="text-sm text-gray-600 text-center md:text-left max-w-md">
            Start up Software Development Company. Helping small to medium businesses and individuals with
            modern, affordable software solutions.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-sm gap-4 mb-8">
          <ul className="flex gap-6">
            <li className="hover:text-gray-900 cursor-pointer">Website Development</li>
            <li className="hover:text-gray-900 cursor-pointer">Tech Consulting</li>
            <li className="hover:text-gray-900 cursor-pointer">Mini App Development</li>
          </ul>
          <ul className="flex gap-6">
            <li className="hover:text-gray-900 cursor-pointer"><a href="/contact">Get In Touch</a></li>
            <li className="hover:text-gray-900 cursor-pointer"><a href="/about">About</a></li>
          </ul>
        </div>

        <div className="border-t border-gray-300 pt-6 text-center">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Rook Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;