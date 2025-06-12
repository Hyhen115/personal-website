import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { IconMenu2, IconX } from '@tabler/icons-react';

const TopNav = ({ logo, menuItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-80 dark:bg-black dark:bg-opacity-80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo or Name */}
          <div className="flex-shrink-0">
            {logo ? (
              <img className="h-8 w-auto" src={logo} alt="Logo" />
            ) : (
              <a href="#" className="text-xl font-bold text-gray-900 dark:text-white">
                Henry
              </a>
            )}
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default TopNav;