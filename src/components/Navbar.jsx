'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <div className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-6'}`}>
        <div className={`mx-auto px-4 sm:px-6 transition-all duration-300 ${
          scrolled ? 'max-w-5xl' : 'max-w-7xl'
        }`}>
          <div className="relative flex items-center justify-between">
            {/* Background container with rounded edges - initially transparent */}
            <div 
              className={`absolute inset-0 transition-all duration-300 ${
                scrolled 
                  ? 'bg-[#0a1512] rounded-full shadow-lg shadow-teal-900/20' 
                  : 'bg-transparent rounded-none shadow-none'
              }`}
            >
              {/* Glow effect when scrolled */}
              {scrolled && (
                <div className="absolute inset-0 rounded-full bg-teal-500/5 blur-xl -z-10"></div>
              )}
            </div>
            
            {/* Navbar content */}
            <div className="relative z-10 w-full flex items-center justify-between py-3 px-6">
              {/* Logo */}
              <div className="flex items-center">
                <Link href="/" className="flex items-center gap-3">
                  {/* Your Logo Image - larger but still fitting within navbar */}
                  <div className="relative h-12 w-24 md:h-14 md:w-28">
                    {/* Replace '/your-logo.png' with the actual path to your logo */}
                    <Image 
                      src="/Images/logo.png" 
                      alt="Company Logo" 
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                  
                </Link>
              </div>
              
              {/* Navigation Links - Desktop */}
              <div className="hidden md:flex items-center space-x-10">
                <Link href="/" className="text-white transition-colors duration-300 hover:text-teal-400">
                  Home
                </Link>
                <Link href="/about" className="text-white transition-colors duration-300 hover:text-teal-400">
                  About
                </Link>
                <Link href="/services" className="text-white transition-colors duration-300 hover:text-teal-400">
                  Services
                </Link>
                <Link href="/contacts" className="text-white transition-colors duration-300 hover:text-teal-400">
                  Contact
                </Link>
              </div>
              
              {/* CTA Button */}
              <div className="flex items-center">
                <Link 
                  href="https://wa.me/917012151014" 
                  className={`hidden md:inline-flex items-center justify-center gap-2 px-6 py-3 font-medium rounded-lg transition-all duration-300 ${
                    scrolled 
                      ? 'bg-teal-600 text-white hover:bg-teal-500 shadow-md shadow-teal-900/20' 
                      : 'bg-teal-700 text-white hover:bg-teal-600'
                  }`}
                >
                  Contact Now
                </Link>
                
                {/* Mobile menu button */}
                <button 
                  onClick={toggleMobileMenu}
                  className="md:hidden p-2 rounded-md focus:outline-none transition-colors duration-300 text-white hover:text-teal-400"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`fixed inset-0 bg-[#0a1512]/95 backdrop-blur-lg z-40 transform ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`} style={{top: '80px'}}>
        <div className="px-6 pt-5 pb-6 space-y-6">
          <div className="flex flex-col space-y-6">
            <Link href="/" className="text-xl text-white hover:text-teal-400" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
            <Link href="/about" className="text-xl text-white hover:text-teal-400" onClick={() => setMobileMenuOpen(false)}>
              About
            </Link>
            <Link href="/services" className="text-xl text-white hover:text-teal-400" onClick={() => setMobileMenuOpen(false)}>
              Services
            </Link>
            <Link href="/contacts" className="text-xl text-white hover:text-teal-400" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>
            <Link 
              href="https://wa.me/917012151014" 
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-500 transition-colors duration-200 w-full text-center shadow-lg shadow-teal-900/20"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;