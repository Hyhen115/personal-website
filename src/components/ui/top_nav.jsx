import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { IconMenu2, IconX } from '@tabler/icons-react';

const TopNav = ({ logo, menuItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  // Track scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine if we're scrolling up or down
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past initial threshold
        setIsVisible(false);
        // Close mobile menu when nav hides
        if (isMenuOpen) setIsMenuOpen(false);
      } else {
        // Scrolling up or at the top
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isMenuOpen]);

  // Smooth scroll handler for navigation links
  const handleSmoothScroll = (e, targetId) => {
    // Only process internal links (those starting with #)
    if (targetId.startsWith('#')) {
      e.preventDefault();
      
      // Close mobile menu if open
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
      
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        // Get the navigation bar height for offset calculation
        const navHeight = document.querySelector('nav').offsetHeight;
        
        // Calculate the target position with offset for the fixed header
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
        
        // Scroll smoothly to the target
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-80 dark:bg-black dark:bg-opacity-80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800"
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo or Name */}
          <div className="flex-shrink-0">
            {logo ? (
              <img className="h-8 w-auto" src={logo} alt="Logo" />
            ) : (
              <a href="#home" onClick={(e) => handleSmoothScroll(e, '#home')} className="text-xl font-bold text-gray-900 dark:text-white">
                Henry
              </a>
            )}
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center space-x-4">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
              
              {/* Resume Button - Fixed to download from assets/resume.pdf */}
              <a
                href="./assets/resume.pdf" 
                download="Henry_Wong_Resume.pdf"
                className="ml-2 px-4 py-1.5 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 border border-gray-400 dark:border-gray-600 hover:border-gray-600 dark:hover:border-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Resume
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <IconX className="block h-6 w-6" />
              ) : (
                <IconMenu2 className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-black">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                >
                  {item.label}
                </a>
              ))}
              
              {/* Resume Button in Mobile Menu - Fixed to download from assets/resume.pdf */}
              <a
                href="./assets/resume.pdf" 
                download="Henry_Wong_Resume.pdf"
                className="block mx-3 mt-2 px-3 py-2 text-center rounded-md text-base font-medium text-gray-700 dark:text-gray-200 border border-gray-400 dark:border-gray-600 hover:border-gray-600 dark:hover:border-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default TopNav;