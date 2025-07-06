
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
       
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} Nambi Lucia. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="https://github.com/NambiLucia/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 transition"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/lucia-nambi-575bba209/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 transition"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 transition"
          >
            <FaTwitter size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

