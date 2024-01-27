import React from "react";
import { cn } from "../lib/utils";

type SectionHeadingProps = {
  children: React.ReactNode;
  className?: string;
};

export default function SectionHeading({
  children,
  className,
}: SectionHeadingProps) {
  return (
    <h2
      className={cn(
        "text-4xl font-bold capitalize mb-8 text-center text-zinc-800 dark:text-zinc-100",
        className
      )}
    >
      {children}
    </h2>
  );
}
