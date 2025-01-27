"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGridBase } from "./layout-grid-base";

import pic1 from '@/data/ck2.jpeg';
import pic2 from '@/data/WhatsApp Image 2024-07-19 at 20.51.47 (1).jpeg';
import pic3 from '@/data/WhatsApp Image 2024-07-19 at 20.51.48 (1).jpeg';
import pic4 from '@/data/WhatsApp Image 2024-07-19 at 20.51.49 (1).jpeg';
import pic5 from '@/data/WhatsApp Image 2024-07-19 at 20.51.49.jpeg';
import pic6 from '@/data/ie.jpeg';
import pic7 from '@/data/kittu.jpeg';


const cards = [
  {
    id: 1,
    className: "md:col-span-2",
    thumbnail: pic1
  },
  {
    id: 2,
    className: "col-span-1",
    thumbnail:
       pic2
  },
  {
    id: 3,
    className: "col-span-1",
    thumbnail:
       pic6
  },
  {
    id: 4,
    className: "md:col-span-2",
    thumbnail:  pic7
  },
];


export function LayoutGridDemo() {

  return (
    <div className="h-[800px] w-full">
      <LayoutGridBase cards={cards}/>
    </div>
  );
}

