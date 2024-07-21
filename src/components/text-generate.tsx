"use client";

import { TextGenerateEffect } from "./text-generate-base";

const words = `He is motivated and always ready to work. Available for morning, evening, and night shifts. Eager to understand new issues and dedicated to finding solutions. An expert in Excel, Word, and PowerPoint. Clear in his thoughts and excellent in financial management.
`;

export function TextGenerateEffectDemo() {
  return (
    <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black shadow-lg border border-gray-700 rounded-lg mt-5">

      <h2 className="text-white text-2xl md:text-6xl font-bold text-center p-[60px]">
      A True Professional
      </h2>
      <div className="pl-10 pr-10">
      <TextGenerateEffect words={words} className="pb-[60px]"/>
    </div></div>
  )
}
