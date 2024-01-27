"use client";
import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";

export default function SocialButtons() {
  const [pending, setPending] = React.useState(false);
  return (
    // Make button appear in about page.
    <div className="hidden sm:fixed sm:flex bottom-7 right-8 items-center gap-3  text-cyan-100/70">
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
