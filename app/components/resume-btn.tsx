import React from "react";
import { HiDownload } from "react-icons/hi";

export default function ResumeBtn() {
  return (
    <a
      // in nextjs you can use /public folder to store static files.
      href="/cv-a.pdf"
      download
      className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-zinc-400 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-zinc-300 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65"
    >
      Resume
      <HiDownload className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
    </a>
  );
}
