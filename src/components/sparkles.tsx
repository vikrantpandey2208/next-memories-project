"use client";
import React from "react";
import { SparklesCore } from "./sparkles-base";

export function SparklesPreview() {
  return (
    <div className="h-[30rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full h-full absolute inset-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
        Reach for the Stars!
      </h1>
      <div className=" dark:text-white text-black text-base sm:text-lg md:text-xl lg:text-2xl leading-snug tracking-wide mt-10 ml-6 mr-6">
        <p>Your potential is limitless. Keep aiming high and achieving greatness. Though our projects may change, the bonds we’ve built will last a lifetime. May this new path lead you to exciting and rewarding experiences.
          The future holds endless possibilities. Embrace every opportunity with confidence.
        </p>
      </div>
    </div>
  );
}
