"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { FaGlobeAmericas } from "react-icons/fa";

type ProjectsProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  live
}: ProjectsProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleOpacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  return (
    <motion.div
      className="group sm:pr-8 mb-3 sm:mb-8 last:mb-0"
      style={{
        scale: scaleProgress,
        opacity: scrollYProgress,
      }}
      ref={ref}
    >
      <section className=" relative bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg sm:h-[20rem] sm:group-even:pl-8 overflow-hidden hover:bg-gray-200 transition dark:bg-white/10 dark:hover:bg-white/20 dark:text-white">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem] ">
          <div className="flex gap-3 items-center ">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <a  className= "hover:text-xl flex items-center gap-1"  target= "_blank" href={live}>Demo<FaGlobeAmericas/></a>
          
          </div>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70 text-[14px]">
            {description}
          </p>

          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7]  dark:text-white/70   text-white px-4 py-2 text-[0.7rem]  upprecase tracking-wider rounded-full"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Image
          src={imageUrl}
          alt="projects i workd on"
          quality={95}
          className=" hidden sm:block absolute top-8  -right-40 w-[28.25rem] rounded-t-lg shadow-2xl transition
           group-even:right-[initial] 
           group-even:-left-40

           group-hover:-translate-x-4 
           group-hover:translate-y-4 
           group-hover:-rotate-2 

           group-even:group-hover:translate-x-4 
           group-even:group-hover:translate-y-4 
           group-even:group-hover:rotate-2 

           group-hover:scale-105 "
        />
      </section>
    </motion.div>
  );
}
