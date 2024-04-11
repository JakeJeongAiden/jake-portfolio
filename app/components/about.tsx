"use client";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { useSectionInView } from "@/app/lib/hooks";
import Image from "next/image";
import { Meteors } from "./ui/meteor";

export default function About() {
  const { ref } = useSectionInView("About", 0.5);

  return (
    <motion.section
      id="about"
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.1,
      }}
      //scroll-mt means the element will scroll up to the margin
      className="mb-28 text-center leading-8 sm:mb-40
      scroll-mt-[7rem] w-full
      "
    >
      <div className="w-full px-1 py-9 flex flex-col items-center bg-zinc-800/30 justify-center sm:border-t sm:border-b border-white/5  backdrop-blur-sm dark:bg-zinc-900/50 ">
        <h2 className="text-zinc-200 text-4xl font-bold capitalize mb-8 drop-shadow-md dark:text-zinc-100">
          <Typewriter
            options={{
              strings: ["About", "Me"],
              autoStart: true,
              loop: true,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString("About Me")

                .pauseFor(2500)
                .deleteAll()

                .start();
            }}
          />
        </h2>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            // tween is smooth non bouncing animation.
            type: "tween",

            duration: 0.2,
            delay: 0.12,
          }}
        >
          <Image
            src="/profile-picture.png"
            alt="Jake Jeong's Portrait picture"
            width="900"
            height="900"
            quality="95"
            priority={true}
            className="h-52 w-52 rounded-full object-cover border-[0.35rem] border-white/80 shadow-xl"
          />
        </motion.div>

        <div
          className="max-w-[1100px] py-8 sm:px-8 px-1 mb-2 mt-7 
        sm:rounded-tr-lg sm:rounded-bl-lg  md:rounded-tr-[100px] md:rounded-bl-[100px] sm:rounded-tl-lg sm:rounded-br-lg
        font-extralight bg-zinc-100/90 sm:mx-4 lg:mx-10border-black/10 text-wrap dark:bg-zinc-900/80 dark:text-zinc-100/90 relative h-full overflow-hidden"
        >
          <span className="font-semibold text-lg text-zinc-500 pb-9">
            Hello, I&rsquo;m Jake!{" "}
          </span>
          <br />I am looking for{" "}
          <span className="font-light">
            Software Intern position in Summer 2024
          </span>
          . As a <span className="font-light">veteran</span> and recent graduate
          at{" "}
          <span className="font-light">University of California Riverside</span>
          , I bring a unique blend of discipline and teamwork skills. I have a
          strong foundation for full stack development. I am proficient in
          React, Next.js, TypeScript, Tailwind, Prisma, and PostgreSQL. I am
          excited to leverage my skills and experience to contribute to a
          dynamic team. I am eager to take on new challenges, drive innovation,
          and deliver impactful results. Let&rsquo;s connect and explore how my
          background and skills align with the needs of your team.
          <br />
        </div>
      </div>
    </motion.section>
  );
}
