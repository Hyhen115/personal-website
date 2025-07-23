import TopNav from "../components/ui/top_nav";
import Hero from "../components/sections/Hero";
import Projects from "../components/sections/Projects";
import Experience from "../components/sections/Experience";
import Skills from "../components/sections/Skills";
import Contact from "../components/sections/Contact";
import Footer from "../components/common/footer";
import SharedBackground from "../components/ui/background";
import CustomCursor from "../components/common/custom_cursor";
import { FloatingDock } from "../components/ui/floating_dock";

import {
  IconBrandGithub,
  IconBrandLinkedinFilled,
  IconFile,
  IconMail,
} from "@tabler/icons-react";

const navItems = [
  {
    title: "Contact",
    icon: <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: "mailto:hyhen115@gmail.com",
  },
  {
    title: "GitHub",
    icon: <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: "https://github.com/Hyhen115",
  },
  {
    title: "LinkedIn",
    icon: <IconBrandLinkedinFilled className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: "https://www.linkedin.com/in/henry-wong-5169482a0",
  },
  {
    title: "Resume",
    icon: <IconFile className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: "./assets/resume.pdf",
    download: "Henry_Wong_Resume.pdf",
  },
];

const menuItems = [
  { label: "Home", href: "#home" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-white dark:bg-black overflow-x-hidden m-0 p-0">
      <CustomCursor />
      <SharedBackground />
      <TopNav menuItems={menuItems} />

      <section id="home" className="snap-section w-full min-h-screen flex flex-col items-center justify-center p-4 relative z-10">
        <div className="w-full max-w-3xl mx-auto">
          <Hero />
        </div>
      </section>
      <section id="experience" className="snap-section w-full min-h-screen py-16 flex items-center relative z-10">
        <Experience />
      </section>
      <section id="projects" className="snap-section w-full min-h-screen py-16 flex items-center relative z-10">
        <Projects />
      </section>
      <section id="skills" className="snap-section w-full min-h-screen py-16 flex items-center relative z-10">
        <Skills />
      </section>
      <section id="contact" className="snap-section w-full min-h-screen py-16 flex flex-col justify-center relative z-10">
        <Contact />
        <Footer />
      </section>
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
        <FloatingDock items={navItems} />
      </div>
    </main>
  );
}