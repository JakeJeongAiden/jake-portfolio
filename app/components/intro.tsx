"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/app/lib/hooks";
import { useActiveSectionContext } from "@/app/context/active-section-context";
import { Background } from "./background-particle";

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
        <motion.h1
          className="flex justify-center items-baseline mt-[6rem] mb-[6rem] sm:mb-[3rem] text-2xl font-medium !leading-[1.5] sm:text-4xl"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeOut" }}
        >
          <p className="flex flex-col justify-center md:flex-row md:justify-between sm:items-baseline text-zinc-800 text-center  text-4xl font-bold">
            <span className="font-extrabold tracking-tight leading-10 text-4xl sm:text-8xl text-zinc-200 dark:text-gray-950 sm:mb-2 z-10 sm:pr-7 text-nowrap">
              Jake Jeong
            </span>
            <span className="tracking-wide font-semibold text-lg sm:text-2xl md:pr-44 leading-1 text-zinc-600 sm:pl-7">
              A Full-Stack Developer
            </span>
          </p>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeOut", delay: 0.05 }}
          className="flex justify-end mr-12 mt-6 pb-10 text-md font-thin !leading-[1.5] sm:text-xl text-zinc-800"
        >
          <div className="border-l-4 border-black/10 rounded leading-7 text-base text-wrap">
            <p className="pl-3">
              <span className="">
                Hello! I am a web developer based in California, United States.
              </span>{" "}
              <span className="font-thin">
                I deliver modern design websites that follow latest trends and
                technologies.
              </span>
            </p>
          </div>
        </motion.div>

        {/* <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeOut" }}
          className="flex justify-end mt-6 pb-36 text-md font-thin !leading-[1.5] sm:text-xl "
        >
          <span className="">c``reative and experienced with</span>{" "}
          <span className="font-normal">Next.js</span>,{" "}
          <span className="font-normal ">Typescript</span>,{" "}
          <span className="font-normal ">TailwindCSS</span>.{" "}
          <span className="font-thin ">and more...</span>.{" "}
        </motion.div> */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-center gap-3 px-4 text-lg font-medium"
        >
          <Link
            href="#contact"
            className="group bg-[#8fb996] text-white px-7 py-3 flex items-center gap-2 rounded-lg outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
          >
            Contact me here{" "}
            <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
          </Link>
          {/* Using anchor tag because we are downloading something */}

          <a
            // in nextjs you can use /public folder to store static files.
            href="/cv-a.pdf"
            download
            className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition-all cursor-pointer borderBlack dark:bg-white/10"
          >
            Download CV{" "}
            <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
          </a>
          {/* Using anchor tag because we are navigating to actual link */}

          <a
            href="https://www.linkedin.com/in/jake-jeong-801438148/"
            target="_blank"
            className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition-all cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 dark:hover:text-white/80"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://github.com/JakeJeongAiden"
            target="_blank"
            className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition-all cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 dark:hover:text-white/80"
          >
            <FaGithubSquare />
          </a>
        </motion.div>
      </section>
    </>
  );
}
