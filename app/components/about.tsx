"use client";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { useSectionInView } from "@/app/lib/hooks";
import Image from "next/image";

export default function About() {
  const { ref } = useSectionInView("About", 0.5);

  return (
    <motion.section
      id="about"
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      //scroll-mt means the element will scroll up to the margin
      className="mb-28 max-w-[rem] text-center leading-8 sm:mb-40
      scroll-mt-[7rem]
      "
    >
      <h2 className="text-zinc-700 text-4xl font-bold capitalize mb-8 drop-shadow-md dark:text-zinc-100">
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
      <div className="mx-2 sm:mx-10 px-10 py-10 flex flex-col items-center bg-zinc-800/30 justify-center border border-white/5 rounded-md backdrop-blur-sm">
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
            src="/profile-picture.png"
            alt="Jake Jeong's Portrait picture"
            width="900"
            height="900"
            quality="95"
            priority={true}
            className="h-52 w-52 rounded-full object-cover border-[0.35rem] border-white/80 shadow-xl"
          />
        </motion.div>

        <p className="py-2 mb-3 mt-7 font-light bg-zinc-200/90 mx-10 backdrop-blur-sm border-black/10 rounded-xl">
          Hello, I&rsquo;m Jake. I&rsquo;m a{" "}
          <span className="font-normal">full-stack software developer</span>{" "}
          with a background in economics and finances. I've always been
          passionate about technology and how it can be used to improve our
          lives. I can create modern and responsive websites and applications
          using the latest technologies.
        </p>
        <p className="mb-3 mt-7 font-light bg-white/90 mx-10 backdrop-blur-sm ">
          I pay close attention to detail. I love creating enjoyable
          interactions and experiences for everyone.{" "}
        </p>
      </div>
    </motion.section>
  );
}
