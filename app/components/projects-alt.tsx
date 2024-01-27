"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/app/lib/data";
import Project from "./project";

import { useSectionInView } from "@/app/lib/hooks";

// makes typing easier. This is the type of the first element in the array.
// This is as as specific as we can get.

export default function ProjectsAlt() {
  //Copy below ===============================
  const { ref } = useSectionInView("Projects", 0.5);

  //Copy above ===============================
  return (
    <section ref={ref} id="projects" className="scroll-mt-[7rem] mb-28">
      <SectionHeading className="">My Projects</SectionHeading>

      <div
      //This is the wrapper for the Projects
      >
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
