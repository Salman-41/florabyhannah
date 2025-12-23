"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { FloralPattern, FloatingFlowers } from "@/components/animations";

interface HeroSectionProps {
  title?: React.ReactNode;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
  showContent?: boolean;
}

export default function HeroSection({
  title = (
    <>
      Floral design that brings{" "}
      <span className="italic text-[#C9A9A6]">life and color</span> to your most
      special days
    </>
  ),
  subtitle = "Crafting unforgettable floral experiences for weddings and celebrations throughout the Lowcountry",
  ctaText = "View Portfolio",
  ctaLink = "/portfolio",
  // Using a darker, more dramatic floral image
  backgroundImage = "https://images.unsplash.com/photo-1561181286-d3fee7d55364?q=80&w=2070&auto=format&fit=crop",
  showContent = true,
}: HeroSectionProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden bg-[#1a1a1a] min-h-[100svh]"
    >
      {/* Background Image with Parallax */}
      <motion.div className="absolute inset-0 z-0" style={{ y, scale }}>
        <Image
          src={backgroundImage}
          alt="Flora by Hannah - Luxury Wedding Florals"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Multi-layer gradient overlay for depth and text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/60 via-[#1A1A1A]/30 to-[#1A1A1A]/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/40 via-transparent to-[#1A1A1A]/40" />
        {/* Subtle vignette effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(26,26,26,0.4)_100%)]" />
      </motion.div>

      {/* Floating Floral Patterns */}
      <FloatingFlowers density="light" />

      {/* Section corner florals (subtle) */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <FloralPattern
          variant="branch"
          animate={false}
          className="absolute -top-10 -left-10 w-40 h-40 sm:w-56 sm:h-56 text-muted-rose/15 rotate-12"
        />
        <FloralPattern
          variant="blossom"
          animate={false}
          className="absolute -bottom-12 -right-10 w-44 h-44 sm:w-64 sm:h-64 text-antique-white/10 -rotate-12"
        />
      </div>

      {/* Content */}
      {showContent && (
        <motion.div
          className="relative z-10 min-h-[100svh] flex flex-col items-center justify-center text-center px-6 pt-24 sm:pt-28"
          style={{ opacity }}
        >
          {/* Decorative top element */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.1 }}
          >
            <svg
              width="60"
              height="30"
              viewBox="0 0 60 30"
              fill="none"
              className="text-[#C9A9A6]"
            >
              <path
                d="M30 0C30 16.5685 16.5685 30 0 30"
                stroke="currentColor"
                strokeWidth="1"
              />
              <path
                d="M30 0C30 16.5685 43.4315 30 60 30"
                stroke="currentColor"
                strokeWidth="1"
              />
            </svg>
          </motion.div>

          <motion.span
            className="text-xs md:text-sm uppercase tracking-[0.4em] text-[#C9A9A6] mb-6 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Charleston Wedding Florist
          </motion.span>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-[#FDFCF0] max-w-5xl leading-[1.15] mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {title}
          </motion.h1>

          <motion.p
            className="text-sm sm:text-base md:text-lg text-[#FDFCF0]/70 max-w-xl mb-10 sm:mb-12 font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {subtitle}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link href={ctaLink}>
              <motion.button
                className="group relative w-full sm:w-auto px-8 sm:px-12 py-4 bg-transparent text-[#FDFCF0] text-xs uppercase tracking-[0.25em] overflow-hidden border border-[#FDFCF0]/30"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 transition-colors duration-500 group-hover:text-[#1a1a1a]">
                  {ctaText}
                </span>
                <motion.div
                  className="absolute inset-0 bg-[#FDFCF0]"
                  initial={{ y: "100%" }}
                  whileHover={{ y: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                />
              </motion.button>
            </Link>
            <Link href="/contact">
              <motion.button
                className="group relative w-full sm:w-auto px-8 sm:px-12 py-4 bg-[#C9A9A6] text-[#1a1a1a] text-xs uppercase tracking-[0.25em] overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 transition-colors duration-500 group-hover:text-[#FDFCF0]">
                  Book Consultation
                </span>
                <motion.div
                  className="absolute inset-0 bg-[#4A5D4E]"
                  initial={{ y: "100%" }}
                  whileHover={{ y: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      )}

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#FDFCF0]/40">
          Scroll
        </span>
        <motion.div
          className="w-px h-12 bg-gradient-to-b from-[#FDFCF0]/40 to-transparent"
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Side decorative elements */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4 z-10">
        <div className="w-px h-24 bg-gradient-to-b from-transparent via-[#C9A9A6]/30 to-transparent" />
        <span className="text-[10px] uppercase tracking-[0.2em] text-[#FDFCF0]/30 rotate-90 whitespace-nowrap">
          Est. 2018
        </span>
        <div className="w-px h-24 bg-gradient-to-b from-transparent via-[#C9A9A6]/30 to-transparent" />
      </div>
    </section>
  );
}
