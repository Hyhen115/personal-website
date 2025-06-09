import React from "react";
import { FloatingDock } from "./components/floating_dock";
import TopNav from "./components/top_nav";
import Hero from "./components/sections/Hero";
import {
  IconBrandGithub,
  IconBrandLinkedinFilled,
  IconFile,
  IconMail,
  IconMoon,
} from "@tabler/icons-react";

function App() {
  // Items for the bottom floating dock
  const navItems = [
    {
      title: "Contact",
      icon: (
        <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#contact",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/yourusername",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedinFilled className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/yourusername",
    },
    {
      title: "Resume",
      icon: (
        <IconFile className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://yourwebsite.com/resume.pdf",
    },
  ];

  // Items for the top navigation
  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    // Make sure we reset any default margins/paddings
    <main className="w-full min-h-screen bg-white dark:bg-black overflow-x-hidden m-0 p-0">
      {/* Top Navigation */}
      <TopNav menuItems={menuItems} />
      
      {/* Hero Section - Using flex with centered content */}
      <section
        id="home"
        className="w-full min-h-screen flex flex-col items-center justify-center p-4 pt-16"
      >
        {/* The Hero component should take the appropriate width */}
        <div className="w-full max-w-3xl mx-auto">
          <Hero />
        </div>
      </section>

      {/* Future sections will go here */}
      {/* <section id="about" className="w-full min-h-screen py-16">
        <About />
      </section> */}

      {/* Position the floating dock at the bottom of the screen */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
        <FloatingDock items={navItems} />
      </div>
    </main>
  );
}

export default App;
