"use client";

import React from "react";
import SectionHeadig from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project-single";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView({ sectionName: "Projects", threshold: 0.55 });

  return (
    <section ref={ref} id="projects" className="scroll-mt-28">
      <SectionHeadig>My projects</SectionHeadig>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
