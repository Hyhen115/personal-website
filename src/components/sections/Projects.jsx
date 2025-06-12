import React, { useState, useEffect } from 'react';
import ProjectCard from '../ui/project_card';
import ProjectTabs from '../ui/project_tabs';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState([]);

  // Sample project data - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: "Testing github project",
      description: "This is testing description for my project cards.",
      image: "https://static.dezeen.com/uploads/2025/05/sq-google-g-logo-update_dezeen_2364_col_0-852x852.jpg",
      link: "#",
      githubLink: "https://github.com/Hyhen115",
      status: "AI",
    },
    {
      id: 2,
      title: "Testing No Github Link",
      description: "This is testing description for my project cards.",
      image: "https://static.dezeen.com/uploads/2025/05/sq-google-g-logo-update_dezeen_2364_col_0-852x852.jpg",
      link: "#",
      status: "Web",
    },
    {
      id: 3,
      title: "Testing Project 3",
      description: "This is testing description for my project cards.",
      image: "https://static.dezeen.com/uploads/2025/05/sq-google-g-logo-update_dezeen_2364_col_0-852x852.jpg",
      link: "#",
      status: "Mobile",
    },
    {
      id: 4,
      title: "Testing Project 4",
      description: "This is testing description for my project cards.",
      image: "https://static.dezeen.com/uploads/2025/05/sq-google-g-logo-update_dezeen_2364_col_0-852x852.jpg",
      link: "#",
      status: "Web",
    },
    {
      id: 5,
      title: "Testing Project 5",
      description: "This is testing description for my project cards.",
      image: "https://static.dezeen.com/uploads/2025/05/sq-google-g-logo-update_dezeen_2364_col_0-852x852.jpg",
      link: "#",
      status: "AI",
    },
    {
      id: 6,
      title: "Testing Project 6",
      description: "This is testing description for my project cards.",
      image: "https://static.dezeen.com/uploads/2025/05/sq-google-g-logo-update_dezeen_2364_col_0-852x852.jpg",
      link: "#",
      status: "Blockchain",
    },
  ];

  // Get unique statuses for filter buttons
  const statuses = ['All', ...Array.from(new Set(projects.map(project => project.status).filter(Boolean)))];

  // Update filtered projects whenever active filter changes
  useEffect(() => {
    setFilteredProjects(
      activeFilter === 'All' 
        ? projects 
        : projects.filter(project => project.status === activeFilter)
    );
  }, [activeFilter]);

  return (
    <div id="projects" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">My Projects</h2>
      
      {/* Using the ProjectTabs component */}
      <ProjectTabs 
        tabs={statuses} 
        activeTab={activeFilter} 
        onTabChange={setActiveFilter} 
      />
      
      {/* Project grid with animation */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredProjects.map(project => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              layout
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      
      {/* Show message when no projects match the filter */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12 text-gray-500 dark:text-gray-400">
          No projects found for this filter.
        </div>
      )}
    </div>
  );
};

export default Projects;