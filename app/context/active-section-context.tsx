"use client";

import React from "react";
import { useState, createContext, useContext } from "react";
import { SectionName } from "@/app/lib/types";

// 1. Type for props that we are passing in.
type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};

// Type for value in the context we are returning back
type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

// 3. Type for the context we are creating. Called later.
export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState<number>(0); // Keeping track of the time of the last click to prevent activeSection from changing when the user clicks on a link.

  return (
    // Value is the data that we want to share with the children. They need to be typed
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

// We created useContext here to make code cleaner. We will import useActionSectionContext() in the components that need it.
export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);
  if (context === null) {
    throw new Error("useActiveSection must be used within a ActiveSection");
  }
  return context;
}
