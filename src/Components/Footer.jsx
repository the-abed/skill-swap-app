import React from "react";
import { FaTwitter, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router";
import logo from "../assets/SkillSwapLogo.png"


const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-500 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo & Navigation */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-2">
            <img src={logo} alt="logo" className="w-12"/>
            <h2 className=" text-2xl font-bold text-blue-600 dark:text-blue-400"> SkillSwap</h2>
          </div>
          <nav className="flex flex-wrap gap-4 text-gray-600 dark:text-gray-400">
            <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"></a>
            <Link to="/about-us" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About Us</Link>
            <Link to="/contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</Link>
            <Link to="/privacy-policy" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Privacy Policy</Link>

          </nav>
        </div>

        {/* Social Links */}
        <div className="flex gap-4">
          <a
            href="https://x.com/AbedazimReal"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-500 hover:text-white transition-colors"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://github.com/the-abed"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-900 hover:text-white transition-colors"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/mohammad-abed-477100386/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-700 hover:text-white transition-colors"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="mailto:abedpersonal2024@gmail.com"
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-red-500 hover:text-white transition-colors"
          >
            <FaEnvelope size={20} />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-200 dark:border-gray-700 text-center py-4 text-gray-500 dark:text-gray-400 text-sm transition-colors duration-500">
        &copy; {new Date().getFullYear()} SkillSwap. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
