"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { FloralPattern, FloatingFlowers } from "@/components/animations";

export default function CTASection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const contentY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 lg:py-48 overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div className="absolute inset-0 z-0" style={{ y: backgroundY }}>
        <Image
          src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop"
          alt="Floral background"
          fill
          className="object-cover"
          sizes="100vw"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#1a1a1a]/70" />
        {/* Gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/30 via-transparent to-[#1a1a1a]/50" />
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        <FloatingFlowers density="medium" />

        {/* Section corner florals */}
        <FloralPattern
          variant="branch"
          animate={false}
          className="absolute -top-12 -left-12 w-44 h-44 sm:w-64 sm:h-64 text-muted-rose/12 rotate-12"
        />
        <FloralPattern
          variant="leaf"
          animate={false}
          className="absolute -bottom-14 -right-14 w-52 h-52 sm:w-72 sm:h-72 text-antique-white/10 -rotate-12"
        />

        {/* Animated floating circles */}
        <motion.div
          className="absolute top-20 left-[15%] w-64 h-64 rounded-full border border-[#FDFCF0]/10"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-[10%] w-96 h-96 rounded-full border border-[#C9A9A6]/10"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Corner decorative lines */}
        <div className="absolute top-12 left-12 w-24 h-24">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-[#C9A9A6]/40 to-transparent" />
          <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-[#C9A9A6]/40 to-transparent" />
        </div>
        <div className="absolute bottom-12 right-12 w-24 h-24">
          <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-[#C9A9A6]/40 to-transparent" />
          <div className="absolute bottom-0 right-0 h-full w-px bg-gradient-to-t from-[#C9A9A6]/40 to-transparent" />
        </div>
      </div>

      <motion.div
        className="max-w-4xl mx-auto px-6 lg:px-12 text-center relative z-10"
        style={{ y: contentY }}
      >
        {/* Decorative flower icon */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            className="mx-auto text-[#C9A9A6]"
          >
            <circle
              cx="30"
              cy="30"
              r="8"
              stroke="currentColor"
              strokeWidth="1"
            />
            <path
              d="M30 10C30 10 35 20 30 22C25 20 30 10 30 10Z"
              stroke="currentColor"
              strokeWidth="1"
            />
            <path
              d="M30 50C30 50 35 40 30 38C25 40 30 50 30 50Z"
              stroke="currentColor"
              strokeWidth="1"
            />
            <path
              d="M10 30C10 30 20 35 22 30C20 25 10 30 10 30Z"
              stroke="currentColor"
              strokeWidth="1"
            />
            <path
              d="M50 30C50 30 40 35 38 30C40 25 50 30 50 30Z"
              stroke="currentColor"
              strokeWidth="1"
            />
            <path
              d="M16 16C16 16 24 22 26 26C22 24 16 16 16 16Z"
              stroke="currentColor"
              strokeWidth="1"
              opacity="0.6"
            />
            <path
              d="M44 44C44 44 36 38 34 34C38 36 44 44 44 44Z"
              stroke="currentColor"
              strokeWidth="1"
              opacity="0.6"
            />
            <path
              d="M44 16C44 16 36 22 34 26C38 24 44 16 44 16Z"
              stroke="currentColor"
              strokeWidth="1"
              opacity="0.6"
            />
            <path
              d="M16 44C16 44 24 38 26 34C22 36 16 44 16 44Z"
              stroke="currentColor"
              strokeWidth="1"
              opacity="0.6"
            />
          </svg>
        </motion.div>

        <motion.span
          className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-[#C9A9A6] mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Now Booking
        </motion.span>

        <motion.h2
          className="text-5xl lg:text-6xl font-serif text-[#FDFCF0] mb-6 leading-[1.2]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Now Booking{" "}
          <span className="italic text-[#C9A9A6]">2025 Weddings</span>
        </motion.h2>

        <motion.p
          className="text-lg lg:text-xl text-[#FDFCF0]/70 max-w-2xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          I&apos;d love to talk to you about how I can make your floral dreams
          come true for your special day. Let&apos;s create something beautiful
          together.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link href="/contact">
            <motion.button
              className="group relative px-14 py-5 bg-[#FDFCF0] text-[#1a1a1a] text-sm uppercase tracking-[0.25em] overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 transition-colors duration-500 group-hover:text-[#FDFCF0]">
                Schedule a Consultation
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

        {/* Trust indicators */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-8 mt-16 pt-12 border-t border-[#FDFCF0]/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="text-center">
            <span className="block text-3xl font-serif text-[#FDFCF0]">
              150+
            </span>
            <span className="text-xs uppercase tracking-wider text-[#FDFCF0]/50">
              Weddings Created
            </span>
          </div>
          <div className="w-px h-12 bg-[#FDFCF0]/20 hidden sm:block" />
          <div className="text-center">
            <span className="block text-3xl font-serif text-[#FDFCF0]">
              5.0
            </span>
            <span className="text-xs uppercase tracking-wider text-[#FDFCF0]/50">
              Google Rating
            </span>
          </div>
          <div className="w-px h-12 bg-[#FDFCF0]/20 hidden sm:block" />
          <div className="text-center">
            <span className="block text-3xl font-serif text-[#FDFCF0]">7+</span>
            <span className="text-xs uppercase tracking-wider text-[#FDFCF0]/50">
              Years Experience
            </span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
