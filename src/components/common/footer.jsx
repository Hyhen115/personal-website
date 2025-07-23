import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <motion.footer 
      className="w-full py-6 bg-transparent z-20 relative mt-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {currentYear} Henry Wong. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;