import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  // Define your skills with categories and colors
  const skillCategories = [
    {
      name: "Frontend",
      skills: [
        { name: "React", color: "#61dafb", icon: "react" },
        { name: "React Native", color: "#61dafb", icon: "reactnative" },
        { name: "Flutter", color: "#2196f3", icon: "flutter" },
        { name: "Electron", color: "#47848f", icon: "electron" },
        { name: "JavaScript", color: "#f7df1e", icon: "javascript" },
        { name: "TypeScript", color: "#3178c6", icon: "typescript" },
        { name: "HTML/CSS", color: "#e34c26", icon: "html5" },
        { name: "Tailwind CSS", color: "#06b6d4", icon: "tailwindcss" }
      ]
    },
    {
      name: "Backend",
      skills: [
        { name: "Node.js", color: "#339933", icon: "nodejs" },
        { name: "C# .NET", color: "#512bd4", icon: "dotnet" },
        { name: "Python", color: "#3776ab", icon: "python" },
        { name: "MongoDB", color: "#47a248", icon: "mongodb" },
        { name: "SQLite", color: "#003b57", icon: "sqlite" },
        { name: "Java", color: "#f89820", icon: "java" },
        { name: "C/C++", color: "#004482", icon: "c/c++" },
        { name: "Solidity", color: "#363636", icon: "solidity" }
      ]
    },
    {
      name: "Tools & Others",
      skills: [
        { name: "Git", color: "#f05032", icon: "git" },
        { name: "Docker", color: "#2496ed", icon: "docker" },
        { name: "Kubernetes", color: "#326ce5", icon: "kubernetes" },
        { name: "AWS", color: "#ff9900", icon: "amazonaws" },
        { name: "Postman", color: "#ff6c37", icon: "postman" },
      ]
    }
  ];

  return (
    <section id="skills" className="w-full py-16 relative z-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            Skills & Technologies
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some technologies I've been working with recently
          </p>
        </motion.div>

        <div className="space-y-12">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-8"
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-6 text-center text-gray-700 dark:text-gray-200">
                {category.name}
              </h3>
              
              <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: `0 10px 15px -3px ${skill.color}25`
                    }}
                    className="skill-badge flex items-center px-4 py-2 rounded-full shadow-md"
                    style={{
                      backgroundColor: `${skill.color}10`,
                      border: `2px solid ${skill.color}30`,
                      color: skill.color
                    }}
                  >
                    <span className="text-sm md:text-base font-medium">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 dark:text-gray-300 italic">
            ...and continuously learning new technologies and skills!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;