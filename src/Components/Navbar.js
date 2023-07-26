
import React from 'react';
import Socials from './Socials';


function Navbar(props) {
  return (
    <div class="Navbar">
    <div class="flex justify-between my-7 mx-16">
        <div class="flex flex-row space-x-10">
          <p class="text-lg">Home</p>
          <p class="text-lg">Experience</p>
          <p class="text-lg">Projects</p>
          <p class="text-lg">Skills</p>
          <p class="text-lg">Resume</p>
          <p class="text-lg">Notes</p>
          <p class="text-lg">Contact</p>
        </div>
        <Socials/>
    </div>
    <hr class="h-0.5 bg-black"/>
    </div>
  );
}
export default Navbar; 