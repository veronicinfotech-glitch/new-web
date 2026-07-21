import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import lolo1 from "../images/lolo1.png";

const SharedNavbar = () => {
  const location = useLocation();
  const [visible, setVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navbarScrolled, setNavbarScrolled] = useState(false);
  const navbarRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        !event.target.closest('.menu-button')
      ) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Handle scroll for navbar
  useEffect(() => {
    let hideTimeout;
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (hideTimeout) clearTimeout(hideTimeout);

      if (currentScrollY > 50) {
        setNavbarScrolled(true);
        if (currentScrollY > lastScrollY) {
          setVisible(false); // Hide on scroll down
        } else {
          setVisible(true); // Show on scroll up
          hideTimeout = setTimeout(() => setVisible(false), 3000); // Hide after 3s
        }
      } else {
        setNavbarScrolled(false);
        setVisible(true);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (hideTimeout) clearTimeout(hideTimeout);
    };
  }, []);

  return (
    <nav
      ref={navbarRef}
      className={`fixed left-0 right-0 z-50 transition-all duration-500 ease-out px-4 sm:px-6 lg:px-8 pt-2 sm:pt-4 ${visible ? 'translate-y-0 opacity-100 scale-100' : '-translate-y-full opacity-0 scale-95'
        }`}
    >
      <div className={`max-w-7xl mx-auto transition-all duration-500 ease-in-out ${navbarScrolled
          ? 'bg-white/95 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.15)] border border-gray-200/80 rounded-2xl sm:rounded-full'
          : 'bg-[#0B0F14]/90 backdrop-blur-2xl border border-white/15 shadow-xl rounded-2xl sm:rounded-full'
        }`}>
        <div className="flex items-center justify-between h-12 sm:h-14 px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center group z-50">
            <div className="flex items-center justify-center hover:scale-105 transition-transform duration-300">
              <img src={lolo1} alt="logo" className="w-10 h-10 md:w-12 md:h-12 rounded-lg object-contain" />
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {[
              { name: 'Home', to: '/' },
              { name: 'About', to: '/about' },
              { name: 'Services', to: '/services' },
              { name: 'Packages', to: '/packages' },
              { name: 'Products', to: '/products' },
              { name: 'Contact', to: '/contact' }
            ].map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className={`relative px-2 py-1 text-sm lg:text-base font-medium transition-all duration-500 ease-in-out whitespace-nowrap ${location.pathname === item.to
                    ? navbarScrolled ? 'text-[#0B0F14] font-bold' : 'text-white font-bold'
                    : navbarScrolled
                      ? 'text-[#0B0F14]/75 hover:text-[#0B0F14]'
                      : 'text-white/80 hover:text-white'
                  }`}
              >
                {item.name}
                {location.pathname === item.to && (
                  <div
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 transition-all duration-500 ease-in-out ${navbarScrolled ? 'bg-[#0B0F14]' : 'bg-white'
                      }`}
                  />
                )}
              </Link>
            ))}
          </div>

          <Link to="/book-demo" className="hidden md:block">
            <button
              className={`flex items-center gap-2 px-5 lg:px-6 py-2 rounded-full font-medium text-sm lg:text-base shadow-lg transition-all duration-500 ease-in-out hover:scale-105 ${navbarScrolled
                  ? 'bg-[#0B0F14] text-white shadow-[#0B0F14]/20 hover:bg-[#1E2A39]'
                  : 'bg-white text-[#0B0F14] shadow-white/20 hover:bg-[#9DB4C6]'
                }`}
            >
              Book Demo
              <ArrowRight className="w-3.5 h-3.5 lg:w-4 lg:h-4 transition-transform duration-300" />
            </button>
          </Link>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="menu-button md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-white/10 transition-colors z-50"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 transform transition-all duration-500 ease-in-out ${navbarScrolled ? 'bg-[#0B0F14]' : 'bg-white'
                } ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
            />
            <span
              className={`w-6 h-0.5 transition-all duration-500 ease-in-out ${navbarScrolled ? 'bg-[#0B0F14]' : 'bg-white'
                } ${isMenuOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`w-6 h-0.5 transform transition-all duration-500 ease-in-out ${navbarScrolled ? 'bg-[#0B0F14]' : 'bg-white'
                } ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <div
              className="fixed inset-0 bg-[#0B0F14]/60 backdrop-blur-sm md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />

            <motion.div
              ref={mobileMenuRef}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute top-12 sm:top-14 left-0 right-0 mx-4 mt-2 md:hidden bg-[#F5F8FA] border border-[#9DB4C6]/20 rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="p-6 space-y-4">
                {[
                  { name: 'Home', to: '/' },
                  { name: 'About', to: '/about' },
                  { name: 'Services', to: '/services' },
                  { name: 'Packages', to: '/packages' },
                  { name: 'Products', to: '/products' },
                  { name: 'Contact', to: '/contact' }
                ].map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={item.to}
                      onClick={() => setIsMenuOpen(false)}
                      className="block py-3 px-4 text-base text-[#1E2A39] hover:text-[#9DB4C6] bg-[#1E2A39]/5 hover:bg-[#9DB4C6]/10 rounded-xl transition-all duration-300"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="pt-2"
                >
                  <Link to="/book-demo" onClick={() => setIsMenuOpen(false)}>
                    <button className="w-full py-4 rounded-xl bg-[#1E2A39] text-[#F5F8FA] font-medium hover:shadow-lg hover:shadow-[#1E2A39]/25 transition-all duration-300">
                      Book Demo
                    </button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default SharedNavbar;
