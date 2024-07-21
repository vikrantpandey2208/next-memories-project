import { BentoGridSecondDemo } from "@/components/bento-grid";
import { Card3d } from "@/components/card-3d";
import { CardStackIMPL } from "@/components/card-stack-impl";
import { GlareCardDemo } from "@/components/card_line_impl";
import { LayoutGridDemo } from "@/components/layout-grid";
import { MeteorsDemo } from "@/components/meteor";
import { InfiniteMovingCardsDemo } from "@/components/moving-cards";
import Overlay from "@/components/overlay";
import { SparklesPreview } from "@/components/sparkles";
import { TextGenerateEffectDemo } from "@/components/text-generate";
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
      <LayoutGridDemo />
      <GlareCardDemo/>
      <TypewriterEffectSmoothDemo />

      

    </main>
  );
}
