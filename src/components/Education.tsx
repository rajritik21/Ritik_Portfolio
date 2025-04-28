import React from 'react';
import { motion } from 'framer-motion';

type EducationItem = {
  degree: string;
  institution: string;
  duration: string;
  location: string;
  performance: string;
  logo?: string;
  website?: string;
};

const Education: React.FC = () => {
  const educationItems: EducationItem[] = [
    {
      degree: 'Bachelor of Technology (Computer Science and Engineering)',
      institution: 'Haldia Institute of Technology',
      duration: '2021 – 2025',
      location: 'Haldia, West Bengal',
      performance: 'YGPA: 8.45 (till 6th Semester)',
      logo: process.env.PUBLIC_URL + '/assets/Hithaldia.jpg',
      website: 'https://hithaldia.ac.in/'
    },
    {
      degree: 'Higher Secondary',
      institution: 'Nalanda College | BSEB',
      duration: '2018 – 2020',
      location: 'Biharsharif, Bihar',
      performance: 'Cumulative Percentage: 73.4%',
      logo: process.env.PUBLIC_URL + '/assets/nalanda.jpeg',
      website: 'https://nalandacollege.ac.in/'
    },
    {
      degree: 'Matriculation',
      institution: 'R P S SCHOOL | CBSE',
      duration: '2018',
      location: 'Biharsharif, Bihar',
      performance: 'Cumulative Percentage: 84.8%',
      logo: process.env.PUBLIC_URL + '/assets/rps.jpg'
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section id="education" className="py-20 bg-dark/80 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            My <span className="text-secondary">Education</span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            My academic journey that has shaped my knowledge and skills
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-secondary/30 z-0"></div>
            
            {/* Education Items */}
            {educationItems.map((item, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className={`relative z-10 flex flex-col md:flex-row mb-16 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="md:w-1/2 flex justify-center items-center mb-8 md:mb-0">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="bg-dark/60 p-8 rounded-xl shadow-xl w-full max-w-md"
                  >
                    <h3 className="text-2xl font-bold mb-2 text-white">{item.degree}</h3>
                    <div className="flex items-center mb-3">
                      {item.website ? (
                        <a 
                          href={item.website} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-secondary font-medium hover:underline flex items-center"
                        >
                          {item.institution}
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      ) : (
                        <span className="text-secondary font-medium">{item.institution}</span>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center text-sm mb-3">
                      <span className="text-gray-300 mr-2">{item.duration}</span>
                      <span className="mx-2 text-gray-500">•</span>
                      <span className="text-gray-300">{item.location}</span>
                    </div>
                    <div className="mt-2 inline-block bg-secondary/10 px-3 py-1 rounded-md">
                      <span className="text-secondary">{item.performance}</span>
                    </div>
                  </motion.div>
                </div>
                
                <div className="md:w-1/2 flex justify-center">
                  <div className="relative flex items-center justify-center">
                    {/* Timeline dot */}
                    <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-secondary border-4 border-dark z-10"></div>
                    
                    {/* Institution logo */}
                    {item.logo && (
                      <motion.div 
                        whileHover={{ rotate: 5 }}
                        className="w-48 h-48 md:w-64 md:h-64 p-0 flex items-center justify-center mx-8 shadow-lg z-20 relative"
                      >
                        {item.website ? (
                          <a 
                            href={item.website} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label={`Visit ${item.institution} website`}
                          >
                            <img 
                              src={item.logo} 
                              alt={item.institution} 
                              className="max-w-full max-h-full object-contain scale-150" 
                            />
                          </a>
                        ) : (
                          <img 
                            src={item.logo} 
                            alt={item.institution} 
                            className="max-w-full max-h-full object-contain scale-150" 
                          />
                        )}
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education; 