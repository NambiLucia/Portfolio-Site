import React from 'react';
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-700 text-white py-4 border-">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
       
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <p className="mb-2">📞 +256 781 557 679</p>
          <p className="mb-2">📍 Kampala, Uganda</p>
          
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#hero" className="hover:text-teal-400 transition">Home</a></li>
            <li><a href="#hero" className="hover:text-teal-400 transition">About</a></li>
            <li><a href="#projects" className="hover:text-teal-400 transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-teal-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Follow Me */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
          <div className="flex space-x-4">
            <a
              href="https://github.com/NambiLucia/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400 transition"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/lucia-nambi-575bba209/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400 transition"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://medium.com/@nambilucia"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400 transition"
            >
              <FaMedium size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Nambi Lucia. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
