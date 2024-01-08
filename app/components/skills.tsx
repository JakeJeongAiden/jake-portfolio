"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/app/lib/data";
import { useSectionInView } from "@/app/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills", 0.5);
  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-zinc-800">
        {skillsData.map((skill, index) => (
          <motion.li
            //variants is framer motion property that can use extracted property.
            variants={fadeInAnimationVariants}
            className="bg-white borderBlack rounded-xl px-5 py-3"
            key={index}
            initial="initial"
            //whileInView is framer motion property will allow animation to happen when in view.
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
