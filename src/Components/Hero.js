import React from 'react';

function Hero(props) {
    return (
      <div class="Hero w-full">
        <img src="/images/jojoChen.svg" alt="Jojo Chen" class="absolute text-right right-20 top-32 w-1/2 -z-20"/>
        <img src="/images/grid.svg" alt="grid" class="absolute text-right right-0 top-0 w-2/3 -z-20"/>
        <div class="mt-56 ml-20">
          <h1 class="text-6xl font-krona text-left w-3/5 leading-tight">Building products that <span class="text-blue-800">delight</span> and <span class="text-blue-800">empower</span>.</h1>
          <p class="text-lg text-left w-2/5 leading-tight mt-2">Hi 👋 I’m Jojo, a product manager with an entrepreneurial spirit, technical background, and an eye for design. </p>
        </div>
      </div>
    );
}
export default Hero;