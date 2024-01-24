"use client";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { useSectionInView } from "@/app/lib/hooks";

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
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40
      scroll-mt-[7rem]
      "
    >
      <h2 className="text-zinc-800 text-3xl font-medium capitalize mb-8 drop-shadow-md dark:text-zinc-100">
        <Typewriter
          options={{
            strings: ["About", "Me"],
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString("About Me")
              .callFunction(() => {
                console.log("String typed out!");
              })
              .pauseFor(2500)
              .deleteAll()
              .callFunction(() => {
                console.log("All strings were deleted");
              })
              .start();
          }}
        />
      </h2>
      <p className="mb-3">
        I&rsquo;m a veteran and a fullstack software engineer with background in
        economics and finances. I found a strong passion for coding while in
        college and decided to pursue a career in software engineering. I
        believe in minimalism, simplicity, and clean code. I am a strong
        believer in the power of teamwork and collaboration. I am a fast learner
        and I am always looking to improve my skills.
      </p>
      <p></p>
    </motion.section>
  );
}
