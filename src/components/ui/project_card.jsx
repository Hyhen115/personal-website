import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { IconArrowUpRight } from '@tabler/icons-react';

const ProjectCard = ({ project }) => {
  const { image, title, description, link } = project;
  const [isHovered, setIsHovered] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);

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
            className="absolute inset-x-0 bottom-4 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <a 
              href={link}
              className={`bg-transparent ${isButtonHovered ? 'backdrop-blur-xl' : 'backdrop-blur-sm'} text-gray-800 dark:text-gray-100 text-sm py-1.5 px-3 rounded-md shadow-md transition-all duration-300 flex items-center gap-1.5`}
              target="_blank" 
              rel="noopener noreferrer"
              onMouseEnter={() => setIsButtonHovered(true)}
              onMouseLeave={() => setIsButtonHovered(false)}
            >
              Learn more
              <motion.div
                className="relative"
                animate={{
                  x: isButtonHovered ? 2 : 0,
                  y: isButtonHovered ? -2 : 0,
                  scale: isButtonHovered ? 1.2 : 1
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <IconArrowUpRight className="h-3.5 w-3.5" />
              </motion.div>
            </a>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;