import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  IconMail, 
  IconBrandGithub, 
  IconBrandLinkedin, 
  IconArrowRight 
} from '@tabler/icons-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1000);
    
    // For actual form submission, you would use:
    // try {
    //   const response = await fetch('your-form-endpoint', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(formData)
    //   });
    //   if (response.ok) {
    //     setSubmitStatus('success');
    //     setFormData({ name: '', email: '', message: '' });
    //   } else {
    //     setSubmitStatus('error');
    //   }
    // } catch (error) {
    //   setSubmitStatus('error');
    // } finally {
    //   setIsSubmitting(false);
    // }
  };

  return (
    <section id="contact" className="w-full py-16 relative z-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            Get In Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Feel free to reach out if you want to collaborate with me, or simply have a chat.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start">
                <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg mr-4">
                  <IconMail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="font-medium text-gray-800 dark:text-white">Email</p>
                  <a 
                    href="mailto:your.email@example.com" 
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    your.email@example.com
                  </a>
                </div>
              </div>
              
              {/* GitHub */}
              <div className="flex items-start">
                <div className="p-2 bg-gray-50 dark:bg-gray-800 rounded-lg mr-4">
                  <IconBrandGithub className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                </div>
                <div>
                  <p className="font-medium text-gray-800 dark:text-white">GitHub</p>
                  <a 
                    href="https://github.com/yourusername" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    github.com/yourusername
                  </a>
                </div>
              </div>
              
              {/* LinkedIn */}
              <div className="flex items-start">
                <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg mr-4">
                  <IconBrandLinkedin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="font-medium text-gray-800 dark:text-white">LinkedIn</p>
                  <a 
                    href="https://linkedin.com/in/yourusername" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    linkedin.com/in/yourusername
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <p className="text-gray-600 dark:text-gray-400">
                Currently available for freelance work and open to job opportunities.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : (
                    <>
                      Send Message
                      <IconArrowRight className="ml-2 h-5 w-5" />
                    </>
                  )}
                </button>
                
                {submitStatus === 'success' && (
                  <p className="mt-4 text-green-600 dark:text-green-400">
                    Message sent successfully!
                  </p>
                )}
                
                {submitStatus === 'error' && (
                  <p className="mt-4 text-red-600 dark:text-red-400">
                    There was an error sending your message. Please try again.
                  </p>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;