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
      <div className="mx-1 sm:mx-10 lg:mx-36 px-1 lg:px-10 py-10 flex flex-col items-center bg-zinc-800/30 justify-center border border-white/5 rounded-md backdrop-blur-sm">
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

        <p className="py-3 px-1 mb-3 mt-7 font-light bg-zinc-100/90 lg:mx-10 backdrop-blur-sm border-black/10 rounded-xl text-pretty">
          Hello, I&rsquo;m Jake! <br />
          Im a software developer. I can create modern and responsive websites
          and applications using the latest technologies. Coming from military
          background, I can pay close attention to detail and work under heavy
          pressure. I am a fast learner who sees great value in learning new
          skills, not just for careers but also for personal growth.
        </p>
      </div>
    </motion.section>
  );
}
