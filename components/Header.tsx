
import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SITE_CONFIG } from '../config/siteConfig';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="text-2xl font-bold text-brand-brown hover:text-brand-tan transition-colors">
            {SITE_CONFIG.navigation.logo}
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            {SITE_CONFIG.navigation.menu.map((item) => (
              <NavLink
                key={item.label}
                to={item.url}
                className={({ isActive }) =>
                  `text-lg font-medium transition-colors ${isActive ? 'text-brand-tan' : 'text-brand-brown hover:text-brand-tan'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="hidden md:block">
            <Link to={SITE_CONFIG.navigation.cta.url} className="bg-brand-tan text-white px-6 py-2 rounded-full font-bold hover:bg-brand-brown transition-colors">
              {SITE_CONFIG.navigation.cta.label}
            </Link>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-brand-brown focus:outline-none">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white shadow-lg`}>
        <nav className="flex flex-col items-center space-y-4 py-6">
          {SITE_CONFIG.navigation.menu.map((item) => (
            <NavLink
              key={item.label}
              to={item.url}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `text-lg font-medium transition-colors ${isActive ? 'text-brand-tan' : 'text-brand-brown hover:text-brand-tan'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link to={SITE_CONFIG.navigation.cta.url} onClick={() => setIsOpen(false)} className="bg-brand-tan text-white px-8 py-3 rounded-full font-bold hover:bg-brand-brown transition-colors mt-4">
            {SITE_CONFIG.navigation.cta.label}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
