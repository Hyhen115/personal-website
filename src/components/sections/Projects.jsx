import React, { useState, useEffect } from "react";
import ProjectCard from "../ui/project_card";
import ProjectTabs from "../ui/project_tabs";
import { motion, AnimatePresence } from "framer-motion";
import { s } from "motion/react-client";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState([]);

  // Sample project data - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: "DeFunds",
      description:
        "A fully decentralized crowdfunding Dapp on ETH. Allow founders to raise vote to extend deadline and raise campaigns in a lower fee. Donators can also have a way to get refund if the campaign is not successful.",
      image:
        "https://static.dezeen.com/uploads/2025/05/sq-google-g-logo-update_dezeen_2364_col_0-852x852.jpg",
      link: "https://github.com/Hyhen115/DeFunds",
      demoLink: "https://hyhen115.github.io/DeFunds",
      status: "Blockchain",
    },
    {
      id: 2,
      title: "Distributed ML Pipeline",
      description:
        "a complete ML pipeline system on AWS EMR. Allow users to upload datasets, select features, train models using different algorithms, and download the best model through a web interface.",
      image: "https://example.com/portfolio.jpg",
      link: "https://github.com/Hyhen115/ml_pipeline",
      status: "Cloud",
    },
    {
      id: 3,
      title: "Exam System",
      description:
        "An Exam System for students, teachers, admin using Java and Angular, tested with JUnit and Mockito.",
      image: "https://example.com/social_media.jpg",
      link: "https://github.com/Hyhen115/Exam-system",
      status: "App",
    },
    {
      id: 4,
      title: "Streamlined Linux Shell Queues and Memory",
      description:
        "Simplified Linux Shell, Multi-level Feedback Queue, Memory Management in Linux OS.",
      image: "https://example.com/social_media.jpg",
      link: "https://github.com/Hyhen115/Streamlined-Linux-Shell-Queues-and-Memory",
      status: "System",
    },
    {
      id: 5,
      title: "Deep Learning and Image Processing",
      description:
        "HandTracking for controlling a robot arm, FaceDetection, Virtual Pen, NumberDetection Model",
      image: "https://example.com/social_media.jpg",
      link: "https://github.com/Hyhen115/deepLearningAndImageProcessing",
      status: "AI",
    },
    {
      id: 6,
      title: "Chess",
      description:
        "A chess game that uses C++ to code, mainly focus on practicing C++ OOP",
      image: "https://example.com/social_media.jpg",
      link: "https://github.com/Hyhen115/Chess",
      status: "System",
    },
    {
      id: 7,
      title: "Weather App",
      description: "a weather app using flutter and openWeatherAPI.",
      image: "https://example.com/portfolio.jpg",
      link: "https://github.com/Hyhen115/weather_app",
      status: "App",
    },
    {
      id: 8,
      title: "Adoption Center System",
      description:
        "Making a Adoption Center System only using C++, mainly to practice BST with linked list",
      image: "https://example.com/social_media.jpg",
      link: "https://github.com/Hyhen115/Adoption-Center-System",
      status: "System",
    },
  ];

  // Get unique statuses for filter buttons
  const statuses = [
    "All",
    ...Array.from(
      new Set(projects.map((project) => project.status).filter(Boolean))
    ),
  ];

  // Update filtered projects whenever active filter changes
  useEffect(() => {
    setFilteredProjects(
      activeFilter === "All"
        ? projects
        : projects.filter((project) => project.status === activeFilter)
    );
  }, [activeFilter]);

  return (
    <div id="projects" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        My Projects
      </h2>

      {/* Using the ProjectTabs component */}
      <ProjectTabs
        tabs={statuses}
        activeTab={activeFilter}
        onTabChange={setActiveFilter}
      />

      {/* Project grid with animation */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence>
          {filteredProjects.map((project) => (
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
