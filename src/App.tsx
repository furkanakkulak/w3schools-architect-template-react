import Navbar from './components/Navbar';
import Header from './components/Header';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Map from './components/Map';
import Footer from './components/Footer';
import { motion, useScroll } from 'framer-motion';
function App() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="progress-bar"
      />

      <Navbar />
      <Header />
      <div
        className="w3-content w3-padding"
        style={{ maxWidth: 1564 }}
      >
        <Projects />
        <About />
        <Contact />
        <Map />
      </div>
      <Footer />
    </>
  );
}

export default App;
