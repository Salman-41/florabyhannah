"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { RevealOnScroll, MagneticWrapper } from "@/components/animations";

export default function AboutPreview() {
  return (
    <section className="py-24 lg:py-32 bg-[#FDFCF0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <RevealOnScroll direction="left" className="relative">
            <div className="relative aspect-[4/5] lg:aspect-[3/4]">
              <motion.div
                className="absolute -top-4 -left-4 w-full h-full border border-[#C9A9A6]/30"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              />
              <div className="relative w-full h-full overflow-hidden bg-[#FAF9F5]">
                <Image
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"
                  alt="Hannah - Flora by Hannah"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Decorative element */}
              <motion.div
                className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#C9A9A6]/10 rounded-full"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring" }}
              />
            </div>
          </RevealOnScroll>

          {/* Content */}
          <div className="lg:pl-8">
            <RevealOnScroll>
              <span className="text-sm uppercase tracking-[0.3em] text-[#4A5D4E] mb-4 block">
                About Flora
              </span>
            </RevealOnScroll>

            <RevealOnScroll delay={0.1}>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-serif text-[#2D2D2D] mb-6">
                Your Charleston Wedding Florist
              </h2>
            </RevealOnScroll>

            <RevealOnScroll delay={0.2}>
              <p className="text-lg text-[#2D2D2D]/70 leading-relaxed mb-6">
                Hi! My name is Hannah, and I&apos;m the owner and founder of
                Flora by Hannah. I fell in love with flowers growing up, and I
                started Flora as a way to hopefully share my love for these
                beautiful creations with as many people as possible.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={0.3}>
              <p className="text-lg text-[#2D2D2D]/70 leading-relaxed mb-8">
                Flora Designs specializes in creating classic and timeless
                florals that bring weddings and events to life. I love to create
                floral moments that make your special day unforgettable and
                undeniably stunning.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={0.4}>
              <MagneticWrapper>
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-[#4A5D4E] hover:text-[#C9A9A6] transition-colors duration-300"
                >
                  <span>Read My Story</span>
                  <motion.span
                    className="inline-block"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
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
