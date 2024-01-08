"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              // tween is smooth non bouncing animation.
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=368&h=368&q=100"
              alt="Ricardo portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
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
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <p className="font-bold uppercase leading-10 text-4xl text-zinc-400">
          Jake Jeong
        </p>{" "}
        <span>A </span>
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">experiences </span> in{" "}
        <span className="font-bold underline">Next.js</span>,{" "}
        <span className="font-bold underline">Javascript</span>,{" "}
        <span className="font-bold underline">TailwindCSS</span>,{" "}
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex flex-col sm:flex-row justify-center gap-3 px-4 text-lg font-medium"
      >
        <Link
          href="#contact"
          // active:scale-105 to make it look like it's being pressed.
          className="group bg-zinc-900 text-zinc-50 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-zinc-950 active:scale-105 transition cursor-pointer"
        >
          {/* de-emphasizing icons next to texts */}
          Contact Me Here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        {/* Using anchor tag because we are downloading something */}
        <a
          // in nextjs you can use /public folder to store static files.
          href="/CV.pdf"
          download
          className="group bg-zinc-100 text-zinc-900 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-zinc-100 active:scale-105 transition cursor-pointer border-black/20"
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        {/* Using anchor tag because we are navigating to actual link */}

        <a
          href="https://www.linkedin.com/in/jake-jeong-801438148/"
          target="_blank"
          className="bg-zinc-100 text-zinc-700 p-4 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-zinc-100 hover:text-zinc-900 active:scale-105 transition cursor-pointer border-black/20"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/JakeJeongAiden"
          target="_blank"
          className="bg-zinc-100 text-zinc-700 p-4 flex items-center gap-2 text-[1.35rem] rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-zinc-900  hover:bg-zinc-100 active:scale-105 transition cursor-pointer border-black/20"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
