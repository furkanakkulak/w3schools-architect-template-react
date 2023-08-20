import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import house5 from '../assets/house5.jpg';
import house2 from '../assets/house2.jpg';
import house3 from '../assets/house3.jpg';
import house4 from '../assets/house4.jpg';

const Projects = () => {
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Tek tek görünme aralığı
      },
    },
  };

  const projectVariants = {
    hidden: {
      y: 20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const projects = [
    { title: 'Summer House', image: house5 },
    { title: 'Brick House', image: house2 },
    { title: 'Renovated', image: house3 },
    { title: 'Barn House', image: house4 },
    { title: 'Summer House', image: house2 },
    { title: 'Brick House', image: house5 },
    { title: 'Renovated', image: house4 },
    { title: 'Barn House', image: house3 },
  ];

  const [showProjects, setShowProjects] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const projectSection = document.getElementById('projects');
      if (projectSection) {
        const sectionTop = projectSection.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
          setShowProjects(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className="w3-container w3-padding-32"
      id="projects"
    >
      <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">
        Projects
      </h3>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={showProjects ? 'visible' : 'hidden'}
        className="w3-row-padding"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={projectVariants}
            className="w3-col l3 m6 w3-margin-bottom"
          >
            <div className="w3-display-container">
              <div className="w3-display-topleft w3-black w3-padding">
                {project.title}
              </div>
              <img
                src={project.image}
                alt="House"
                style={{ width: '100%' }}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
