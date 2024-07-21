"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGridBase } from "./layout-grid-base";

import pic1 from '@/data/WhatsApp Image 2024-07-19 at 20.51.46.jpeg';
import pic2 from '@/data/WhatsApp Image 2024-07-19 at 20.51.47 (1).jpeg';
import pic3 from '@/data/WhatsApp Image 2024-07-19 at 20.51.48 (1).jpeg';
import pic4 from '@/data/WhatsApp Image 2024-07-19 at 20.51.49 (1).jpeg';
import pic5 from '@/data/WhatsApp Image 2024-07-19 at 20.51.49.jpeg';



const cards = [
  {
    id: 1,
    className: "md:col-span-2",
    thumbnail: pic5
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
    thumbnail:  pic2
  },
];


export function LayoutGridDemo() {

  console.log(cards); 
  return (
    <div className="h-screen w-full">
      <LayoutGridBase cards={cards}/>
    </div>
  );
}

