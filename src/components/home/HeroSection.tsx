"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
}

export default function HeroSection({
  title = "Floral design that brings life and color to your most special days",
  subtitle = "Custom Wedding Floral Design in Charleston",
  ctaText = "View Portfolio",
  ctaLink = "/portfolio",
  backgroundImage = "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop",
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
    <section ref={ref} className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div className="absolute inset-0 z-0" style={{ y, scale }}>
        <Image
          src={backgroundImage}
          alt="Flora by Hannah Hero"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/40 via-transparent to-[#FDFCF0]" />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
        style={{ opacity }}
      >
        <motion.span
          className="text-sm md:text-base uppercase tracking-[0.3em] text-[#FDFCF0]/90 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Charleston Wedding Florist
        </motion.span>

        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-[#FDFCF0] max-w-5xl leading-[1.1] mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          {title}
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-[#FDFCF0]/80 max-w-2xl mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {subtitle}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Link href={ctaLink}>
            <motion.button
              className="px-10 py-4 bg-[#FDFCF0] text-[#2D2D2D] text-sm uppercase tracking-[0.2em] hover:bg-[#C9A9A6] hover:text-[#FDFCF0] transition-all duration-500"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {ctaText}
            </motion.button>
          </Link>
          <Link href="/contact">
            <motion.button
              className="px-10 py-4 border border-[#FDFCF0] text-[#FDFCF0] text-sm uppercase tracking-[0.2em] hover:bg-[#FDFCF0] hover:text-[#2D2D2D] transition-all duration-500"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Schedule Consultation
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <motion.div
          className="w-6 h-10 border border-[#FDFCF0]/50 rounded-full flex justify-center"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div className="w-1 h-2 bg-[#FDFCF0]/50 rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
}
