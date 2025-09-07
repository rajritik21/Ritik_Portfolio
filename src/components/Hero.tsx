import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="about" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="order-2 md:order-1"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            About <span className="text-secondary">Me</span>
          </h1>
          <p className="my-4 text-gray-400 max-w-lg">
            Hello! I'm Ritik Ranjan, a Computer Science Engineering graduate from Haldia Institute of Technology (Batch of 2025). Currently, I’m working as a Full Stack Developer, specializing in backend development with .NET and frontend development using React, TypeScript, and Ant Design. 
          </p>
          <p className="mb-6 text-gray-400 max-w-lg">
         I’m passionate about web development, problem-solving, and creating responsive, user-friendly applications that combine technical excellence with creativity.
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="btn btn-primary"
            >
              Hire me
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://drive.google.com/file/d/1EAGs52n7NkNmaDwRvlGA8H1SBDH4L_a8/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="btn border border-gray-600 text-white hover:border-secondary hover:text-secondary"
            >
              View Resume
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2 inline-block">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </motion.a>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="order-1 md:order-2 relative"
        >
          <div className="relative z-10 overflow-hidden rounded-xl">
            <img 
              src={process.env.PUBLIC_URL + '/assets/ritik_pic.jpg'} 
              alt="Ritik Ranjan" 
              className="w-full max-w-md mx-auto"
            />
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-sm text-gray-500 mb-2">Scroll down</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-secondary">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 