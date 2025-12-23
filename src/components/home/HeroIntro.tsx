"use client";

import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FloralPattern, FloatingFlowers } from "@/components/animations";

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
  const [viewportWidth, setViewportWidth] = useState<number | null>(null);

  useEffect(() => {
    // Keep this cheap: only track width (we only need it for responsive animation distances).
    const update = () => setViewportWidth(window.innerWidth);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const sideX =
    viewportWidth == null
      ? 320
      : viewportWidth < 640
        ? 160
        : viewportWidth < 1024
          ? 240
          : 320;

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
      <LayoutGroup>
        <motion.div
          className="fixed inset-0 z-[100] overflow-hidden flex items-center justify-center bg-antique-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Floral-rich background (not flat black) */}
          <div className="absolute inset-0">
            <Image
              src={floralImages[1]}
              alt="Floral background"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
            {/* Light + romantic overlays for readability */}
            <div className="absolute inset-0 bg-linear-to-b from-antique-white/45 via-antique-white/25 to-soft-black/35" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(253,252,240,0.35)_0%,_rgba(26,26,26,0.25)_100%)]" />
          </div>

          {/* Extra florals across the whole intro */}
          <div className="absolute inset-0 pointer-events-none">
            <FloatingFlowers density="dense" />
            <FloralPattern
              variant="branch"
              animate
              className="absolute -top-16 -left-16 w-72 h-72 sm:w-[28rem] sm:h-[28rem] text-muted-rose/18 rotate-12"
            />
            <FloralPattern
              variant="leaf"
              animate
              className="absolute -bottom-20 -right-16 w-80 h-80 sm:w-[32rem] sm:h-[32rem] text-deep-sage/14 -rotate-12"
            />
            <FloralPattern
              variant="blossom"
              animate={false}
              className="absolute top-24 right-12 w-28 h-28 sm:w-36 sm:h-36 text-antique-white/14 rotate-6"
            />
          </div>

          {/* Phase 1-3: Inline headline with images pushing the text */}
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center"
            animate={{
              y: phase >= 2 ? -70 : 0,
              opacity: phase >= 4 ? 0 : 1,
            }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.div
              className="px-6 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: phase >= 1 ? 1 : 0, y: phase >= 1 ? 0 : 30 }}
              transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="inline-flex items-center justify-center gap-3 sm:gap-4 md:gap-6">
                {/* Left image (phase 3) */}
                <motion.div
                  className="relative overflow-hidden rounded-lg ring-1 ring-antique-white/35 shadow-2xl"
                  style={{
                    width:
                      viewportWidth != null && viewportWidth < 640 ? 44 : 72,
                    height:
                      viewportWidth != null && viewportWidth < 640 ? 56 : 92,
                  }}
                  initial={{ opacity: 0, scale: 0.9, x: 0 }}
                  animate={{
                    opacity: phase >= 3 ? 1 : 0,
                    scale: phase >= 3 ? 1 : 0.9,
                    x: phase >= 3 ? -16 : 0,
                  }}
                  transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <Image
                    src={floralImages[0]}
                    alt="Floral arrangement"
                    fill
                    className="object-cover"
                    sizes="120px"
                  />
                </motion.div>

                {/* Text + center image inserted between words (phase 2+) */}
                <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-serif text-soft-black">
                  <span className="inline-flex items-center gap-3 sm:gap-4 md:gap-6">
                    <span>Flora</span>

                    {/* Center image (phase 2+) lives inline and later expands via shared layout */}
                    <motion.div
                      layoutId="intro-center-image"
                      className="relative overflow-hidden rounded-lg ring-1 ring-antique-white/40 shadow-2xl"
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={{
                        opacity: phase >= 2 ? 1 : 0,
                        scale: phase >= 2 ? 1 : 0.85,
                      }}
                      transition={{
                        duration: 0.7,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                      style={{
                        width:
                          viewportWidth != null && viewportWidth < 640
                            ? 52
                            : 88,
                        height:
                          viewportWidth != null && viewportWidth < 640
                            ? 64
                            : 108,
                      }}
                    >
                      <Image
                        src={floralImages[1]}
                        alt="Floral arrangement"
                        fill
                        className="object-cover"
                        sizes="160px"
                        priority
                      />
                    </motion.div>

                    <span className="italic text-muted-rose">by Hannah</span>
                  </span>
                </h1>

                {/* Right image (phase 3) */}
                <motion.div
                  className="relative overflow-hidden rounded-lg ring-1 ring-antique-white/35 shadow-2xl"
                  style={{
                    width:
                      viewportWidth != null && viewportWidth < 640 ? 44 : 72,
                    height:
                      viewportWidth != null && viewportWidth < 640 ? 56 : 92,
                  }}
                  initial={{ opacity: 0, scale: 0.9, x: 0 }}
                  animate={{
                    opacity: phase >= 3 ? 1 : 0,
                    scale: phase >= 3 ? 1 : 0.9,
                    x: phase >= 3 ? 16 : 0,
                  }}
                  transition={{
                    duration: 0.7,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    delay: 0.06,
                  }}
                >
                  <Image
                    src={floralImages[2]}
                    alt="Floral arrangement"
                    fill
                    className="object-cover"
                    sizes="120px"
                  />
                </motion.div>
              </div>

              <motion.div
                className="mt-6 h-px bg-deep-sage/60 mx-auto"
                initial={{ width: 0 }}
                animate={{
                  width:
                    phase >= 1
                      ? viewportWidth != null && viewportWidth < 640
                        ? "220px"
                        : "320px"
                      : 0,
                }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </motion.div>
          </motion.div>

          {/* Phase 4: Center image expands to full-screen (shared layout transition) */}
          {phase >= 4 && (
            <motion.div
              layoutId="intro-center-image"
              className="fixed inset-0 z-[2]"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <Image
                src={floralImages[1]}
                alt="Hero background"
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
              {/* Keep it colorful but readable */}
              <div className="absolute inset-0 bg-linear-to-b from-antique-white/15 via-transparent to-soft-black/35" />
            </motion.div>
          )}
        </motion.div>
      </LayoutGroup>
    </AnimatePresence>
  );
}
