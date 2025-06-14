import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { FloatingDock } from "./components/ui/floating_dock";
import TopNav from "./components/ui/top_nav";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Skills from "./components/sections/Skills";
import Contact from "./components/sections/Contact";
import Footer from "./components/ui/footer"; // Import the Footer component
import LoadingEffect from "./components/ui/loading_effect";
import SharedBackground from "./components/ui/background";
import CustomCursor from "./components/ui/custom_cursor";

import {
  IconBrandGithub,
  IconBrandLinkedinFilled,
  IconFile,
  IconMail,
} from "@tabler/icons-react";

function App() {
  // State to manage loading status
  const [isLoading, setIsLoading] = useState(true);

  // Handle loading complete
  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  // Items for the bottom floating dock
  const navItems = [
    {
      title: "Contact",
      icon: (
        <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "mailto:hyhen115@gmail.com", // Change to your email address
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/Hyhen115",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedinFilled className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/henry-wong-5169482a0",
    },
    {
      title: "Resume",
      icon: (
        <IconFile className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/src/assets/resume.pdf",
      download: "Henry_Wong_Resume.pdf", // Add this download attribute
    },
  ];

  // Items for the top navigation
  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <main className="w-full min-h-screen bg-white dark:bg-black overflow-x-hidden m-0 p-0">
      <CustomCursor />

      <AnimatePresence>
        {isLoading && <LoadingEffect onLoadingComplete={handleLoadingComplete} />}
      </AnimatePresence>

      <SharedBackground />
      <TopNav menuItems={menuItems} />

      {/* Hero Section - Using flex with centered content */}
      <section
        id="home"
        className="snap-section w-full min-h-screen flex flex-col items-center justify-center p-4 relative z-10"
      >
        {/* The Hero component should take the appropriate width */}
        <div className="w-full max-w-3xl mx-auto">
          <Hero />
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="snap-section w-full min-h-screen py-16 flex items-center relative z-10">
        <Experience />
      </section>

      {/* Projects Section */}
      <section id="projects" className="snap-section w-full min-h-screen py-16 flex items-center relative z-10">
        <Projects />
      </section>

      {/* Skills Section */}
      <section id="skills" className="snap-section w-full min-h-screen py-16 flex items-center relative z-10">
        <Skills />
      </section>

      {/* Contact Section with Footer */}
      <section id="contact" className="snap-section w-full min-h-screen py-16 flex flex-col justify-center relative z-10">
        <Contact />
        <Footer /> {/* Add the Footer at the bottom of the Contact section */}
      </section>

      {/* Position the floating dock at the bottom of the screen */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
        <FloatingDock items={navItems} />
      </div>
    </main>
  );
}

export default App;
