import React from "react";
import { CgWorkAlt } from "react-icons/cg";;
import { LuGraduationCap } from "react-icons/lu";
import collegera from "@/public/collegeEra.png";
import globaloneness from "@/public/globaloneness.png";
import dashboard from "@/public/dashboard.png";
import summerizer from "@/public/summerizer.png";
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
    title: "Graduating from Graphic Era Hill University",
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
    live: "https://collegeera.netlify.app"
  },
  {
    title: "EduConnect",
    description:
      'created a virtual learning platform designed to transform the educational experience by offering a comprehensive suite of features and functionalities that enhance engagement, streamline administrative tasks, and provide a holistic learning experience.',
    tags: ["React",  "MongoDB", "Tailwind", "Express","ApexCahrrts","Redux"],
    imageUrl: globaloneness,
    live: "https://globaloneness.netlify.app/home"
  },
  {
    title: "AI Articles & Website Summarizer",
    description:
      'Simplify your reading with Summize , an article summarizer that transfrom lengthy articles into clear & consise summaries',
    tags: ["React",  "Context", "Tailwind", "OpenAI","NextJS"],
    imageUrl: summerizer,
    live: "https://gpt-ai-summarizer.vercel.app/"
  },
  {
    title: "Dashboard",
    description:
      'created a mordern dashboar using chart.js ,apex chart in react and created a mordern looking ui  .',
    tags: ["React", "Tailwind", "CSS","ApexCahrrts","JS"],
    imageUrl: dashboard,
    live: "https://ultimate-resource-kit-demo.netlify.app/"
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