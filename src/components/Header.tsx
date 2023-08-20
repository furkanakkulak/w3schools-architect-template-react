import React from 'react';
import architect from '../assets/architect.jpg';
import { motion } from 'framer-motion';

const Header = () => {
  const containerVariants = {
    hidden: {
      y: -50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.3,
      },
    },
  };

  const textVariants = {
    hidden: {
      x: -50,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.6,
      },
    },
  };

  return (
    <motion.header
      className="w3-display-container w3-content w3-wide"
      style={{ maxWidth: 1500 }}
      id="home"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <img
        className="w3-image"
        src={architect}
        alt="Architecture"
        width={1500}
        height={800}
      />
      <div className="w3-display-middle w3-margin-top w3-center">
        <motion.h1
          className="w3-xxlarge w3-text-white"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          <span className="w3-padding w3-black w3-opacity-min">
            <b>BR</b>
          </span>{' '}
          <span className="w3-hide-small w3-text-light-grey">Architects</span>
        </motion.h1>
      </div>
    </motion.header>
  );
};

export default Header;
