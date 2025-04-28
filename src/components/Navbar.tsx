import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'about' },
    { name: 'Education', to: 'education' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-primary/95 shadow-lg py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl font-bold"
        >
          <span className="text-white">Ritik </span>
          <span className="text-secondary">Ranjan</span>
        </motion.div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: navLinks.indexOf(link) * 0.1 }}
              className="relative"
            >
              <Link
                to={link.to}
                spy={true}
                smooth={true}
                duration={500}
                onSetActive={() => setActiveSection(link.to)}
                className="text-gray-300 hover:text-secondary cursor-pointer transition-colors duration-300 py-2"
              >
                {link.name}
                {activeSection === link.to && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-secondary"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-secondary origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ opacity: activeSection === link.to ? 0 : 1 }}
                />
              </Link>
            </motion.div>
          ))}
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <motion.button 
            onClick={toggleMenu}
            className="text-gray-300 hover:text-secondary"
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </motion.button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <motion.div
        className="fixed top-0 right-0 h-screen w-64 bg-dark shadow-lg md:hidden"
        initial={{ x: '100%' }}
        animate={{ x: isOpen ? 0 : '100%' }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="flex justify-end p-4">
          <motion.button
            onClick={toggleMenu}
            className="text-gray-300 hover:text-secondary"
            whileTap={{ scale: 0.9 }}
          >
            <XMarkIcon className="h-6 w-6" />
          </motion.button>
        </div>
        <div className="flex flex-col space-y-4 p-4">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.3, 
                delay: index * 0.1,
                when: "beforeChildren"
              }}
              className="relative"
            >
              <Link
                to={link.to}
                spy={true}
                smooth={true}
                duration={500}
                onClick={toggleMenu}
                onSetActive={() => setActiveSection(link.to)}
                className="text-gray-300 hover:text-secondary cursor-pointer transition-colors duration-300 py-2 block"
              >
                {link.name}
                {activeSection === link.to && (
                  <motion.div
                    layoutId="mobileUnderline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-secondary"
                    initial={{ width: 0 }}
                    animate={{ width: '30%' }}
                  />
                )}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar; 