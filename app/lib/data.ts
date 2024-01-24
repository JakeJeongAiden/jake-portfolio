import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap, LuCross } from "react-icons/lu";

import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import animeEvent from "@/public/anime-event.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
  {
    name: "Resume",
    hash: "#resume",
  },
] as const;

export const experiencesData = [
  {
    title: "Veteran",
    location: "U.S. Army",
    description:
      "I was a combat medic specialist in the U.S. Army. I served for 18 months and honorably discharged from service.",
    icon: React.createElement(LuCross),
    date: "2017-2018",
  },
  {
    title: "Bachelor of Arts Economics. University of California",
    location: "Riverside, CA",
    description:
      "I have a bachelor of arts in Economics. I studied game theory, econometrics, stock market and financial analysis.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Irvine, CA",
    description:
      "I'm now a full-stack developer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and PostgreSQL. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - 2024",
  },
] as const;

export const projectsData = [
  {
    title: "Anime Convention Event Demo",
    description:
      "Users can search for anime conventions and events in Southern California.",
    tags: ["React", "Next.js", "PostgreSQL", "Tailwind", "Prisma"],
    imageUrl: animeEvent,
    projectUrl: "https://event-jake.vercel.app",
  },
  {
    title: "rmtDev",
    description:
      "lorem  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
    projectUrl: "https://event-jake.vercel.app",
  },
  {
    title: "Word Analytics",
    description:
      "lorem  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
    projectUrl: "https://event-jake.vercel.app",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "Python",
  "Framer Motion",
] as const;
