import React from 'react';
import { IconBriefcase, IconSchool } from '@tabler/icons-react';

const ExperienceTimeline = ({ experiences }) => {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute h-full w-0.5 bg-gray-200 dark:bg-gray-700 left-1/2 transform -translate-x-1/2"></div>
      
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div key={exp.id} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
            {/* Timeline content */}
            <div className="w-5/12">
              <div className={`${index % 2 === 0 ? 'text-right mr-8' : 'text-left ml-8'}`}>
                <h3 className="text-lg md:text-xl font-bold">{exp.title}</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium">{exp.company}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{exp.period}</p>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{exp.description}</p>
              </div>
            </div>
            
            {/* Timeline dot */}
            <div className="z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-900 border-4 border-blue-500 dark:border-blue-400">
              {exp.type === "work" ? (
                <IconBriefcase className="h-5 w-5 text-blue-500 dark:text-blue-400" />
              ) : (
                <IconSchool className="h-5 w-5 text-blue-500 dark:text-blue-400" />
              )}
            </div>
            
            {/* Empty space for opposite side */}
            <div className="w-5/12"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;