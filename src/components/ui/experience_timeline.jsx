import React from 'react';
import { motion } from 'framer-motion';
import { IconExternalLink } from '@tabler/icons-react';

const ExperienceTimeline = ({ experiences }) => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="space-y-10 md:space-y-16">
        {experiences.map((exp) => (
          <motion.div 
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
            className="group"
          >
            <div className="flex flex-col md:flex-row gap-2 md:gap-6">
              {/* Period */}
              <div className="w-full md:w-1/4 mb-1 md:mb-0">
                <p className="font-medium text-gray-500 dark:text-gray-400 md:text-right">
                  {exp.period}
                </p>
              </div>
              
              {/* Content */}
              <div className="w-full md:w-3/4 pl-2 md:pl-6 pb-2 relative">
                {/* Job title */}
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  {exp.title}
                </h3>
                
                {/* Company name with optional link */}
                <div className="mb-2">
                  {exp.companyUrl ? (
                    <a 
                      href={exp.companyUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-blue-600 dark:text-blue-400 font-medium hover:underline inline-flex items-center"
                    >
                      {exp.company}
                      <IconExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  ) : (
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      {exp.company}
                    </p>
                  )}
                </div>
                
                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {exp.description}
                </p>
                
                {/* Skills used - styled like the reference image */}
                {exp.skills && (
                  <div className="mt-2 space-y-1">
                    <div className="flex flex-wrap gap-1.5">
                      {exp.skills.map((skill, idx) => (
                        <span 
                          key={idx} 
                          className="text-sm font-medium text-gray-600 dark:text-gray-300 mr-1"
                        >
                          {skill}{idx < exp.skills.length - 1 && " •"}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;