"use client";
import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/app/lib/data";
import { useSectionInView } from "@/app/lib/hooks";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.6);
  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My Experiences</SectionHeading>

      <VerticalTimeline
        //linecolor is set to prevent weird behavior of this library.
        lineColor=""
      >
        {experiencesData.map((experienceItem, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible
              contentStyle={{
                background: "#f3f4f6",
                boxShadow: "none",
                border: "1px solid rgba(0,0,0,0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid #9ca8af",
              }}
              date={experienceItem.date}
              icon={experienceItem.icon}
              iconStyle={{
                background: "white",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">
                {experienceItem.title}
              </h3>
              <p className="font-normal !mt-0">{experienceItem.location}</p>
              <p className="!mt-1 !font-normal text-zinc-700">
                {experienceItem.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
