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
      <span className="block">Floral design that brings</span>
      <span className="block lg:whitespace-nowrap">
        <span className="relative inline-block italic text-muted-rose">
          <span className="relative z-10">life and color</span>
          <span className="pointer-events-none absolute -inset-x-2 -inset-y-1 -z-10 rounded-full bg-muted-rose/10" />
          <span className="pointer-events-none absolute left-1/2 bottom-0 h-px w-[calc(100%+0.9rem)] -translate-x-1/2 bg-linear-to-r from-transparent via-muted-rose/55 to-transparent" />
        </span>{" "}
        to your
      </span>
      <span className="block lg:whitespace-nowrap">most special days</span>
    </>
  ),
  subtitle,
  ctaText = "View Portfolio",
  ctaLink = "/portfolio",
  // Brighter floral image (keeps the whole hero feeling light + visible)
  backgroundImage = "https://images.unsplash.com/photo-1470509037663-253afd7f0f51?q=80&w=2070&auto=format&fit=crop",
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
      className="relative w-full overflow-hidden bg-soft-black min-h-svh"
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
        <div className="absolute inset-0 bg-linear-to-b from-soft-black/65 via-soft-black/25 to-soft-black/70" />
        <div className="absolute inset-0 bg-linear-to-r from-soft-black/30 via-transparent to-soft-black/30" />
        {/* Subtle vignette effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(253,252,240,0.10)_0%,rgba(26,26,26,0.58)_100%)]" />
      </motion.div>

      {/* Floating Floral Patterns */}
      <FloatingFlowers density="light" />

      {/* Section corner florals (subtle) */}
      <div className="absolute inset-0 z-1 pointer-events-none">
        <FloralPattern
          variant="branch"
          animate={false}
          className="absolute -top-6 -left-6 w-44 h-44 sm:w-64 sm:h-64 text-muted-rose/20 rotate-12"
        />
        <FloralPattern
          variant="blossom"
          animate={false}
          className="absolute -bottom-8 -right-6 w-48 h-48 sm:w-72 sm:h-72 text-antique-white/14 -rotate-12"
        />

        {/* Smaller opposite-corner accents (helps visibility on some screens) */}
        <FloralPattern
          variant="leaf"
          animate={false}
          className="absolute top-16 right-6 w-20 h-20 sm:w-28 sm:h-28 text-antique-white/10 rotate-6"
        />
        <FloralPattern
          variant="petal"
          animate={false}
          className="absolute bottom-20 left-8 w-20 h-20 sm:w-28 sm:h-28 text-muted-rose/12 -rotate-6"
        />
      </div>

      {/* Content */}
      {showContent && (
        <motion.div
          className="relative z-10 min-h-svh flex flex-col items-center justify-center text-center px-6 pt-24 sm:pt-28 pb-16 sm:pb-20"
          style={{ opacity }}
        >
          {/* Center readability veil (keeps the vibe, makes text always legible) */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(26,26,26,0.55)_0%,rgba(26,26,26,0.18)_48%,transparent_74%)]" />
            <div className="absolute inset-x-0 top-24 bottom-16 bg-linear-to-b from-soft-black/0 via-soft-black/12 to-soft-black/0" />
            {/* Romantic glow (very subtle) */}
            <div className="absolute left-1/2 top-[52%] h-112 w-[min(92vw,56rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(201,169,166,0.18)_0%,rgba(201,169,166,0.08)_40%,transparent_72%)] blur-2xl" />
          </div>

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
              className="text-muted-rose"
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
            className="inline-flex items-center text-xs md:text-sm uppercase tracking-[0.4em] text-muted-rose mb-7 font-light px-5 py-2 rounded-full border border-antique-white/10 bg-soft-black/28 backdrop-blur-sm drop-shadow-[0_10px_26px_rgba(0,0,0,0.40)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Charleston Wedding Florist
          </motion.span>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-normal text-antique-white max-w-[18ch] lg:max-w-[26ch] leading-[1.06] tracking-[-0.02em] mb-8 drop-shadow-[0_12px_34px_rgba(0,0,0,0.62)]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {title}
          </motion.h1>

          {/* Delicate divider for a more romantic/premium feel */}
          <motion.div
            className="mb-10 sm:mb-12"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
          >
            <div className="mx-auto h-px w-44 bg-linear-to-r from-transparent via-muted-rose/45 to-transparent" />
          </motion.div>

          {subtitle && (
            <motion.p
              className="text-sm sm:text-base md:text-lg text-antique-white/70 max-w-xl mb-10 sm:mb-12 font-light leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {subtitle}
            </motion.p>
          )}

          <motion.div
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link
              href={ctaLink}
              className="group relative w-full sm:w-auto px-8 sm:px-12 py-4 bg-transparent text-antique-white text-xs uppercase tracking-[0.25em] overflow-hidden border border-antique-white/30 rounded-full drop-shadow-[0_10px_24px_rgba(0,0,0,0.45)]"
            >
              <motion.span
                className="absolute inset-0 bg-antique-white"
                initial={{ y: "100%" }}
                whileHover={{ y: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              />
              <motion.span
                className="relative z-10 inline-block transition-colors duration-500 group-hover:text-[#1a1a1a]"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {ctaText}
              </motion.span>
            </Link>
            <Link
              href="/contact"
              className="group relative w-full sm:w-auto px-8 sm:px-12 py-4 bg-muted-rose text-[#1a1a1a] text-xs uppercase tracking-[0.25em] overflow-hidden rounded-full drop-shadow-[0_12px_30px_rgba(0,0,0,0.45)]"
            >
              <motion.span
                className="absolute inset-0 bg-deep-sage"
                initial={{ y: "100%" }}
                whileHover={{ y: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              />
              <motion.span
                className="relative z-10 inline-block transition-colors duration-500 group-hover:text-antique-white"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Book Consultation
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>
      )}

      {/* Side decorative elements */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4 z-10">
        <div className="w-px h-24 bg-linear-to-b from-transparent via-muted-rose/30 to-transparent" />
        <span className="text-[10px] uppercase tracking-[0.2em] text-antique-white/30 rotate-90 whitespace-nowrap">
          Est. 2018
        </span>
        <div className="w-px h-24 bg-linear-to-b from-transparent via-muted-rose/30 to-transparent" />
      </div>
    </section>
  );
}
