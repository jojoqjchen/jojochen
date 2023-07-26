import React from 'react';
import Socials from './Socials';
import { AiOutlineHeart } from 'react-icons/ai';

function Footer(props) {
    return (
        <div class="Nav bg-orange-400">
            <hr class="h-0.5 bg-black"/>
            <div class="flex justify-between mx-20 py-8">
                <Socials/>
                <div class="flex flex-row items-center space-x-1">
                    <p>Designed and developed with </p>
                    <AiOutlineHeart/>
                    <p>by Jojo Chen.</p>
                </div>
            </div>
        </div>
    );
}
export default Footer;