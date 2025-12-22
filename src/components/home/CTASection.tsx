"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { RevealOnScroll } from "@/components/animations";

export default function CTASection() {
  return (
    <section className="py-24 lg:py-32 bg-[#4A5D4E] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#FDFCF0] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C9A9A6] rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center relative z-10">
        <RevealOnScroll>
          <span className="text-sm uppercase tracking-[0.3em] text-[#C9A9A6] mb-4 block">
            Now Booking
          </span>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-serif text-[#FDFCF0] mb-6">
            Now Booking 2025 Weddings
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          <p className="text-lg text-[#FDFCF0]/80 max-w-2xl mx-auto mb-10">
            I&apos;d love to talk to you about how I can make your floral dreams
            come true for your special day. Let&apos;s create something
            beautiful together.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.3}>
          <Link href="/contact">
            <motion.button
              className="px-12 py-5 bg-[#FDFCF0] text-[#4A5D4E] text-sm uppercase tracking-[0.2em] hover:bg-[#C9A9A6] hover:text-[#FDFCF0] transition-all duration-500"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Schedule a Consultation
            </motion.button>
          </Link>
        </RevealOnScroll>
      </div>
    </section>
  );
}
