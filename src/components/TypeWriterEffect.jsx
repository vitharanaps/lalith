"use client";
import { TypewriterEffect } from "./ui/typewriter-effect";

export function TypewriterEffectDemo() {
  const words = [
    { text: "Unleash " },
    { text: "\u00A0" }, // Non-breaking space
    { text: "your  " },
    { text: "\u00A0" },
    { text: "rhythm " },
    { text: "\u00A0" },
    { text: "and " },
    { text: "\u00A0" }, 
    { text: "grace " },
    { text: "\u00A0" },
    { text: "with  " },
    { text: "\u00A0" },
    { text: "\u00A0" },
    { text: "Lalith  \u00A0  Parakum \u00A0  Dance  \u00A0 Academy.", className: "text-blue-500 dark:text-blue-500" },
  ];
  return (
    (<div className="flex flex-col items-center justify-center h-[60vh] ">
      <p className="text-neutral-600 dark:text-neutral-200 text-base  mb-10">
        The road to freedom starts from here
      </p>
      <TypewriterEffect words={words} />
      <div
        className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
        <button
          className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Join now
        </button>
        <button
          className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Signup
        </button>
      </div>
    </div>)
  );
}
