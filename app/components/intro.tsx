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
import { Background } from "./background-particle";
import MouseScrollIcon from "./ui/mouse-scroll";

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
        className="relative px-4 md:grid md:min-h-screen md:place-items-center flex flex-col items-center mx-0 scroll-mt-[100rem] md:mb-28 "
      >
        <div className="mx-auto max-w-max justify-start">
          <motion.h1
            className="pt-40 sm:pt-60 md:pt-30 lg:pt-40 flex justify-center items-center flex-col font-medium !leading-[1.5] sm:flex-nowrap sm:flex-row sm:items-baseline"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeOut" }}
          >
            <span className="text-5xl sm: font-extrabold tracking-tight leading-10 sm:text-5xl md:text-6xl lg:text-8xl text-zinc-100 dark:text-blue-400 sm:mb-2 z-10 sm:px-1 pb-1 sm:pb-0">
              Jake Jeong
            </span>
            <span className="pb-3 sm:pb-0 text-md tracking-wide font-semibold leading-1 text-zinc-600 dark:text-zinc-200 sm:px-1 sm:text-xl">
              A Full-Stack Developer
            </span>
          </motion.h1>

          <div className="flex justify-end">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeOut", delay: 0.05 }}
              className="border-zinc-500 sm:w-2/3 mx-auto md:mx-0 md:w-2/3 sm:border-l-4 mb-4 md:mb-4 "
            >
              <p className="text-sm px-5 text-center sm:text-start sm:px-2 xs:px-0 sm:pl-4 text-md md:text-lg font-thin text-white opacity-90 dark:text-zinc-200">
                Hi there! I build modern websites that follow latest trends and
                technologies. I am based in{" "}
                <span className="font-normal">California</span>,{" "}
                <span className="font-normal">United States</span>.
              </p>
            </motion.div>
          </div>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium pb-36 md:pb-0 text-white/50"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center justify-between gap-3 ">
              <a
                href="https://www.linkedin.com/in/jake-jeong-801438148/"
                target="_blank"
                className="text-white/50 text-[2.4rem] focus:scale-110 hover:scale-110 hover:text-white/90 active:scale-105 transition"
              >
                <BsLinkedin />
              </a>
              <a
                href="https://github.com/JakeJeongAiden"
                target="_blank"
                className="text-white/50 text-[2.7rem] hover:text-white/90 focus:scale-110 hover:scale-110  active:scale-105 transition"
              >
                <FaGithubSquare />
              </a>
            </div>
            <Link
              href="#contact"
              className="group text-[0.9rem] h-[3rem] w-[9rem] bg-green-300/60 backdrop-blur-sm text-white px-5 py-3 flex items-center gap-2 rounded-lg outline-none focus:scale-110 hover:scale-110 hover:bg-green-300/90 active:scale-105 transition text-nowrap borderBlack"
              onClick={() => {
                setActiveSection("Contact");
                setTimeOfLastClick(Date.now());
              }}
            >
              Contact Me!
              <PiPhoneDuotone className="group-hover:translate-x-1 transition" />
            </Link>
            <a
              // in nextjs you can use /public folder to store static files.
              href="/cv-a.pdf"
              download
              className="group text-[0.9rem] px-5 py-3 flex items-center justify-center gap-2 h-[3rem] w-[9rem] bg-cyan-300/60 text-white rounded-lg outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-cyan-400 active:scale-105 dark:bg-opacity-50 disabled:scale-100 disabled:bg-opacity-65 borderBlack
              backdrop-blur-sm"
            >
              Resume
              <HiDownload className="text-xs opacity-70 transition-all group-hover:translate-x-1/2 group-hover:animate-bounce" />
            </a>
          </motion.div>
        </div>

        <a href="#about">
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="absolute bottom-2 animate-bounce hidden md:block"
          >
            <MouseScrollIcon />
          </motion.div>
        </a>
      </section>
    </>
  );
}
