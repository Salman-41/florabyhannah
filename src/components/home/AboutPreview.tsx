"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  RevealOnScroll,
  MagneticWrapper,
  FloatingFlowers,
  FloralPattern,
} from "@/components/animations";

export default function AboutPreview() {
  return (
    <section className="py-24 lg:py-32 bg-[#FDFCF0] relative overflow-hidden">
      {/* Floating Floral Patterns */}
      <FloatingFlowers density="medium" />

      {/* Section corner florals */}
      <div className="absolute inset-0 pointer-events-none">
        <FloralPattern
          variant="branch"
          animate={false}
          className="absolute top-14 left-6 w-20 h-20 sm:w-28 sm:h-28 text-deep-sage/10 -rotate-6"
        />
        <FloralPattern
          variant="leaf"
          animate={false}
          className="absolute -top-6 -right-6 w-40 h-40 sm:w-60 sm:h-60 text-deep-sage/14 rotate-12"
        />
        <FloralPattern
          variant="petal"
          animate={false}
          className="absolute -bottom-8 -left-6 w-44 h-44 sm:w-64 sm:h-64 text-muted-rose/14 -rotate-12"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Image */}
          <RevealOnScroll direction="left">
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"
                  alt="Hannah - Flora by Hannah"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Decorative border */}
              <motion.div
                className="absolute inset-0 border-2 border-[#4A5D4E]/20 -m-2 sm:-m-4 pointer-events-none"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
              />

              {/* Floral frame accents (like the booking section vibe) */}
              <div className="absolute inset-0 pointer-events-none">
                <FloralPattern
                  variant="branch"
                  animate={false}
                  className="absolute -top-6 -left-6 w-32 h-32 sm:w-40 sm:h-40 text-muted-rose/24 -rotate-12"
                />
                <FloralPattern
                  variant="blossom"
                  animate={false}
                  className="absolute -bottom-8 -right-6 w-36 h-36 sm:w-44 sm:h-44 text-deep-sage/18 rotate-12"
                />
              </div>
            </div>
          </RevealOnScroll>

          {/* Content */}
          <div>
            <RevealOnScroll>
              <div className="flex items-center gap-4 mb-6">
                <span className="w-12 h-px bg-[#4A5D4E]" />
                <span className="text-xs uppercase tracking-[0.3em] text-[#4A5D4E]">
                  About Flora
                </span>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.1}>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-serif text-[#2D2D2D] mb-6 leading-[1.1]">
                Your Charleston{" "}
                <span className="italic text-[#C9A9A6]">Wedding Florist</span>
              </h2>
            </RevealOnScroll>

            <RevealOnScroll delay={0.2}>
              <div className="space-y-5 mb-10">
                <p className="text-lg text-[#2D2D2D]/70 leading-relaxed">
                  Hi! My name is Hannah, and I&apos;m the owner and founder of
                  Flora by Hannah. I fell in love with flowers growing up, and I
                  started Flora as a way to hopefully share my love for these
                  beautiful creations with as many people as possible.
                </p>
                <p className="text-lg text-[#2D2D2D]/70 leading-relaxed">
                  Flora Designs specializes in creating classic and timeless
                  florals that bring weddings and events to life. I love to
                  create floral moments that make your special day
                  unforgettable.
                </p>
              </div>
            </RevealOnScroll>

            {/* Stats */}
            <RevealOnScroll delay={0.3}>
              <div className="grid grid-cols-3 gap-8 py-8 mb-10 border-y border-[#B8AFA6]/30">
                <div>
                  <div className="text-3xl lg:text-4xl font-serif text-[#4A5D4E] mb-2">
                    150+
                  </div>
                  <div className="text-xs uppercase tracking-wider text-[#2D2D2D]/50">
                    Weddings
                  </div>
                </div>
                <div>
                  <div className="text-3xl lg:text-4xl font-serif text-[#4A5D4E] mb-2">
                    7
                  </div>
                  <div className="text-xs uppercase tracking-wider text-[#2D2D2D]/50">
                    Years
                  </div>
                </div>
                <div>
                  <div className="text-3xl lg:text-4xl font-serif text-[#4A5D4E] mb-2">
                    5★
                  </div>
                  <div className="text-xs uppercase tracking-wider text-[#2D2D2D]/50">
                    Rating
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.4}>
              <MagneticWrapper>
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-4 text-sm uppercase tracking-[0.2em] text-[#4A5D4E] hover:text-[#C9A9A6] transition-colors duration-300"
                >
                  Read My Story
                  <motion.span
                    className="flex items-center justify-center w-10 h-10 rounded-full border border-[#4A5D4E] group-hover:bg-[#4A5D4E] group-hover:text-[#FDFCF0] transition-all duration-300"
                    whileHover={{ x: 5 }}
                  >
                    →
                  </motion.span>
                </Link>
              </MagneticWrapper>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
