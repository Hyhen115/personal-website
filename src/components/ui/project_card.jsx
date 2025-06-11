import React, { useState } from "react";
import { motion } from "framer-motion";
import { IconArrowUpRight, IconBrandGithub } from "@tabler/icons-react";

const ProjectCard = ({ project }) => {
  const { image, title, description, link, githubLink } = project;
  const [isHovered, setIsHovered] = useState(false);
  const [isLearnMoreHovered, setIsLearnMoreHovered] = useState(false);
  const [isGithubHovered, setIsGithubHovered] = useState(false);

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
          style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
        />
      </div>

      {/* Project Info */}
      <div className="p-5 relative">
        <h3
          className={`text-xl font-bold mb-2 transition-all duration-200 ${
            isHovered ? "blur-sm" : ""
          }`}
        >
          {title}
        </h3>
        <p
          className={`text-gray-600 dark:text-gray-300 transition-all duration-200 ${
            isHovered ? "blur-sm" : ""
          }`}
        >
          {description}
        </p>

        {/* Buttons - Only visible on hover */}
        {isHovered && (
          <motion.div
            className="absolute inset-x-0 bottom-4 flex items-center justify-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Learn More Button */}
            <a
              href={link}
              className={`bg-transparent ${
                isLearnMoreHovered
                  ? "backdrop-blur-xl shadow-md"
                  : "backdrop-blur-sm shadow-none"
              } text-gray-800 dark:text-gray-100 text-sm py-1.5 px-3 rounded-md transition-all duration-300 flex items-center gap-1.5`}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setIsLearnMoreHovered(true)}
              onMouseLeave={() => setIsLearnMoreHovered(false)}
            >
              Learn more
              <motion.div
                className="relative"
                animate={{
                  x: isLearnMoreHovered ? 2 : 0,
                  y: isLearnMoreHovered ? -2 : 0,
                  scale: isLearnMoreHovered ? 1.2 : 1,
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <IconArrowUpRight className="h-3.5 w-3.5" />
              </motion.div>
            </a>

            {/* GitHub Button */}
            {githubLink && (
              <a
                href={githubLink}
                className={`bg-transparent ${
                  isGithubHovered
                    ? "backdrop-blur-xl shadow-md"
                    : "backdrop-blur-sm shadow-none"
                } text-gray-800 dark:text-gray-100 text-sm py-1.5 px-3 rounded-md transition-all duration-300 flex items-center gap-1.5`}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setIsGithubHovered(true)}
                onMouseLeave={() => setIsGithubHovered(false)}
              >
                GitHub
                <motion.div
                  className="relative"
                  animate={{
                    y: isGithubHovered ? -2 : 0,
                    scale: isGithubHovered ? 1.2 : 1,
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <IconBrandGithub className="h-3.5 w-3.5" />
                </motion.div>
              </a>
            )}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
