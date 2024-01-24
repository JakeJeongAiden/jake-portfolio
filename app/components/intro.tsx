"use client";

import { PiPhoneDuotone } from "react-icons/pi";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/app/lib/hooks";
import { useActiveSectionContext } from "@/app/context/active-section-context";
import { PiPhoneThin } from "react-icons/pi";
import { Background } from "./background-particle";
import { IoMdDownload } from "react-icons/io";

/* ================= Note =================

*/

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <>
      <Background />

      <section
        ref={ref}
        id="home"
        className="mb-28 mx-0 sm:mb-0 scroll-mt-[100rem] relative"
      >
        <div className="flex items-center justify-center">
          <div className="relative ">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                // tween is smooth non bouncing animation.
                type: "tween",
                duration: 0.2,
              }}
            >
              {/* <Image
              src="/profile-picture.jpg"
              alt="Jake Jeong's Portrait picture"
              width="500"
              height="500"
              quality="95"
              priority={true}
              className="h-28 w-28 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            /> */}

              {/* <motion.span
            className="absolute bottom-0 right-0 text-1xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            // transition is optional but it's recommended to use it for better user experience.
            transition={{
              // spring is bouncy animation.
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span> */}
            </motion.div>
          </div>
        </div>

        <div className="mx-auto max-w-max">
          <motion.h1
            className="items-baseline mt-[7rem] mb-[4rem] sm:mb-[2rem] text-2xl font-medium !leading-[1.5] sm:text-4xl"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeOut" }}
          >
            <p className="md:flex-row md:justify-between sm:items-baseline text-zinc-800 text-center  text-4xl font-bold">
              <span className="font-extrabold tracking-tight leading-10 text-4xl sm:text-8xl text-zinc-100 dark:text-gray-950 sm:mb-2 z-10 sm:pr-3 text-nowrap">
                Jake Jeong
              </span>
              <span className="tracking-wide font-semibold text-lg sm:text-2xl md:pr-44 leading-1 text-zinc-600 sm:pl-3">
                A Full-Stack Developer
              </span>
            </p>
          </motion.h1>

          <div className="flex justify-end pb-5">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeOut", delay: 0.05 }}
              className="border-zinc-500 sm:w-2/3 sm:border-l-4"
            >
              <p className="py-2 pl-8 text-xl font-extralight text-zinc-200 dark:text-slate-300">
                Hi there! I build modern websites that follow latest trends and
                technologies. I am based in{" "}
                <span className="font-normal">California</span>,{" "}
                <span className="font-normal">United States</span>.
              </p>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-center gap-3 px-4 text-lg font-medium"
        >
          <Link
            href="#contact"
            className="group bg-cyan-300/60 text-white px-7 py-3 flex items-center gap-2 rounded-lg outline-none focus:scale-110 hover:scale-110 hover:bg-yellow-300/50 active:scale-105 transition"
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
          >
            Contact Me!
            <PiPhoneDuotone className="group-hover:translate-x-1 transition" />
          </Link>
          {/* Using anchor tag because we are downloading something */}
        </motion.div>

        <div className="text-white left-1/2"></div>
      </section>
    </>
  );
}
