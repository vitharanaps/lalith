import React from "react";
import { TypewriterEffect } from "./ui/typewriter-effect";
export function VideoBackgroundHero() {
  const words = [
    { text: "Build " },
    { text: "\u00A0" }, // Non-breaking space
    { text: "awesome " },
    { text: "\u00A0" },
    { text: "apps " },
    { text: "\u00A0" },
    { text: "with " },
    { text: "\u00A0" },
    { text: "Aceternity.", className: "text-blue-500 dark:text-blue-500" },
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        autoPlay
        loop
        muted
      >
        <source src={""} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div className="flex flex-col items-center justify-center h-full text-center px-4 md:px-8">
        <p className="text-neutral-600 dark:text-neutral-200 text-base md:text-lg lg:text-xl mb-6">
          The road to freedom starts from here
        </p>
        <TypewriterEffect words={words} />
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-10">
          <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
            Join now
          </button>
          <button className="w-40 h-10 rounded-xl bg-white text-black border border-black text-sm">
            Signup
          </button>
        </div>
      </div>
    </div>
  );
}

export default VideoBackgroundHero;