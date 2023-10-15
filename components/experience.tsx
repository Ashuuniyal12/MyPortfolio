"use client";

import React from 'react'
import SectionHeadig from './section-heading'
import { useSectionInView } from '@/lib/hooks';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '@/lib/data';
import { useTheme } from '@/context/theme-constext';


export default function Experience() {
    const { ref } = useSectionInView({ sectionName: "Experience", threshold: 0.5 });
  const {theme } =useTheme()
  
    return (
    <section id="experience" ref={ref} className="scroll-mt-28">
        <SectionHeadig>My experience</SectionHeadig>
        <VerticalTimeline lineColor={theme==="light" ?'#e5e7eb':"rgba(255,255,255,0.2)"}>
           {
            experiencesData.map((experience, index) => (
               <React.Fragment  key={index}>
                 <VerticalTimelineElement
                    contentStyle={{
                         background: theme==='light' ?' #f3f4f6' : "rgba(255,255,255,0.05)", 
                         boxShadow: "none",
                         border :  theme==='light' ?"1px solid rgba(0,0,0,0.05)":"rgba(255,255,255,0.2)",
                         textAlign: "left",
                         padding: "1.3rem .2rem"

                        }}
                    contentArrowStyle={{ borderRight:theme==="light"? '0.4rem solid  #9ca3af': "0.4rem solid rgba(255,255,255,0.5)" }}
                    date={experience.date}
                    iconStyle={{ background: theme==="light"?'#fff': "rgba(255,255,255,0.15)", color: '#000' ,fontSize: '1.3rem'}}
                    icon={experience.icon}
                >
                    <h3 className="font-semibold capitalize">{experience.title}</h3>
                    <p className='font-normal !mt-0'>
                    {experience.location}
                    </p>
                    <p className='!mt-0 font-normal font-gray-700 dark:text-white/75'>
                    {experience.description}
                    </p>
                </VerticalTimelineElement>
               </React.Fragment>
            ))
           }
        </VerticalTimeline>

    </section>
  )
}
