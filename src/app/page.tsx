import { BentoGridSecondDemo } from "@/components/bento-grid";
import { Card3d } from "@/components/card-3d";
import { CardStackIMPL } from "@/components/card-stack-impl";
import { GlareCardDemo } from "@/components/card_line_impl";
import { LayoutGridDemo } from "@/components/layout-grid";
import { LayoutGridDemo2 } from "@/components/layout-grid2";
import { MeteorsDemo } from "@/components/meteor";
import { InfiniteMovingCardsDemo } from "@/components/moving-cards";
import Overlay from "@/components/overlay";
import { SparklesPreview } from "@/components/sparkles";
import { TextGenerateEffectDemo } from "@/components/text-generate";
import { TextGenerateEffectDemo2 } from "@/components/text-generate2";
import { TypewriterEffectSmoothDemo } from "@/components/type-writer";
import { VortexDemoSecond } from "@/components/vortex";


export default function Home() {
  return (
    <main className="dark">
      <VortexDemoSecond />
      <Overlay/>
        <TextGenerateEffectDemo />
      
      <LayoutGridDemo />
      <SparklesPreview />
      <LayoutGridDemo2 />
      <TextGenerateEffectDemo2 />
      <div className="mt-10">
      <GlareCardDemo/>
      </div>
      <TypewriterEffectSmoothDemo />

    </main>
  );
}
