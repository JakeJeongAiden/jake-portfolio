"use client";

import { projectsData } from "@/app/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
}: ProjectProps) {
  // We need useRef for useScroll. useScroll is a hook that gives us the scroll position of an element.
  //useScroll needs to know which element to animate. To use useScroll, we need to pass a ref to the element we want to animate.
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: 0 means that the animation will start when the element is in the viewport. It should end the animation by the time viewport reaches 33 percent of the element.
    offset: ["0 1", "1.33 1"],
  });
  // useTransform: 2nd argument is the range of the input. 3rd argument is the range of the output. 0 to 1 means that the animation will start when the element is in the viewport. It should end the animation by the time viewport reaches 33 percent of the element.
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const scaleOpacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        // We can use scrollYProgress to animate the element. This setup is complicated. Memorize it. Also we are putting it inside the div element because framer-motion glitches on certain elements such as <article>.
        scale: scaleProgress,
        opacity: scaleOpacity,
      }}
      // group: means that the element and its children will share the same hover state.
      className="group mb-3 sm:mb-8 last:mb-0 "
    >
      <article
        // We need to pass the ref to the element we want to animate.
        className="relative bg-zinc-100 max-w-[42rem] borderBlack rounded-lg overflow-hidden sm:pr-8 sm:h-[20rem] mb-3   hover:bg-zinc-200 transition sm:group:even:pl-8 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white"
      >
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem] ">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-zinc-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                // tracking-wider means letter spacing.
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wide text-zinc-50 rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        {/* USE NEXT.js IMAGE COMPONENT instead of <img/> don't define width and height */}
        <Image
          // rounded-t-lg makes rounded top.
          // Tailwind also gives us pseudo classes like even and odd. 'group-even' means even index.
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2x1
        transition 
        group-hover:scale-105
        group-hover:-translate-x-3
        group-hover:-translate-y-2
        group-hover:-rotate-2
        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-2
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40
        "
          src={imageUrl}
          alt={title}
          quality={95}
        />
      </article>
    </motion.div>
  );
}
