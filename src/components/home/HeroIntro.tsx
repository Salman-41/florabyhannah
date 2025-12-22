"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

// Sophisticated intro animation sequence:
// Phase 1: "Flora by Hannah" text appears elegantly
// Phase 2: Three images fade in (center small, then sides expand)
// Phase 3: Center image expands to full screen, becoming the hero

const floralImages = [
  "https://images.unsplash.com/photo-1487530811176-3780de880c2d?q=80&w=800&auto=format&fit=crop", // Left - bouquet
  "https://images.unsplash.com/photo-1561181286-d3fee7d55364?q=80&w=1200&auto=format&fit=crop", // Center - hero worthy
  "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?q=80&w=800&auto=format&fit=crop", // Right - arrangement
];

interface HeroIntroProps {
  onComplete?: () => void;
  skipIntro?: boolean;
}

export default function HeroIntro({
  onComplete,
  skipIntro = false,
}: HeroIntroProps) {
  const [phase, setPhase] = useState(skipIntro ? 4 : 0);

  useEffect(() => {
    if (skipIntro) return;

    // Phase timing sequence
    const timers = [
      setTimeout(() => setPhase(1), 300), // Start text animation
      setTimeout(() => setPhase(2), 1800), // Show images
      setTimeout(() => setPhase(3), 3200), // Expand center image
      setTimeout(() => {
        setPhase(4);
        onComplete?.();
      }, 4500), // Complete transition
    ];

    return () => timers.forEach(clearTimeout);
  }, [skipIntro, onComplete]);

  if (phase === 4) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] bg-[#1a1a1a] overflow-hidden"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background subtle texture */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#2a2a2a_0%,_#1a1a1a_100%)]" />

        {/* Phase 1 & 2: Text Animation */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{
            opacity: phase >= 1 && phase < 3 ? 1 : 0,
            scale: phase === 3 ? 0.8 : 1,
          }}
          transition={{ duration: 0.8 }}
        >
          {/* Main title with split animation */}
          <div className="relative">
            {/* Flora */}
            <motion.div
              className="overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: phase >= 1 ? 1 : 0 }}
            >
              <motion.span
                className="block text-[12vw] md:text-[10vw] font-serif text-[#FDFCF0] leading-none tracking-tight"
                initial={{ y: 100 }}
                animate={{ y: phase >= 1 ? 0 : 100 }}
                transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                Flora
              </motion.span>
            </motion.div>

            {/* by Hannah - smaller, offset */}
            <motion.div
              className="overflow-hidden flex justify-end -mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: phase >= 1 ? 1 : 0 }}
            >
              <motion.span
                className="block text-[4vw] md:text-[3vw] font-serif italic text-[#C9A9A6] tracking-widest"
                initial={{ y: 60, opacity: 0 }}
                animate={{
                  y: phase >= 1 ? 0 : 60,
                  opacity: phase >= 1 ? 1 : 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                by Hannah
              </motion.span>
            </motion.div>

            {/* Decorative line */}
            <motion.div
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 h-px bg-[#4A5D4E]"
              initial={{ width: 0 }}
              animate={{ width: phase >= 1 ? "60%" : 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            />
          </div>
        </motion.div>

        {/* Phase 2: Three Images */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center gap-4 md:gap-8 px-8"
          initial={{ opacity: 0 }}
          animate={{
            opacity: phase >= 2 ? 1 : 0,
            pointerEvents: phase >= 2 ? "auto" : "none",
          }}
          transition={{ duration: 0.6 }}
        >
          {/* Left Image */}
          <motion.div
            className="relative w-[20vw] h-[30vh] md:h-[50vh] overflow-hidden"
            initial={{ opacity: 0, x: -100, scale: 0.8 }}
            animate={{
              opacity: phase >= 2 && phase < 3 ? 1 : 0,
              x: phase >= 2 ? 0 : -100,
              scale: phase >= 2 ? 1 : 0.8,
            }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src={floralImages[0]}
              alt="Floral arrangement"
              fill
              className="object-cover"
              sizes="20vw"
            />
            <div className="absolute inset-0 bg-[#1a1a1a]/20" />
          </motion.div>

          {/* Center Image - will expand */}
          <motion.div
            className="relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: phase >= 2 ? 1 : 0,
              scale: phase === 2 ? 1 : phase === 3 ? 1 : 0.5,
              width: phase === 3 ? "100vw" : "25vw",
              height: phase === 3 ? "100vh" : "40vh",
              zIndex: phase === 3 ? 50 : 10,
            }}
            transition={{
              duration: phase === 3 ? 1.2 : 0.6,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            style={{
              position: phase === 3 ? "fixed" : "relative",
              top: phase === 3 ? 0 : "auto",
              left: phase === 3 ? 0 : "auto",
            }}
          >
            <Image
              src={floralImages[1]}
              alt="Featured floral design"
              fill
              className="object-cover"
              sizes={phase === 3 ? "100vw" : "25vw"}
              priority
            />
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0.2 }}
              animate={{
                opacity: phase === 3 ? 0.4 : 0.2,
                background:
                  phase === 3
                    ? "linear-gradient(to bottom, rgba(26,26,26,0.5) 0%, transparent 50%, rgba(253,252,240,0.3) 100%)"
                    : "rgba(26,26,26,0.2)",
              }}
              transition={{ duration: 0.8 }}
            />
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="relative w-[20vw] h-[30vh] md:h-[50vh] overflow-hidden"
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={{
              opacity: phase >= 2 && phase < 3 ? 1 : 0,
              x: phase >= 2 ? 0 : 100,
              scale: phase >= 2 ? 1 : 0.8,
            }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Image
              src={floralImages[2]}
              alt="Floral arrangement"
              fill
              className="object-cover"
              sizes="20vw"
            />
            <div className="absolute inset-0 bg-[#1a1a1a]/20" />
          </motion.div>
        </motion.div>

        {/* Tagline that appears in phase 2 */}
        <motion.p
          className="absolute bottom-16 left-1/2 -translate-x-1/2 text-sm md:text-base uppercase tracking-[0.4em] text-[#FDFCF0]/60"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: phase === 2 ? 1 : 0,
            y: phase === 2 ? 0 : 20,
          }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Charleston Wedding Florist
        </motion.p>
      </motion.div>
    </AnimatePresence>
  );
}
