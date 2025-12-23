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

const floralImages = {
  left: "https://images.unsplash.com/photo-1487530811176-3780de880c2d?q=80&w=800&auto=format&fit=crop",
  right:
    "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?q=80&w=800&auto=format&fit=crop",
};

interface HeroIntroProps {
  onComplete?: () => void;
  skipIntro?: boolean;
  /** Must match the HeroSection background image. */
  heroImage?: string;
}

export default function HeroIntro({
  onComplete,
  skipIntro = false,
  heroImage = "https://images.unsplash.com/photo-1470509037663-253afd7f0f51?q=80&w=2070&auto=format&fit=crop",
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
          className="fixed inset-0 z-100 overflow-hidden flex items-center justify-center bg-antique-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Background: no images — only premium gradients + florals */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-linear-to-br from-antique-white via-soft-cream to-[#EFE7DE]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,169,166,0.22)_0%,rgba(253,252,240,0.0)_55%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(74,93,78,0.16)_0%,rgba(253,252,240,0.0)_55%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(26,26,26,0.06)_0%,rgba(26,26,26,0.18)_100%)]" />
          </div>

          {/* Extra florals across the whole intro */}
          <div className="absolute inset-0 pointer-events-none">
            <FloatingFlowers density="dense" />
            <FloralPattern
              variant="branch"
              animate
              className="absolute -top-16 -left-16 w-72 h-72 sm:w-md sm:h-112 text-muted-rose/18 rotate-12"
            />
            <FloralPattern
              variant="leaf"
              animate
              className="absolute -bottom-20 -right-16 w-80 h-80 sm:w-lg sm:h-128 text-deep-sage/14 -rotate-12"
            />
            <FloralPattern
              variant="blossom"
              animate={false}
              className="absolute top-24 right-12 w-28 h-28 sm:w-36 sm:h-36 text-antique-white/14 rotate-6"
            />
            <FloralPattern
              variant="petal"
              animate={false}
              className="absolute bottom-24 left-10 w-28 h-28 sm:w-36 sm:h-36 text-muted-rose/12 -rotate-6"
            />
          </div>

          {/* Phase 1-3: Inline headline with images inside the text (pushes it smoothly) */}
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
              <motion.h1
                className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-serif text-soft-black"
                layout
                transition={{
                  layout: { duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] },
                }}
              >
                <span className="inline-flex items-center justify-center gap-3 sm:gap-4 md:gap-6">
                  <motion.span layout>Flora</motion.span>

                  {/* Images appear inline and push the text apart naturally */}
                  <AnimatePresence initial={false}>
                    {phase >= 2 && (
                      <motion.div
                        key="intro-left"
                        layout
                        className="relative overflow-hidden rounded-lg ring-1 ring-antique-white/35 shadow-2xl w-[clamp(44px,6vw,84px)] h-[clamp(56px,7.5vw,104px)]"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{
                          duration: 0.6,
                          ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                      >
                        <Image
                          src={floralImages.left}
                          alt="Floral arrangement"
                          fill
                          className="object-cover"
                          sizes="160px"
                        />
                      </motion.div>
                    )}

                    {phase >= 2 && (
                      <motion.div
                        key="intro-center"
                        layoutId="intro-center-image"
                        layout
                        className="relative overflow-hidden rounded-lg ring-1 ring-antique-white/45 shadow-2xl w-[clamp(52px,7vw,112px)] h-[clamp(64px,8.5vw,138px)]"
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{
                          duration: 0.7,
                          ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                      >
                        <Image
                          src={heroImage}
                          alt="Hero preview"
                          fill
                          className="object-cover"
                          sizes="220px"
                          priority
                        />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(253,252,240,0.18)_0%,transparent_55%)]" />
                      </motion.div>
                    )}

                    {phase >= 3 && (
                      <motion.div
                        key="intro-right"
                        layout
                        className="relative overflow-hidden rounded-lg ring-1 ring-antique-white/35 shadow-2xl w-[clamp(44px,6vw,84px)] h-[clamp(56px,7.5vw,104px)]"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{
                          duration: 0.6,
                          ease: [0.25, 0.46, 0.45, 0.94],
                          delay: 0.05,
                        }}
                      >
                        <Image
                          src={floralImages.right}
                          alt="Floral arrangement"
                          fill
                          className="object-cover"
                          sizes="160px"
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <motion.span layout className="italic text-muted-rose">
                    by Hannah
                  </motion.span>
                </span>
              </motion.h1>

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
              className="fixed inset-0 z-2"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <Image
                src={heroImage}
                alt="Hero background"
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
              {/* Keep it colorful, not black: gentle contrast only */}
              <div className="absolute inset-0 bg-linear-to-b from-antique-white/10 via-transparent to-soft-black/25" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(253,252,240,0.25)_0%,transparent_55%)]" />
            </motion.div>
          )}
        </motion.div>
      </LayoutGroup>
    </AnimatePresence>
  );
}
