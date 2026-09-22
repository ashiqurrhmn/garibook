import React, { useState } from 'react';
import { FaLanguage } from 'react-icons/fa6';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full relative bg-white">
      {/* Top right language button */}
      <div className="hidden lg:flex absolute top-0 right-0 p-2 md:p-4">
        <button className="bg-garibook-blue text-white text-[14px] font-medium px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors">
          <FaLanguage size={22} className="opacity-90" /> English
        </button>
      </div>

      {/* Main Navbar */}
      <nav className="max-w-[1440px] mx-auto pt-4 md:pt-6 lg:pt-12 pb-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <img src="/Assets/logo.png" alt="Garibook Logo" className="h-14 md:h-14 lg:h-14 w-auto object-contain" />
            <span className="text-3xl md:text-[28px] text-gray-900 tracking-tight">
              garibook
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-4 lg:space-x-1 font-medium">
            {['About Us', 'Earn With Garibook', 'Garibook Business', 'Garibook Club', 'Campaign', 'Blogs'].map((item) => (
              <a key={item} href="#" className="relative text-[#121212] text-[20px] px-2 py-1 hover:text-garibook-blue transition-colors group">
                {item}
                <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-garibook-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a>
            ))}
            
            <button className="bg-garibook-blue text-white ml-4 px-6 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors shadow-sm">
              login
            </button>
          </div>

          {/* Mobile menu & login button */}
          <div className="lg:hidden flex items-center gap-3">
            <button className="bg-[#1252FF] text-white px-4 py-[5px] rounded-md font-medium text-[15px] hover:bg-blue-700 transition-colors shadow-sm tracking-wide">
              login
            </button>
            <button onClick={() => setIsMobileMenuOpen(true)} className="text-gray-700 hover:text-[#0E52FF] focus:outline-none">
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-[#0E52FF] z-[100] transform transition-transform duration-300 flex flex-col ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        {/* Top Header of Menu */}
        <div className="flex justify-end items-center p-6 pt-10 gap-6">
          <button className="text-white text-[16px] font-medium flex items-center gap-2">
            <FaLanguage size={20} /> English
          </button>
          <button onClick={() => setIsMobileMenuOpen(false)} className="text-white focus:outline-none">
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Links */}
        <div className="flex-1 flex flex-col items-center pt-8 gap-6 relative z-10">
          {['About Us', 'Earn With Garibook', 'Garibook Business', 'Garibook Club', 'Campaign', 'Blogs'].map((item) => (
            <a key={item} href="#" className="text-white text-[16px] font-medium hover:text-gray-200 transition-colors">
              {item}
            </a>
          ))}
        </div>

        {/* Decorative graphic at bottom right */}
        <div className="absolute -bottom-15 -right-22 pointer-events-none w-[240px] h-[240px] opacity-100">
          <svg viewBox="0 0 100 120" className="w-full h-full">
            {/* The white road */}
            <path 
              d="M 50 85 A 35 35 0 1 1 85 50 C 85 80, 95 100, 110 120" 
              fill="none" 
              stroke="white" 
              strokeWidth="32" 
              strokeLinecap="round" 
            />
            {/* The blue dashes */}
            <path 
              d="M 50 85 A 35 35 0 1 1 85 50 C 85 80, 95 100, 110 120" 
              fill="none" 
              stroke="#0E52FF" 
              strokeWidth="4" 
              strokeDasharray="12 12" 
              strokeLinecap="round" 
            />
            {/* The blue inner map pin (acts as a precise cutout) */}
            <path 
              d="M 50 87 C 34 75, 28 60, 28 50 A 22 22 0 1 1 72 50 C 72 60, 66 75, 50 87 Z" 
              fill="#0E52FF" 
            />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
