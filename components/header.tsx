//client side rendering allows us to use framer-motion (useEffect, useState, etc.)
//Has downsides but it's fine for small project like personal portfolio.
"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data"; //@ is an alias for the root directory.
import Link from "next/link";

export default function Header() {
  return (
    // Motions are used to animate elements. For functional components, we use motion.nav. For background, we use motion.div.
    <header className="z-[999] relative">
      <motion.div
        //`left-1/2 -translate-x-1/2`. This is a css trick to center the element.
        className="fixed top-0 left-1/2 -translate-x-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-35 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[2.4rem] sm:w-[36rem] sm:rounded-full"
        // Initial position of the element should sit -100: starts at 100 pixels higher.
        // x:"-50%" centers the element since framer-motion overwrites the css property.
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        // animate to 0: ends at 0 pixels higher.
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav
        // Copying the same style from the div above to make it look like it's the same element.
        className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0"
      >
        {/* These are links inside the nav */}
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] my-[-7px] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              // Similar to keyframe 0%
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className="flex w-full items-center justify-center px-3 py-3 hover:text-slate-950 transition"
                href={link.hash}
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
