import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white font-poppins shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href='#hero'><div className="flex-shrink-0 font-poppins text-2xl font-bold text-teal-400">LN</div></a>

          {/* Nav Bar */}
          <div className="hidden md:flex space-x-6 text-lg">
            <a href="#hero" className="hover:text-teal-400 transition">About</a>
            <a href="#projects" className="hover:text-teal-400 transition">Projects</a>
            <a href="#skills"  className="hover:text-teal-400 transition">Skills</a>
            <a href="#contact" className="hover:text-teal-400 transition">Contact</a>
          </div>

          {/* Download CV Button */}
          <div className="hidden md:block">
            <a
              href="/CV.pdf"
              download
              className="bg-teal-500 hover:bg-teal-600 text-white 
              px-4 py-2 rounded-md text-sm font-semibold transition"
            >
              Download CV
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md hover:text-teal-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-400"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon */}
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800">
            <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium hover:text-teal-400 transition">
              About
            </a>
            <a href="#projects" className="block px-3 py-2 rounded-md text-base font-medium hover:text-teal-400 transition">
              Projects
            </a>
            <a href="#skills" className="block px-3 py-2 rounded-md text-base font-medium hover:text-teal-400 transition">
              Skills
            </a>
            <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium hover:text-teal-400 transition">
              Contact
            </a>
            <a
              href="/CV.pdf"
              download
              className="block px-3 py-2 mt-1 rounded-md text-base font-semibold bg-teal-500 hover:bg-teal-600 text-white text-center"
            >
              Download CV
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
