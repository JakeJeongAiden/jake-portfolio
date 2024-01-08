"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSectionInView } from "@/app/lib/hooks";
export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.6);

  const sendEmail = async (formData: FormData) => {
    "use server";
    console.log("Running on server");
    console.log(formData.get("senderEmail"));
    console.log(formData.get("message"));
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      // min means pick smaller value. 100% or 38rem. on wider viewport, it will be 38rem. On a smaller viewport, it will be 100%.
      className="scroll-mt-32 mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1,
      }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p
        // -mt is a dirty trick to move the element up. It is a negative margin top.
        className="text-zinc-700 -mt-4"
      >
        Please contact me directly at{" "}
        <a className="underline" href="mailto:jake.y.jeong.dev@gmail.com">
          jake.y.jeong.dev@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col"
        action={async (formData) => {
          await sendEmail(formData);
        }}
      >
        {/* input for one line form. Textarea for multiple line form */}
        <input
          // px-4 padding horizontal 4.
          className="h-14 px-4 rounded-lg borderBlack"
          name="senderEmail"
          type="email"
          required
          placeholder="Your email"
          maxLength={500}
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4"
          name="message"
          cols={30}
          rows={10}
          required
          maxLength={500}
        ></textarea>
        <button
          className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-zinc-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-zinc-100 hover:text-zinc-900 active:scale-105"
          type="submit"
        >
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
      </form>
    </motion.section>
  );
}
