"use client";

import { TextGenerateEffect } from "./text-generate-base";

const words = `We are incredibly grateful for your dedication, hard work, and the positive impact you've had on our team. Your contributions have left a lasting impression, and your presence will be deeply missed.
`;

export function TextGenerateEffectDemo2() {
  return (
    <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black shadow-lg border border-gray-700 rounded-lg mt-5">

      <h2 className="text-white text-2xl md:text-5xl font-bold text-center p-[60px]">
      A Note of Gratitude
      </h2>
      <div className="pl-10 pr-10">
      <TextGenerateEffect words={words} className="pb-[60px]"/>
    </div></div>
  )
}
