import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import map from '../assets/map.jpg';

const Map = () => {
  const [isVisible, setIsVisible] = useState(false);
  const mapControls = useAnimation();

  const handleScroll = () => {
    const mapSection = document.getElementById('map');
    if (mapSection) {
      const sectionTop = mapSection.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (sectionTop <= windowHeight * 0.8) {
        setIsVisible(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      mapControls.start({ opacity: 1, y: 0 });
    }
  }, [isVisible, mapControls]);

  return (
    <div
      className="w3-container"
      id="map"
    >
      <motion.img
        src={map}
        className="w3-image"
        style={{ width: '100%' }}
        initial={{ opacity: 0, y: 50 }}
        animate={mapControls}
        transition={{ duration: 1, delay: 0.3 }}
      />
    </div>
  );
};

export default Map;
