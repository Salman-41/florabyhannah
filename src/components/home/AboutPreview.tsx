"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { RevealOnScroll, MagneticWrapper } from "@/components/animations";

export default function AboutPreview() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const decorY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      ref={sectionRef}
      className="py-32 lg:py-40 bg-[#FDFCF0] overflow-hidden relative"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234A5D4E' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Images - Asymmetrical Layout */}
          <div className="lg:col-span-6 relative">
            <RevealOnScroll direction="left" className="relative">
              <div className="relative">
                {/* Main Image */}
                <motion.div
                  className="relative aspect-[4/5] w-[85%] overflow-hidden"
                  style={{ y: imageY }}
                >
                  <Image
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"
                    alt="Hannah - Flora by Hannah"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  {/* Image overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/20 to-transparent" />
                </motion.div>

                {/* Secondary floating image */}
                <motion.div
                  className="absolute -bottom-12 -right-8 lg:-right-16 w-[55%] aspect-[3/4] overflow-hidden shadow-2xl"
                  style={{ y: decorY }}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  <Image
                    src="https://images.unsplash.com/photo-1487530811176-3780de880c2d?q=80&w=800&auto=format&fit=crop"
                    alt="Floral arrangement detail"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </motion.div>

                {/* Decorative frame */}
                <motion.div
                  className="absolute -top-6 -left-6 w-32 h-32 border border-[#4A5D4E]/20"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                />
              </div>
            </RevealOnScroll>
          </div>

          {/* Content */}
          <div className="lg:col-span-6 lg:pl-12">
            <RevealOnScroll>
              <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-[#4A5D4E] mb-6">
                <span className="w-12 h-px bg-[#4A5D4E]" />
                About Flora
              </span>
            </RevealOnScroll>

            <RevealOnScroll delay={0.1}>
              <h2 className="text-5xl lg:text-6xl font-serif text-[#2D2D2D] mb-8 leading-[1.2]">
                Your Charleston <span className="italic text-[#C9A9A6]">Wedding Florist</span>
              </h2>
            </RevealOnScroll>

            <RevealOnScroll delay={0.2}>
              <div className="space-y-6 mb-10">
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
              <div className="flex gap-12 mb-10 py-8 border-y border-[#B8AFA6]/30">
                <div>
                  <span className="block text-4xl font-serif text-[#4A5D4E]">
                    150+
                  </span>
                  <span className="text-sm text-[#2D2D2D]/50 uppercase tracking-wider">
                    Weddings
                  </span>
                </div>
                <div>
                  <span className="block text-4xl font-serif text-[#4A5D4E]">
                    7
                  </span>
                  <span className="text-sm text-[#2D2D2D]/50 uppercase tracking-wider">
                    Years
                  </span>
                </div>
                <div>
                  <span className="block text-4xl font-serif text-[#4A5D4E]">
                    5★
                  </span>
                  <span className="text-sm text-[#2D2D2D]/50 uppercase tracking-wider">
                    Rating
                  </span>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.4}>
              <MagneticWrapper>
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-4"
                >
                  <span className="text-sm uppercase tracking-[0.2em] text-[#4A5D4E] group-hover:text-[#C9A9A6] transition-colors duration-300">
                    Read My Story
                  </span>
                  <motion.span
                    className="flex items-center justify-center w-12 h-12 rounded-full border border-[#4A5D4E] text-[#4A5D4E] group-hover:bg-[#4A5D4E] group-hover:text-[#FDFCF0] transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
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
