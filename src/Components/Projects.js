import React from 'react';
import ProjectCard from './ProjectCard';
function Projects(props) {
    return (
        <div class="mx-20" id={props.id}>
            <div class="flex flex-row space-x-9">
                <ProjectCard/>
                <ProjectCard/>
            </div>
            <div class="flex flex-row space-x-9 mt-9">
                <ProjectCard/>
                <ProjectCard/>
            </div>
        </div>
    );
}
export default Projects;