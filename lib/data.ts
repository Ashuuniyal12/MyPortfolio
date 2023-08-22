import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import collegera from "@/public/collegeEra.png";
import globaloneness from "@/public/globaloneness.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated frrom Geaphic Era Hill University",
    location: "Dehradun, India",
    description:
      "I am undergoing my graduation in Computer Science and Engineering from Graphic Era Hill University, Dehradun, India. I have learned many things during my graduation and also worked on many projects. I have also done an internship in a startup company.",
    icon: React.createElement(LuGraduationCap),
    date: "Sept 2020 - Ongoing",
  },
  {
    title: "Front-End Developer",
    location: "Work from Home",
    description:
      "I have worked as a Front-End Developer in a startup company. I have worked on many projects and also learned many things during my internship",
    icon: React.createElement(CgWorkAlt),
    date: "May 2023 - Oct 2023",
  },
] as const;

export const projectsData = [
  {
    title: "CollegeEra",
    description:
      "Created online platform designed exclusively for college students seeking to foster connections, enhance learning experiences, and create a collaborative community. ",
    tags: ["React", "socket.io", "Tailwind", "Redux","Node.js","Express"],
    imageUrl: collegera,
  },
  {
    title: "EduConnect",
    description:
      'created a virtual learning platform designed to transform the educational experience by offering a comprehensive suite of features and functionalities that enhance engagement, streamline administrative tasks, and provide a holistic learning experience.',
    tags: ["React",  "MongoDB", "Tailwind", "Express","ApexCahrrts","Redux"],
    imageUrl: globaloneness,
  },
  
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "Python",
  "Django",
  "Framer Motion",
] as const;