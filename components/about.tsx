"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import SectionHeadig from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView({ sectionName: "About", threshold: 0.75 });

  return (
    <motion.section
      ref={ref}
      className="mb-20 max-w-[45rem] text-center leading-8 sm:mb-0 scroll-mt-28"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.9 }}
      id="about"
    >
      <SectionHeadig> About me</SectionHeadig>
      <p className="mb-3 ">
        My project portfolio speaks to my versatility as a developer. From
        crafting a{" "}
        <span className="italic ">comprehensive virtual learning platform</span>{" "}
        utilizing the MERN stack to building a{" "}
        <span className="italic ">social media app</span> tailored for college
        students, I have honed my skills across various technologies. Beyond
        coding, my soft skills, such as{" "}
        <span className="font-medium">effective time management</span> and{" "}
        <span className="font-medium">collaborative teamwork</span>, have been
        invaluable in every endeavor
      </p>
      <p>
        Outside of my academic and professional pursuits, I find joy in graphic
        designing, playing the guitar, and embarking on new travel adventures.
        My achievements, such as clinching a spot in the top 20 teams during the
        CodeZilla Hackathon and participating in Amazon ML Summer School,
        reflect my commitment to continuous growth and learning. Armed with a
        deep understanding of programming languages, frameworks, and databases,
        I am eager to contribute my knowledge to the dynamic and ever-evolving
        field of technology.
      </p>
    </motion.section>
  );
}
