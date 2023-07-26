import React from 'react';
import { motion } from "framer-motion"

function ProjectCard(props) {
    return (

        <motion.div class="w-1/2 bg-white rounded-2xl outline text-left overflow-hidden flex flex-col" whileHover={{ scale: 1.05 }}>
            <img src="/images/sample-project.png" alt="project preview" class="w-max"/>
            <div class="m-8">
                <h3 class="text-2xl font-krona">The Codex</h3>
                <p>Redesigned the learning experience of a python learning platform with 600,000+ students</p>
            </div>
        </motion.div>
    );
}
export default ProjectCard;