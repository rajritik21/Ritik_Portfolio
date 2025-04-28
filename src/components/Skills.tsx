import React from 'react';
import { motion } from 'framer-motion';

interface SkillCategory {
  title: string;
  skills: string[];
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Programming Languages',
      skills: ['C', 'Python', 'Java', 'JavaScript', 'SQL']
    },
    {
      title: 'Web Development',
      skills: ['React', 'Node.js', 'Express.js', 'MongoDB', 'API development', 'Handlebars']
    },
    {
      title: 'Frontend',
      skills: ['HTML', 'CSS', 'Tailwind CSS', 'Bootstrap', 'JavaScript', 'React.js']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'MongoDB', 'REST API']
    },
    {
      title: 'Tools & Technologies',
      skills: ['Git', 'GitHub', 'DBMS', 'VS Code', 'IntelliJ IDEA', 'Data Structures & Algorithms', 'JWT Authentication']
    },
    {
      title: 'Others',
      skills: ['OOPs', 'DBMS', 'Figma', 'Problem Solving', 'Team Collaboration']
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3
      }
    }
  };

  // Function to get a random color for skill tags
  const getTagColor = (skillName: string) => {
    const colors = [
      'bg-green-500/20 text-green-400 border-green-500/30',
      'bg-blue-500/20 text-blue-400 border-blue-500/30',
      'bg-purple-500/20 text-purple-400 border-purple-500/30',
      'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
      'bg-red-500/20 text-red-400 border-red-500/30',
      'bg-indigo-500/20 text-indigo-400 border-indigo-500/30',
      'bg-pink-500/20 text-pink-400 border-pink-500/30',
      'bg-teal-500/20 text-teal-400 border-teal-500/30'
    ];
    
    // Use the hashCode of the skill name to pick a consistent color for each skill
    const hashCode = skillName.split('').reduce((acc, char) => char.charCodeAt(0) + acc, 0);
    return colors[hashCode % colors.length];
  };

  return (
    <section id="skills" className="py-20 bg-primary relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-secondary">Skills</span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Here are the technologies and tools I've been working with
          </p>
        </motion.div>

        {/* Skills categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-14"
        >
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              variants={categoryVariants}
              className="mb-10"
            >
              <div className="flex items-center mb-6">
                <div className="w-2 h-2 rounded-full bg-secondary mr-3"></div>
                <h3 className="text-xl font-bold">{category.title}</h3>
                <div className="h-[1px] bg-gray-700/60 flex-grow ml-4"></div>
              </div>
              
              <motion.div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    variants={skillVariants}
                    whileHover={{ y: -5, scale: 1.05 }}
                    className={`py-2 px-4 rounded-full border ${getTagColor(skill)} text-sm font-medium transition-all duration-300`}
                  >
                    {skill}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 