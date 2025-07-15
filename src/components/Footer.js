import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-12 relative z-10 border-t border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Shloka Section */}
        <div className="mb-10">
          <p className="text-base sm:text-lg italic text-amber-100 mb-4 leading-relaxed font-sans">
            "विद्या ददाति विनयं विनयाद् याति पात्रताम्।"
          </p>
          <p className="text-sm sm:text-base text-white/80 max-w-2xl mx-auto font-sans">
            Knowledge bestows humility; from humility comes worthiness. In the digital realm, continuous learning and humble innovation pave the path to cyber excellence.
          </p>
          <div className="h-0.5 bg-gradient-to-r from-orange-500 to-red-600 w-24 mx-auto mt-6 rounded-full opacity-70"></div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-10">
          <a
            href="https://github.com/yourgithub"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-orange-500 transition-colors duration-300 transform hover:scale-125"
            aria-label="GitHub"
          >
            <Github className="w-7 h-7 sm:w-8 sm:h-8" />
          </a>
          <a
            href="https://www.linkedin.com/in/shivansh-ninja"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-orange-500 transition-colors duration-300 transform hover:scale-125"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-7 h-7 sm:w-8 sm:h-8" />
          </a>
          <a
            href="https://x.com/Shivans7940"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-orange-500 transition-colors duration-300 transform hover:scale-125"
            aria-label="Twitter"
          >
            <Twitter className="w-7 h-7 sm:w-8 sm:h-8" />
          </a>
          <a
            href="mailto:shivansh@glocybs.com"
            className="text-white hover:text-orange-500 transition-colors duration-300 transform hover:scale-125"
            aria-label="Email"
          >
            <Mail className="w-7 h-7 sm:w-8 sm:h-8" />
          </a>
        </div>

        {/* Copyright and Company Info */}
        <div className="text-sm text-amber-200 opacity-80 font-sans">
          <p>&copy; {new Date().getFullYear()} Shivansh Mishra. All rights reserved.</p>
          <p className="mt-2">Powered by <a href="https://glocybs.com" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-red-500 font-semibold transition-colors duration-300">Glocybs.com</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;