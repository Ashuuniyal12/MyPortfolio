"use client";

import React, { useState, createContext, useContext } from "react";
import type { SectionName } from "@/lib/types";


type ActiveSectionContexProviderProps = {
  children: React.ReactNode;
};

type ActiveSectionContectType = {
  activeSection: SectionName;
  SetActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeofLastClick: number;
  setTimeofLastClick:React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContext =
  createContext<ActiveSectionContectType | null>(null);

export default function ActiveSectionContexProvider({
  children,
}: ActiveSectionContexProviderProps) {
  const [activeSection, SetActiveSection] = useState<SectionName>("Home");
  const [timeofLastClick, setTimeofLastClick] = useState(0);
  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        SetActiveSection,
        timeofLastClick,
        setTimeofLastClick
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);
  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    );
  }
  return context;
}
