"use client";

import { useTheme } from "@/context/theme-constext";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";



export default function ThemeSwitch() {
    const {theme, toggleTheme} =useTheme()


  return (
    <button
      className="fixed bottom-5 right-5 bg-gray-300 dark:bg-slate-950 w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-125 active:scale-105 transition-all"
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}
