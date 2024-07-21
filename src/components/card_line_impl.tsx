import { GlareCard } from "./card_lines";
import pic1 from '@/data/nse_scam.avif';
import pic2 from '@/data/ie.jpeg';
import pic3 from '@/data/vp1.jpeg';
import Image from "next/image";

export function GlareCardDemo() {
  return (
    <div className="flex justify-center">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      <GlareCard className="relative flex flex-col justify-end items-center md:h-96">
      <Image
        src={pic1}
        alt="Photo by Minh Pham"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
      />
        <div className="absolute inset-0 bg-black opacity-35"></div>
        <div className="relative z-10 p-4 text-center mb-4">
          <p className="font-normal text-base text-white">
          Your enthusiasm and positive energy have always been contagious.
          </p>
          <p className="font-bold text-white text-lg text-center mt-2">@NSE
          </p>
        </div>
      </GlareCard>
      <GlareCard className="relative flex flex-col justify-end items-center md:h-96">
      <Image
        src={pic2}
        alt="Photo by Minh Pham"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
      />
        <div className="absolute inset-0 bg-black opacity-35"></div>
        <div className="relative z-10 p-4 text-center mb-4">
          <p className="font-normal text-base text-white">
          Your attention to detail, problem-solving skills, and unwavering commitment have inspired us all.
          </p>
          <p className="font-bold text-white text-lg text-center mt-2">@IeSoftek</p>
        </div>
      </GlareCard>
      <GlareCard className="relative flex flex-col justify-end items-center md:h-96">
      <Image
        src={pic3}
        alt="Photo by Minh Pham"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
      />
        <div className="absolute inset-0 bg-black opacity-35"></div>
        <div className="relative z-10 p-4 text-center mb-4">
          <p className="font-normal text-base text-white">
          Starting my journey in financial management under your guidance has been a pivotal moment for me. 
          </p>
          <p className="font-bold text-white text-lg text-center mt-2">Vikrant</p>
        </div>
      </GlareCard>

    </div>
    </div>
  );
}
