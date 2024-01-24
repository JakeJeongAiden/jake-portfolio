// NOTE:
// This is where also server components meet client components.
"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSectionInView } from "@/app/lib/hooks";
import { sendEmail } from "@/app/actions/sendEmail"; //server component
import { useFormStatus } from "react-dom";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import ResumeBtn from "./resume-btn";

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.6);
  const { pending } = useFormStatus();

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
        className="text-zinc-700 -mt-6 dark:text-white/80"
      >
        Please contact me directly at{" "}
        <a className="underline" href="mailto:jake.y.jeong.dev@gmail.com">
          jake.y.jeong.dev@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        {/* input for one line form. Textarea for multiple line form */}
        <input
          // px-4 padding horizontal 4.
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          placeholder="Your email"
          maxLength={500}
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          required
          maxLength={5000}
        ></textarea>
        <div className="flex justify-between">
          <SubmitBtn />
          <ResumeBtn />
        </div>
      </form>
    </motion.section>
  );
}
