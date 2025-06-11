import React from 'react';
import ExperienceTimeline from '../ui/experience_timeline';

const Experience = () => {
  // Sample experience data
  const experiences = [
    {
      id: 1,
      title: "Software Developer",
      company: "Tech Company",
      period: "2024 - Present",
      description: "Working on full-stack development with React and Node.js.",
      type: "work", // or "education"
    },
    {
      id: 2,
      title: "CS Student",
      company: "HKUST",
      period: "2020 - 2024",
      description: "Bachelor's degree in Computer Science with focus on AI and cloud computing.",
      type: "education",
    },
    {
      id: 3,
      title: "Developer Intern",
      company: "Startup Inc.",
      period: "Summer 2023",
      description: "Developed features for the company's web application using React.",
      type: "work",
    },
    // Add more experiences as needed
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">My Experience</h2>
      <ExperienceTimeline experiences={experiences} />
    </div>
  );
};

export default Experience;