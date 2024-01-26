//client side rendering allows us to use framer-motion (useEffect, useState, etc.)
//Has downsides but it's fine for small project like personal portfolio.
"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/app/lib/data"; //@ is an alias for the root directory.
import Link from "next/link";
import { clsx } from "clsx";
import { useActiveSectionContext } from "@/app/context/active-section-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    // Motions are used to animate elements. For functional components, we use motion.nav. For background, we use motion.div.
    <header className="z-[999] relative">
      <motion.div
        //`left-1/2 -translate-x-1/2`. This is a css trick to center the element.
        className="fixed top-0 left-1/2 -translate-x-1/2 h-[4.5rem] w-full rounded-none border border-white/40 bg-zinc-100/35 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[2.4rem] sm:w-[35rem] sm:rounded-full dark:bg-slate-700 dark:border-black/40 dark:bg-opacity-75"
        // Initial position of the element should sit -100: starts at 100 pixels higher.
        // x:"-50%" centers the element since framer-motion overwrites the css property.
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        // animate to 0: ends at 0 pixels higher.
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav
        // Copying the same style from the div above to make it look like it's the same element.
        className="flex fixed top-[0.15rem] left-1/2 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0"
      >
        {/* These are links inside the nav */}
        <ul className="flex w-[24rem] flex-wrap items-center justify-center px-3 sm:px-0 gap-y-0 sm:gap-y-1 text-[0.9rem] my-[-7px] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5 ">
          {links.map((link) => (
            <motion.li
              className="sm:h-3/4 flex items-center justify-center relative"
              key={link.hash}
              // Similar to keyframe 0%
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                // Link is a component from next.js. It's similar to <a> tag. We use link instead of <a> tag because it's faster and it's better for SEO.
                // Wrap {} around template literal [``].
                className={clsx(
                  "flex w-full items-center justify-center px-3 pt-2 sm:py-3 hover:text-slate-950 transition dark:text-zinc-500 dark:hover:text-zinc-300",
                  {
                    "text-zinc-900": activeSection === link.name,
                  }
                )}
                //this is how we link to a section in the same page.
                href={link.hash}
                // This is how we change the active section.
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}
                {link.name === activeSection && (
                  // This is the underline for the active section. (conditional rendering)
                  <motion.span
                    className="h-6 sm:h-7 bg-zinc-200 rounded-full absolute inset-[0.40rem] sm:inset-[0.155rem] -z-10 dark:bg-zinc-800"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
