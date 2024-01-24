import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";

const buttonClassname = `
fixed bottom-5 right-5 bt-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all
`;

export default function SocialButtons() {
  return (
    <div className="fixed flex bottom-7 right-8 items-center gap-3  text-cyan-100/70">
      {/* Using anchor tag because we are navigating to actual link */}

      <a
        href="https://www.linkedin.com/in/jake-jeong-801438148/"
        target="_blank"
        className="text-[1.73rem]"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/JakeJeongAiden"
        target="_blank"
        className="text-[2rem] "
      >
        <FaGithubSquare />
      </a>
    </div>
  );
}
