import React from 'react';
import { IconMapPin, IconBriefcase } from '@tabler/icons-react';
import iconImage from '../../assets/profolio_icon.jpeg'; // Adjust the path as necessary

function Hero() {
  return (
    <div className="w-full px-4">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 max-w-3xl mx-auto">
        {/* Profile Picture */}
        <div className="w-32 h-32 md:w-40 md:h-40">
          <img 
            src={iconImage}
            alt="Henry Wong"
            className="w-full h-full rounded-full border-2 border-gray-100 dark:border-gray-800 shadow-md object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://via.placeholder.com/150?text=HW";
            }}
          />
        </div>

        {/* Profile Info */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">Software Developer</h1>
          <p className="text-lg md:text-xl mb-4">Hi, I'm Henry 👋</p>
          
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 text-gray-600 dark:text-gray-300 mb-4 justify-center md:justify-start">
            <div className="flex items-center gap-2">
              <IconMapPin className="h-5 w-5" />
              <span>Hong Kong, HK</span>
            </div>
            <div className="flex items-center gap-2">
              <IconBriefcase className="h-5 w-5" />
              <span>Open to Work</span>
            </div>
          </div>
          
          <p className="text-gray-600 dark:text-gray-300 max-w-lg">
            Currently a CS Student at HKUST, I am passionate about Software Development especially for AI agents, Cloud Computing and blockchain technologies
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;