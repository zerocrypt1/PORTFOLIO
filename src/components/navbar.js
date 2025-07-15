// Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Menu,
  X,
  Sparkles,
  Brain,
  Code,
  Shield,
  Home
} from 'lucide-react'; // Removed unused icons

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', name: 'Home', icon: Home, link: '/' },
    { id: 'quantumbio', name: 'QUANTUMBIO', icon: Brain, link: '/quantumbio' },
    { id: 'neurochainex', name: 'Neurochainex', icon: Shield, link: '/neurochainex' },
    { id: 'crypthenix', name: 'Crypthenix', icon: Code, link: '/crypthenix' },
    { id: 'neuralink', name: 'NEURALINK', icon: Sparkles, link: '/neuralink' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-lg shadow-xl py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link
            to="/"
            className="flex items-center text-white text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent transform hover:scale-105 transition-transform duration-300"
          >
            🕉️ Shivansh
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.link}
              className="text-white hover:text-orange-400 transition-colors duration-300 flex items-center group relative overflow-hidden"
            >
              <item.icon className="w-5 h-5 mr-2 text-orange-400 group-hover:animate-pulse" />
              {item.name}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-8 h-8" />
            ) : (
              <Menu className="w-8 h-8" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          isMobileMenuOpen ? 'block' : 'hidden'
        } bg-black/90 backdrop-blur-lg pt-4 pb-6`}
      >
        <div className="flex flex-col items-center space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white hover:text-orange-400 transition-colors duration-300 flex items-center text-lg"
            >
              <item.icon className="w-6 h-6 mr-3 text-orange-400" />
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
