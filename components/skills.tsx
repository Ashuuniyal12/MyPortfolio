"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeadig from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

const fadeInAnimationVariants ={
    initial :{
        opacity:0,
        y:100

    },
    animate:(index: number)=>({
        opacity:1,
        y:0,
        transition:{
            delay:index*0.05,
        },
    }),
}

export default function Skills() {
  const { ref } = useSectionInView({ sectionName: "Skills", threshold: 0.75 });
  return (
    <section ref={ref} id= "skills" className="max-w-[53rem] scroll-mt-28  text-center ">
      <SectionHeadig>My skills</SectionHeadig>

      <ul className="flex flex-wrap justify-center text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white border border-black/[0.1] rounded-xl px-5 py-3 m-1 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
