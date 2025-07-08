"use client";

import Phrase from "@/components/Phrase";
import { motion, MotionValue, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

interface SliderProps {
  source: string;
  left: string;
  progress: MotionValue<number>;
  direction: string;
}

export default function Home() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  return (
    <main className="overflow-hidden">
      <div className="h-[100vh]" />
      <div ref={container}>
        <Slider
          source="/pic1.jpg"
          left="-55%"
          progress={scrollYProgress}
          direction="left"
        />
        <Slider
          source="/pic2.jpg"
          left="-15%"
          progress={scrollYProgress}
          direction="right"
        />
        <Slider
          source="/pic3.jpg"
          left="-40%"
          progress={scrollYProgress}
          direction="left"
        />
      </div>
      <div className="h-[100vh]" />
    </main>
  );
}

const Slider = ({ source, left, progress, direction }: SliderProps) => {
  const dir = direction == "left" ? -1 : 1;
  const x = useTransform(progress, [0, 1], [-250 * dir, 250 * dir]);

  return (
    <motion.div className="relative flex whitespace-nowrap" style={{ left, x }}>
      <Phrase source={source} />
      <Phrase source={source} />
    </motion.div>
  );
};
