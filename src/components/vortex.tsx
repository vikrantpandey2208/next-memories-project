import React from "react";
import { Vortex } from "./vortex-base";

export function VortexDemoSecond() {
  return (
    <div className="mx-auto rounded-md  h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
        Wishing You All the Best, Ramakrishna
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
        Your journey with us has been unforgettable. Thank you for the memories and contributions. We&apos;ll miss you and your amazing work.
        </p>
       
      </Vortex>
    </div>
  );
}
