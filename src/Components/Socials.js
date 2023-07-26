
import React from 'react';
import { BsLinkedin, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import { motion } from "framer-motion"

function Socials(props) {
  return (
    <div class="flex flex-row space-x-5">
        <motion.a href="https://www.linkedin.com/in/jojochen/" target="blank" whileHover={{ scale: 1.2 }}><BsLinkedin class="text-3xl hover:text-blue-600"/></motion.a>
        <motion.a href="https://github.com/jojoqjchen" target="blank" whileHover={{ scale: 1.2 }}><BsGithub class="text-3xl hover:text-blue-600"/></motion.a>
        <motion.a href="https://www.instagram.com/jajajojo.art/" target="blank " whileHover={{ scale: 1.2 }}><BsInstagram class="text-3xl hover:text-blue-600"/></motion.a>
        <motion.a href="https://twitter.com/jajajojohoho" target="blank" whileHover={{ scale: 1.2 }}><BsTwitter class="text-3xl hover:text-blue-600"/></motion.a>
    </div>
  );
}
export default Socials; 