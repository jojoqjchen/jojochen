import React from 'react';

function Paragraph(props) {
    return (
        <div id={props.id} class="ml-20 my-60">
            <img src="/images/circleGrid.svg" alt="circle grid" class="absolute text-right right-20 w-1/3 -z-20"/>
            <h1 class="text-5xl font-krona text-left w-4/5">I’m a self starter that’s always questioning the status quo to make experiences better. 
Here are some of my past side projects...</h1>
        </div>
    );
}
export default Paragraph;