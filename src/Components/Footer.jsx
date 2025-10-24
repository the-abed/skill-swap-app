import React from "react";
import { FaTwitter, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-700 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo & Navigation */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <h2 className="text-2xl font-bold text-gray-800">SkillSwap</h2>
          <nav className="flex flex-wrap gap-4 text-gray-600">
            <a href="#" className="hover:text-blue-600 transition">About Us</a>
            <Link to="/contact" className="hover:text-blue-600 transition">Contact</Link>
            <a href="#" className="hover:text-blue-600 transition">Jobs</a>
            <a href="#" className="hover:text-blue-600 transition">Press Kit</a>
          </nav>
        </div>

        {/* Social Links */}
        <div className="flex gap-4">
          <a
            href="https://x.com/AbedazimReal"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gray-100 hover:bg-blue-500 hover:text-white transition"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://github.com/the-abed"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-800 hover:text-white transition"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/mohammad-abed-477100386/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gray-100 hover:bg-blue-700 hover:text-white transition"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="mailto:abedpersonal2024@gmail.com"
            className="p-2 rounded-full bg-gray-100 hover:bg-red-500 hover:text-white transition"
          >
            <FaEnvelope size={20} />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-200 text-center py-4 text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} SkillSwap. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
