import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectTabs = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-10 relative">
      {tabs.map((tab) => (
        <motion.div
          key={tab}
          className="relative"
        >
          {activeTab === tab && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 bg-blue-600 rounded-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ 
                type: "spring", 
                stiffness: 200, 
                damping: 30, 
                duration: 0.7 
              }}
            />
          )}
          <motion.button
            onClick={() => onTabChange(tab)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors relative z-10 ${
              activeTab === tab
                ? 'text-white'
                : 'text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {tab}
          </motion.button>
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectTabs;