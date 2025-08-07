import React from "react";
import TopNav from "../components/ui/top_nav";
import SharedBackground from "../components/ui/background";
import CustomCursor from "../components/common/custom_cursor";

const menuItems = [
  { label: "Home", href: "/personal-website/" },
  { label: "Forum", href: "/personal-website/forum" },
];

export default function Forum() {
  return (
    <main className="w-full min-h-screen bg-white dark:bg-black overflow-x-hidden m-0 p-0">
      <CustomCursor />
      <SharedBackground />
      <TopNav menuItems={menuItems} />
      
      <div className="w-full min-h-screen flex items-center justify-center relative z-10 pt-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Forum
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Coming Soon
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500 max-w-md mx-auto">
            Currently under development for self-hosting and adding features like forum and chatbot integrations. Stay tuned for updates!
          </p>
        </div>
      </div>
    </main>
  );
}