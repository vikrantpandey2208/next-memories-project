"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGridBase } from "./layout-grid-base";

import pic1 from '@/data/WhatsApp Image 2024-07-19 at 20.51.49.jpeg';
import pic2 from '@/data/f.jpeg';
import pic3 from '@/data/gwi.jpeg';
import pic4 from '@/data/gwi2.jpeg';
import pic5 from '@/data/WhatsApp Image 2024-07-19 at 20.51.49.jpeg';
import pic6 from '@/data/ie.jpeg';
import pic7 from '@/data/kittu.jpeg';


const cards = [
  {
    id: 1,
    className: "md:col-span-2",
    thumbnail: pic3
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
       pic1
  },
  {
    id: 4,
    className: "md:col-span-2",
    thumbnail:  pic4
  },
];


export function LayoutGridDemo2() {

  return (
    <div className="h-[800px] w-full">
      <LayoutGridBase cards={cards}/>
    </div>
  );
}

