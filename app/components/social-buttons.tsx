import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";

const buttonClassname = `
  bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition-all cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 dark:hover:text-white/80
`;

export default function SocialButtons() {
  return (
    <div>
      {/* Using anchor tag because we are navigating to actual link */}

      <a
        href="https://www.linkedin.com/in/jake-jeong-801438148/"
        target="_blank"
        className={buttonClassname}
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
    </div>
  );
}
