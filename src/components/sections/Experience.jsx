import React from 'react';
import ExperienceTimeline from '../ui/experience_timeline';

const Experience = () => {
  // Sample experience data
  const experiences = [
    {
      id: 1,
      title: "Part-Time AI Developer",
      company: "TRM Limited",
      period: "2025 Jun - Present",
      description: "Developed AI workflows and agents for Generating Insurance CM Statements from Audio Transcripts using Dify. And Implememted API for the AI Workflows using C# .NET 8.0.",
      type: "work", // or "education"
    },
    {
      id: 2,
      title: "Full Stack Developer Intern",
      company: "iGears Technology Limited",
      period: "2024 - 2025",
      description: "Developed a Multi-platform NFC event App and A clipboard App using React Native, Flutter, electron, flask, Node.js. and MongoDB.",
      type: "work",
    },
    {
      id: 3,
      title: "INNOX Enterpunership Program",
      company: "INNOX & HKSTP",
      period: "2024 Summer",
      description: "Participated in a Summer program to develop an STEM Education Toy-CodeBo.",
      type: "work",
    },
    {
      id: 4,
      title: "Bachelor of Science in Computer Science",
      company: "HKUST",
      period: "2020 - Present",
      description: "Focused on software development, algorithms, and data structures.",
      type: "education",
    },
    {
      id: 5,
      title: "Associate Degree in Data Science",
      company: "HKCC",
      period: "2016 - 2020",
      description: "Graduated with honors.",
      type: "education",
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