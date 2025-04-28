import React from 'react';
import { motion } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  githubLink: string;
  demoLink?: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "TaskMaster",
      description: "A modern React task management application with user authentication, profile management, and intuitive task organization.",
      imageUrl: process.env.PUBLIC_URL + "/assets/designer-working.svg",
      technologies: ["React", "JavaScript", "CSS"],
      githubLink: "https://github.com/rajritik21/Task_Manager",
      demoLink: "#"
    },
    {
      id: 2,
      title: "Weather App",
      description: "Real-time weather application that shows current conditions and forecasts for any location.",
      imageUrl: process.env.PUBLIC_URL + "/assets/weather1.png",
      technologies: ["JavaScript", "API Integration", "CSS"],
      githubLink: "https://github.com/rajritik21/Weather-App",
      demoLink: "https://rajritik21.github.io/Weather-App/"
    },
    {
      id: 3,
      title: "Student Registration",
      description: "System for managing student information and registrations with intuitive interface.",
      imageUrl: process.env.PUBLIC_URL + "/assets/studentregistration.png",
      technologies: ["JavaScript", "HTML", "CSS"],
      githubLink: "https://github.com/rajritik21/Student_Registration",
      demoLink: "https://rajritik21.github.io/Student_Registration/"
    },
    {
      id: 4,
      title: "Calculator",
      description: "Interactive calculator application with simple and scientific functions.",
      imageUrl: process.env.PUBLIC_URL + "/assets/calculator.png",
      technologies: ["JavaScript", "HTML", "CSS"],
      githubLink: "https://github.com/rajritik21/Calculator",
      demoLink: "https://rajritik21.github.io/Calculator/"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-primary/80">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            My <span className="text-secondary">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Here are some of my recent projects that showcase my skills and experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-dark/50 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="h-48 bg-gray-800 flex items-center justify-center overflow-hidden">
                {project.title === "TaskMaster" ? (
                  <div className="h-full w-full bg-gradient-to-br from-purple-600 to-blue-700 flex flex-col items-center justify-center p-4">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="h-28 w-28 mb-2"
                    />
                    <div className="text-white font-bold text-xl">TaskMaster</div>
                    <div className="text-white/80 text-xs">Task Management App</div>
                  </div>
                ) : project.title === "Student Registration" ? (
                  <div className="h-full w-full bg-gradient-to-br from-green-600 to-teal-700 flex flex-col items-center justify-center p-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 mb-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <div className="text-white font-bold text-xl">Student Registration</div>
                    <div className="text-white/80 text-xs">Information Management System</div>
                  </div>
                ) : project.title === "Calculator" ? (
                  <div className="h-full w-full bg-gradient-to-br from-gray-700 to-gray-900 flex flex-col items-center justify-center p-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 mb-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    <div className="text-white font-bold text-xl">Calculator</div>
                    <div className="text-white/80 text-xs">Interactive Computing Tool</div>
                  </div>
                ) : (
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className={`h-full w-full object-contain p-2`}
                  />
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 h-16">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs bg-primary rounded text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm flex items-center text-white hover:text-secondary transition-colors"
                  >
                    <svg
                      className="w-5 h-5 mr-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    GitHub
                  </motion.a>
                  {project.demoLink && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm flex items-center text-white hover:text-secondary transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      Live Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/rajritik21?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-secondary hover:underline"
          >
            View more projects on GitHub
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 