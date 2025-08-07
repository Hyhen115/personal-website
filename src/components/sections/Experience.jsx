import React from 'react';
import { motion } from 'framer-motion';
import ExperienceTimeline from '../ui/experience_timeline';

const Experience = () => {
  // Work experience data
  const workExperiences = [
    {
      id: 1,
      title: "IBM STEM Summer Internship",
      company: "IBM",
      companyUrl: "https://www.ibm.com/us-en",
      period: "2025 July - Present",
      description: "Implemented a RAG Chatbot for POC and Internal Uses",
      type: "work",
      skills: ["Langchain", "FastAPI", "Postage SQL", "Chroma DB", "Llama.cpp", "Podman", "Openshift", "IBM Power"]
    },
    {
      id: 2,
      title: "Part-Time AI Developer",
      company: "TRM Limited",
      companyUrl: "https://www.trm.com.hk/",
      period: "2025 Jun",
      description: "Developed AI workflows and agents for Generating Insurance CM Statements from Audio Transcripts. And Implememted API for the AI Workflows and sending emails to corresponding clients and insutance staff",
      type: "work",
      skills: ["C# .NET", "Dify"]
    },
    {
      id: 3,
      title: "Full Stack Developer Intern",
      company: "iGears Technology Limited",
      companyUrl: "https://www.igears.com.hk/",
      period: "2024 Dec - 2025 Jan",
      description: "Developed a Multi-platform NFC event App and a clipboard App.",
      type: "work",
      skills: ["React Native", "Flutter", "Electron", "Flask", "Node.js", "MongoDB"]
    },
    {
      id: 4,
      title: "INNOX Enterpunership Program",
      company: "INNOX & HKSTP",
      companyUrl: "https://mp.weixin.qq.com/s?__biz=MzI3OTM0MjI3NA==&mid=2247511848&idx=1&sn=f22055c4be3b0dd094140f131b829eff&chksm=eb4bd285dc3c5b93eba0e0c5e06b274760b1f639cdb8c3f7255a8f8dd34765ad970a0c6027fb&token=484125780&lang=zh_CN#rd",
      period: "2024 May - 2024 July",
      description: "Participated in a Summer program to develop an STEM Education Toy-CodeBo.",
      type: "work",
      skills: ["Business Analysis", "Product Development", "IoT"]
    },
  ];

  // Education experience data
  const educationExperiences = [
    {
      id: 5,
      title: "Bachelor of Engineering in Computer Science",
      company: "HKUST",
      companyUrl: "https://hkust.edu.hk/zh-hant",
      period: "2023 - Present",
      description: "CGA 3.2/4.3",
      type: "education",
      skills: ["Data Structures", "Algorithms", "Software Engineering"]
    },
    {
      id: 6,
      title: "Associate Degree in Data Science",
      company: "HKCC",
      companyUrl: "https://www.hkcc-polyu.edu.hk/en/home/index.html",
      period: "2021 - 2023",
      description: "CGA 3.92/4.3",
      type: "education",
      skills: ["Statistics", "Data Analysis", "Python"]
    },
  ];

  return (
    <section id="experience" className="w-full py-16 relative z-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            Experience
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Work Experience Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-center mb-8 text-gray-700 dark:text-gray-200">
                Work History
              </h3>
            </div>
            <ExperienceTimeline experiences={workExperiences} />
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-center mb-8 text-gray-700 dark:text-gray-200">
                Education
              </h3>
            </div>
            <ExperienceTimeline experiences={educationExperiences} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;