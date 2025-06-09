import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  const { image, title, description, link } = project;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className="relative overflow-hidden rounded-lg shadow-lg bg-white dark:bg-gray-800 h-full"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <div className="w-full h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out"
          style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
        />
      </div>
      
      {/* Project Info */}
      <div className="p-5 relative">
        <h3 className={`text-xl font-bold mb-2 transition-all duration-200 ${isHovered ? 'blur-sm' : ''}`}>
          {title}
        </h3>
        <p className={`text-gray-600 dark:text-gray-300 transition-all duration-200 ${isHovered ? 'blur-sm' : ''}`}>
          {description}
        </p>
        
        {/* Learn More Button - Only visible on hover */}
        {isHovered && (
          <motion.div 
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <a 
              href={link}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md shadow-md transition-colors"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Learn More
            </a>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;