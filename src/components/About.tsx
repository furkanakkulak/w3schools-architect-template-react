import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import team1 from '../assets/team1.jpg';
import team2 from '../assets/team2.jpg';
import team3 from '../assets/team3.jpg';
import team4 from '../assets/team4.jpg';

const About = () => {
  interface AboutMember {
    name: string;
    title: string;
    image: string;
  }

  const aboutMembers: AboutMember[] = [
    {
      name: 'John Doe',
      title: 'CEO & Founder',
      image: team2,
    },
    {
      name: 'Jane Doe',
      title: 'Architect',
      image: team1,
    },
    {
      name: 'Mike Ross',
      title: 'Architect',
      image: team3,
    },
    {
      name: 'Dan Star',
      title: 'Architect',
      image: team4,
    },
  ];

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const memberVariants = {
    hidden: {
      y: 20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const [showMembers, setShowMembers] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        const sectionTop = aboutSection.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
          setShowMembers(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className="w3-container w3-padding-32"
        id="about"
      >
        <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">
          About
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
      </div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={showMembers ? 'visible' : 'hidden'}
        className="w3-row-padding w3-grayscale"
      >
        {aboutMembers.map((member, i) => (
          <motion.div
            key={i}
            variants={memberVariants}
            className="w3-col l3 m6 w3-margin-bottom"
          >
            <img
              src={member.image}
              alt={member.name}
              style={{ width: '100%' }}
            />
            <h3>{member.name}</h3>
            <p className="w3-opacity">{member.title}</p>
            <p>
              Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
              sodales pellentesque elementum.
            </p>
            <p>
              <button className="w3-button w3-light-grey w3-block">
                Contact
              </button>
            </p>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default About;
