import './App.css';
import React from 'react';
import Hero from './Components/Hero';
import Experience from './Components/Experience';
import Skills from './Components/Skills';
import Paragraph from './Components/Paragraph';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import { Link } from "react-scroll";
import Socials from './Components/Socials';
import { motion } from "framer-motion"
import { FiChevronDown } from 'react-icons/fi';

function App() {
  return (
    <div class="App">
      {/* Navbar */}
      <div class="Navbar">
        <div class="flex justify-between my-7 mx-16">
          <div class="flex flex-row space-x-10">
            <Link to="hero" spy={true} smooth={true} offset={50} duration={600} class="text-lg hover:text-blue-800">Home</Link>
            <Link to="experience" spy={true} smooth={true} offset={50} duration={600} class="text-lg hover:text-blue-800">Experience</Link>
            <Link to="projects" spy={true} smooth={true} offset={50} duration={600} class="text-lg hover:text-blue-800">Projects</Link>
            <Link to="skills" spy={true} smooth={true} offset={50} duration={600} class="text-lg hover:text-blue-800">Skills</Link>
            <a href="https://drive.google.com/file/d/1nVguacFDHQz8yXirBpScRqIujsmNrFUX/view?usp=sharing" target="blank" class="text-lg hover:text-blue-600">Resume</a>
            <p class="text-lg hover:text-blue-600">Notes</p>
            <Link to="contact" spy={true} smooth={true} offset={50} duration={600} class="text-lg hover:text-blue-800">Contact</Link>
          </div>
          <Socials/>
        </div>
        <hr class="h-0.5 bg-black"/>
      </div>
      <Hero id="hero"/>
      <Link to="experience" spy={true} smooth={true} offset={50} duration={600}>
        <motion.div class="flex flex-row justify-center w-full pt-12" whileHover={{ scale: 1.1 }}>
        <p class="font-krona pr-1 text-sm">Let me prove it</p>
        <FiChevronDown class="text-xl"/>
      </motion.div>
      </Link>
      <motion.div />
      <Experience id="experience"/>
      <Link to="paragraph" spy={true} smooth={true} offset={50} duration={600}>
        <motion.div class="flex flex-row justify-center w-full pt-12" whileHover={{ scale: 1.1 }}>
        <p class="font-krona pr-1 text-sm">But that's not all</p>
        <FiChevronDown class="text-xl"/>
      </motion.div>
      </Link>
      <Paragraph id="paragraph"/>
      <Projects id="projects"/>
      <Skills id="skills"/>
      <Contact id="contact"/>
      <Footer />
    </div>
  );
}

export default App;
