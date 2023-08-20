import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Input from './Input';

const Contact = () => {
  const [showContact, setShowContact] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        const sectionTop = contactSection.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
          setShowContact(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log(data);
  };

  useEffect(() => {
    if (showContact) {
      controls.start({ opacity: 1, x: 0 });
    }
  }, [showContact]);

  return (
    <div
      className="w3-container w3-padding-32"
      id="contact"
    >
      <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">
        Contact
      </h3>
      <p>Lets get in touch and talk about your next project.</p>
      <form
        onSubmit={handleSubmit}
        target="_blank"
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={controls}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Input
            type="text"
            placeholder="Name"
            required={true}
            name="Name"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={controls}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Input
            type="text"
            placeholder="Email"
            required={true}
            name="Email"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={controls}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <Input
            type="text"
            placeholder="Subject"
            required={true}
            name="Subject"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={controls}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <Input
            type="text"
            placeholder="Comment"
            required={true}
            name="Comment"
          />
        </motion.div>
        <motion.button
          initial={{ opacity: 0, x: -50 }}
          animate={controls}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="w3-button w3-black w3-section"
          type="submit"
        >
          <i className="fa fa-paper-plane" /> SEND MESSAGE
        </motion.button>
      </form>
    </div>
  );
};

export default Contact;
