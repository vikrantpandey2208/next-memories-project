"use client";

import { TypewriterEffectSmooth } from "./type-writer-base";

export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "We",
    },
    {
      text: "will",
    },
    {
      text: "always",
    },
    {
      text: "remember",
    },
    {
      text: "your",
    },
    {
      text: "impact,",
    },
    {
      text: "Ramakrishna Chinnam",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[20rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
      Your journey ahead is full of promise...
      </p>
      <TypewriterEffectSmooth words={words} />
      
    </div>
  );
}
