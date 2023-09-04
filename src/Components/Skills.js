import React from 'react';
import { motion } from "framer-motion"

function Skills(props) {
    return (
        <div id={props.id}>
            <div class="mt-20 pl-20">
                <h1 class="text-4xl font-krona text-left">I’m a <span class="text-blue-800">lifelong learner</span>.</h1>
                <h1 class="text-4xl font-krona text-left">Here’s my toolbox so far. </h1>
                <p class="text-left w-3/5 pt-4 leading-snug">
                    My background in both UI/UX design and software development gives me a unique edge in empathizing and advocating for users as well as collaborating with my teammates. 
                </p>
            </div>
            <div>
                <div class="mx-20 text-left mt-14">
                    <h1 class="font-krona text-xl mt-2">Education</h1>
                    <p><b>UC Berkeley (August 2019-May 2023)</b></p>
                    <p>B.A. Computer Science, B.S. Business Administration</p>
                    <hr class="h-0.5 bg-black mt-6"/>
                </div>
                <div class="mx-20 text-left mt-6">
                    <h1 class="font-krona text-xl">Skills</h1>
                    <ul class="list-disc ml-4 mt-2">
                        <li>Agile Methodology</li>
                        <li>Human Centered Design</li>
                        <li>A/B testing</li>
                        <li>Usability testing</li>
                    </ul>
                    <hr class="h-0.5 bg-black mt-6"/>
                </div>
                <div class="mx-20 text-left mt-6">
                    <h1 class="font-krona text-xl">Tools</h1>
                    <ul class="list-disc ml-4 mt-2">
                        <li>Figma</li>
                        <li>JIRA</li>
                        <li>Amplitude</li>
                        <li>Mixpanel</li>
                        <li>Excel</li>
                    </ul>
                    <hr class="h-0.5 bg-black mt-6"/>
                </div>
                <div class="mx-20 text-left mt-6">
                    <h1 class="font-krona text-xl">Programming Languages</h1>
                    <ul class="list-disc ml-4 mt-2">
                        <li>Python</li>
                        <li>SQL</li>
                        <li>HTML/CSS</li>
                        <li>Javascript</li>
                        <li>React.js</li>
                        <li>Java</li>
                        <li>C</li>
                    </ul>
                    <hr class="h-0.5 bg-black mt-6"/>
                </div>
            </div>
            <a href="https://drive.google.com/file/d/1nVguacFDHQz8yXirBpScRqIujsmNrFUX/view?usp=sharing" target="blank">
            <motion.button 
                class="rounded-full outline py-2 px-10 mt-10 font-krona mb-20 hover:text-blue-600" 
                whileHover={{ scale: 1.2 }} 
                whileTap={{ scale: 0.9 }}
            >Resume</motion.button>
            </a>
        </div>
    );
}
export default Skills;