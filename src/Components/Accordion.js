import React, { useState } from 'react';
import { BiChevronDownCircle, BiChevronUpCircle } from 'react-icons/bi';

function Accordion({ date, company, title, location, description }){
    const [isActive, setIsActive] = useState(false);
    return (
        <div class="accordion-item">
            <div class="title flex flex-row justify-between content-center flex-wrap my-8 mx-10 hover:text-blue-600"
                onClick={() => setIsActive(!isActive)}
            >
                <div class="font-krona text-2xl">{date}</div>
                <div><b>{company}</b></div>
                <div>{title}</div>
                <div>{location}</div>
                <div class="text-3xl">
                    {isActive ? <BiChevronUpCircle/> : <BiChevronDownCircle/>}
                </div>
            </div>
            <hr class="h-0.5 bg-black"/>
            {isActive && 
                <div class="content bg-stone-200">
                    <div class="py-4 text-left mx-10">{description}</div>
                    <hr class="h-0.5 bg-black"/>
                </div>
                
            }
        </div>
    );
}
export default Accordion;