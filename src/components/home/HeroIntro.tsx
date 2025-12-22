"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

// Animation sequence:
// Phase 1: "Flora by Hannah" text on single line
// Phase 2: Text shifts up slightly, first image appears in center
// Phase 3: Two more images appear on sides of text
// Phase 4: Center image expands from middle to full screen

const floralImages = [
  "https://images.unsplash.com/photo-1487530811176-3780de880c2d?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1561181286-d3fee7d55364?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?q=80&w=800&auto=format&fit=crop",
];

interface HeroIntroProps {
  onComplete?: () => void;
  skipIntro?: boolean;
}

export default function HeroIntro({
  onComplete,
  skipIntro = false,
}: HeroIntroProps) {
  const [phase, setPhase] = useState(skipIntro ? 5 : 0);

  useEffect(() => {
    if (skipIntro) return;

    const timers = [
      setTimeout(() => setPhase(1), 400), // Text appears
      setTimeout(() => setPhase(2), 1800), // Text shifts, center image
      setTimeout(() => setPhase(3), 2800), // Side images appear
      setTimeout(() => setPhase(4), 3800), // Center expands
      setTimeout(() => {
        setPhase(5);
        onComplete?.();
      }, 5200),
    ];

    return () => timers.forEach(clearTimeout);
  }, [skipIntro, onComplete]);

  if (phase === 5) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] bg-[#1a1a1a] overflow-hidden flex items-center justify-center"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Phase 1: Single line text "Flora by Hannah" */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center"
          animate={{
            y: phase >= 2 ? -80 : 0,
            opacity: phase >= 4 ? 0 : 1,
          }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-serif text-[#FDFCF0] whitespace-nowrap"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: phase >= 1 ? 1 : 0, y: phase >= 1 ? 0 : 30 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Flora <span className="italic text-[#C9A9A6]">by Hannah</span>
          </motion.h1>

          <motion.div
            className="mt-6 h-px bg-[#4A5D4E]"
            initial={{ width: 0 }}
            animate={{ width: phase >= 1 ? "300px" : 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        {/* Phase 2: Center image appears */}
        <motion.div
          className="absolute"
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{
            opacity: phase >= 2 && phase < 4 ? 1 : 0,
            scale: phase === 2 || phase === 3 ? 1 : 0.3,
            y: phase >= 2 ? 100 : 0,
          }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="relative w-[200px] h-[250px] md:w-[280px] md:h-[350px] overflow-hidden rounded-lg">
            <Image
              src={floralImages[1]}
              alt="Flora arrangement"
              fill
              className="object-cover"
              sizes="280px"
              priority
            />
          </div>
        </motion.div>

        {/* Phase 3: Side images appear */}
        {/* Left image */}
        <motion.div
          className="absolute"
          initial={{ opacity: 0, x: 0, scale: 0.5 }}
          animate={{
            opacity: phase >= 3 && phase < 4 ? 1 : 0,
            x: phase >= 3 ? -320 : 0,
            y: phase >= 3 ? 100 : 0,
            scale: phase >= 3 ? 1 : 0.5,
          }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="relative w-[180px] h-[220px] md:w-[240px] md:h-[300px] overflow-hidden rounded-lg">
            <Image
              src={floralImages[0]}
              alt="Flora arrangement"
              fill
              className="object-cover"
              sizes="240px"
            />
          </div>
        </motion.div>

        {/* Right image */}
        <motion.div
          className="absolute"
          initial={{ opacity: 0, x: 0, scale: 0.5 }}
          animate={{
            opacity: phase >= 3 && phase < 4 ? 1 : 0,
            x: phase >= 3 ? 320 : 0,
            y: phase >= 3 ? 100 : 0,
            scale: phase >= 3 ? 1 : 0.5,
          }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.1,
          }}
        >
          <div className="relative w-[180px] h-[220px] md:w-[240px] md:h-[300px] overflow-hidden rounded-lg">
            <Image
              src={floralImages[2]}
              alt="Flora arrangement"
              fill
              className="object-cover"
              sizes="240px"
            />
          </div>
        </motion.div>

        {/* Phase 4: Center image expands from middle */}
        <motion.div
          className="absolute"
          initial={{ opacity: 0 }}
          animate={{
            opacity: phase >= 4 ? 1 : 0,
            width: phase >= 4 ? "100vw" : "280px",
            height: phase >= 4 ? "100vh" : "350px",
            borderRadius: phase >= 4 ? "0px" : "8px",
          }}
          transition={{
            duration: 1.2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          style={{
            left: "50%",
            top: "50%",
            x: "-50%",
            y: "-50%",
          }}
        >
          <Image
            src={floralImages[1]}
            alt="Hero background"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/50 via-[#1a1a1a]/30 to-[#1a1a1a]/60" />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
