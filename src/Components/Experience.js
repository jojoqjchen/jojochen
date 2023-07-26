import React from 'react';
import { FiChevronDown } from 'react-icons/fi';
import Accordion from './Accordion';
import { motion, useScroll, useTransform } from "framer-motion"

function Experience({ date, company, title, location, description, id }){
    const experienceData = [
    {
      date: 'Current',
      company: 'Expedia Group',
      title: 'Product Manager I',
      location: 'Seattle, WA',
      description: 'App growth and traveler engagement team',
    },
    {
      date: '2022',
      company: 'Expedia Group',
      title: 'Product Management Intern',
      location: 'Seattle, WA',
      description: 'Owned 3 experiments(projected $1.3M incremental value) from conception to launch following HCD principles.',
    },
    {
      date: '2022',
      company: 'IBM',
      title: 'Product Management Co-op',
      location: 'Remote',
      description: 'App growth and traveler engagement team',
    },
    {
      date: '2021',
      company: 'Deserve Inc.',
      title: 'Product Management Intern',
      location: 'Palo Alto, CA',
      description: 'Created an internal analytics dashboard that was adopted for clients, drove improvements to onboarding and engagement using insights from funnel analysis',
    },
  ];
  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [0.7, 2.5]);
    return (
        <div class="mt-20" id={id}>
            <motion.h2 class="text-2xl font-krona text-center mx-60 mb-10" style={{ scale }}>
                I have <span class="text-orange-400">experience</span> building B2B and consumer products across big corporations and startups.</motion.h2>
            <div class="bg-black flex flex-row space-x-40 justify-center py-5 h-auto">
                <img src="/images/ibm.png" alt="IBM logo" class="h-10"/>
                <img src="/images/expedia.png" alt="expedia logo" class="h-10"/>
                <img src="/images/deserve.png" alt="deserve logo" class="h-10"/>
            </div>
            <div class="accordion mx-64 mt-20">
                {experienceData.map(({ date, company, title, location, description }) => (
                <Accordion date={date} company={company} title={title} location={location} description={description}/>
                ))}
            </div>
            <motion.div class="flex flex-row justify-center w-full pt-12" whileHover={{ scale: 1.1 }}>
                <p class="font-krona pr-1 text-sm">But that's not all</p>
                <FiChevronDown class="text-xl"/>
            </motion.div>
        </div>
    );
}
export default Experience;