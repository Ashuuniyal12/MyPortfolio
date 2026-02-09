"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Ashutosh from "@/public/Ashutosh.png";
import { motion } from "framer-motion";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import ParticlesContainer from "./particles-container";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useSectionInView } from "@/lib/hooks";
export default function Intro() {
  const textParts: string[] = [
    " I ❤️ to Code and solve real world problems My focus is React (Next.js). and Salesforce",
    " I am deeply passionate about the world of technology and its endless possibilities ",
    "If you are feeling bored come and join me for a muscial 🎸 jam session .",
  ];

  const { SetActiveSection, setTimeofLastClick } = useActiveSectionContext();

  const [currentPartIndex, setCurrentPartIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  //effect for setting a diffferent string in the state for animation
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentPartIndex + 1) % textParts.length;
      setCurrentPartIndex(nextIndex);
    }, 6000); // Change to your desired interval

    return () => clearInterval(interval);
  }, [currentPartIndex,textParts.length]);

  //effect to animate the text in the state by adding the character of current strng to the state variable
  useEffect(() => {
    const currentText = textParts[currentPartIndex];
    setDisplayedText("");

    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < currentText.length) {
        setDisplayedText(currentText.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 60); // Typing speed, adjust as needed

    return () => clearInterval(typingInterval);
  }, [currentPartIndex]);

  const { ref } = useSectionInView({ sectionName: "Home", threshold: 0.75 });

  return (
    <section
      ref={ref}
      id="home"
      className="scroll-mt-[100rem] mb-20 max-w-[50rem] text-center sm:mb-0"
    >
      <ParticlesContainer />
      <div className="flex items-center justify-center">
        <div className="relative ">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "tween", duration: 0.5 }}
          >
            <Image
              src={Ashutosh}
              alt="ashutosh image "
              width="200"
              height="200"
              priority={true}
              quality="95"
              className="h-24 w-24 border-[0.25rem] border-white object-cover shadow-xl rounded-full"
            />
          </motion.div>

          <motion.span
            className=" absolute bottom-0 right-0 text-4xl "
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.7,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className=" mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I&apos;m Ashutosh.</span> I&apos;m a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">3+ year</span> of experience.
      </motion.h1>

      <div className="mb-10 mt-4 px-4 text-2xl font-medium leading-[1.5] sm:text-4xl">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {displayedText}
        </motion.span>
      </div>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center  gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition "
          onClick={() => {
            SetActiveSection("Contact");
            setTimeofLastClick(Date.now());
          }}
        >
          Contact me here
          <BsArrowRight className="opacity-70 group-hover:translate-x-4 transition" />
        </Link>

        <a
          href="/CV.pdf"
          download
          className="group cursor-pointer bg-white px-7 py-3 flex items-center gap-2 rounded-full  outline-none focus:scale-110 hover:scale-110 active:scale-105 transition border border-black/10 dark:bg-white/10  dark:text-white/70"
        >
          Download CV
          <HiDownload className=" opacity-60 group-hover:translate-y-1 dark:text-white/70" />
        </a>

        <a
          href="https://www.linkedin.com/in/ashutoshuniyal-012/"
          target="_blank"
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition border border-black/10 dark:bg-white/10 dark:text-white/70"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/Ashuuniyal12"
          target="_blank"
          className="bg-white p-4 text-gray-700 hover:text-gray-950 text-[1.35rem] flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition border border-black/10 dark:bg-white/10 dark:text-white/70"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
