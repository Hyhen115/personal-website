import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="w-full py-16 relative z-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            Get In Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Feel free to reach out if you want to collaborate with me, or simply have a chat.
          </p>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            Currently available for freelance work and open to job opportunities.
          </p>
          <a 
            href="mailto:hyhen115@gmail.com"
            className="inline-block px-6 py-2 border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-200"
          >
            Say Hello 👋
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;