import React from 'react';
import { motion } from "framer-motion"

function Contact(props) {
    return (
        <div id={props.id}>
            <hr class="h-0.5 bg-black mt-6"/>
            <div class="my-20">
                <h1 class="text-7xl font-krona">Let's Talk!</h1>
                <form class="mx-64">
                    {/* Name and email */}
                    <div class="mt-10">
                        <div class="text-left">
                            <p class="pb-1">Name</p>
                            <input type="text" id="name" class="w-full text-xl px-5 py-3 border-2 border-stone-800 rounded-xl"/>
                        </div>
                        <div class="text-left mt-3">
                            <p class="pb-1">Email</p>
                            <input type="text" id="email" class="w-full text-xl px-5 py-3 border-2 border-stone-800 rounded-xl"/>
                        </div>
                    </div>
                    {/* Message */}
                    <div class="text-left mt-3 ">
                        <p class="pb-1">Message</p>
                        <textarea rows = "5" id="message" class="w-full text-xl px-5 py-3 border-2 border-stone-800 rounded-xl">
                        </textarea>
                    </div>
                </form>
                <motion.button class="rounded-full outline py-2 px-10 mt-10 font-krona mb-20 hover:text-blue-600" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>Send</motion.button>
            </div>
            
        </div>
    );
}
export default Contact;