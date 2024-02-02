import React from "react";

export default function Footer() {
  return (
    <footer className=" mb-10 px-4 text-center text-zinc-400 dark:text-zinc-500">
      <small className="mb-2 block text-xs">
        &copy; 2024 Jake Jeong. All Rights Reserved.{" "}
      </small>
      <p className="text-xs">
        <span className="font-semibold">
          Built with next.JS, typescript, tailwindcss, and deployed on Vercel.
        </span>
      </p>
    </footer>
  );
}
