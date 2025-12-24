"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  RevealOnScroll,
  FloatingFlowers,
  FloralPattern,
} from "@/components/animations";

interface Wedding {
  _id: string;
  title: string;
  slug: { current: string };
  venue: string;
  coverImage?: string;
  category: string;
}

// Mock data for development
const mockWeddings: Wedding[] = [
  {
    _id: "1",
    title: "Summer Garden Romance",
    slug: { current: "summer-garden-romance" },
    venue: "Middleton Place",
    coverImage:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
    category: "Summer Weddings",
  },
  {
    _id: "2",
    title: "Elegant Southern Charm",
    slug: { current: "elegant-southern-charm" },
    venue: "Lowndes Grove",
    coverImage:
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=2070&auto=format&fit=crop",
    category: "Installations",
  },
  {
    _id: "3",
    title: "Blush & Bloom",
    slug: { current: "blush-and-bloom" },
    venue: "Boone Hall",
    coverImage:
      "https://images.unsplash.com/photo-1561128290-006dc4827e9a?q=80&w=1974&auto=format&fit=crop",
    category: "Bouquets",
  },
  {
    _id: "4",
    title: "Coastal Elegance",
    slug: { current: "coastal-elegance" },
    venue: "The Cedar Room",
    coverImage:
      "https://images.unsplash.com/photo-1478146896981-b80fe463b330?q=80&w=2080&auto=format&fit=crop",
    category: "Summer Weddings",
  },
];

interface FeaturedWeddingsProps {
  weddings?: Wedding[];
}

export default function FeaturedWeddings({
  weddings = mockWeddings,
}: FeaturedWeddingsProps) {
  return (
    <section className="py-32 lg:py-40 bg-[#1a1a1a] overflow-hidden relative">
      {/* Enhanced Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <FloatingFlowers density="medium" />
        <div className="absolute top-10 left-10 w-[600px] h-[600px] bg-[#4A5D4E]/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-[700px] h-[700px] bg-[#C9A9A6]/8 rounded-full blur-[140px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#FDFCF0]/3 rounded-full blur-[100px]" />

        {/* Section corner florals */}
        <FloralPattern
          variant="leaf"
          animate={false}
          className="absolute -top-8 -right-8 w-48 h-48 sm:w-72 sm:h-72 text-muted-rose/14 rotate-12"
        />
        <FloralPattern
          variant="branch"
          animate={false}
          className="absolute -bottom-10 -left-8 w-56 h-56 sm:w-80 sm:h-80 text-antique-white/12 -rotate-12"
        />

        <FloralPattern
          variant="blossom"
          animate={false}
          className="absolute top-16 left-6 w-24 h-24 sm:w-32 sm:h-32 text-antique-white/10 rotate-6"
        />
        <FloralPattern
          variant="petal"
          animate={false}
          className="absolute bottom-16 right-8 w-24 h-24 sm:w-32 sm:h-32 text-muted-rose/12 -rotate-6"
        />
      </div>

      {/* Header */}
      <RevealOnScroll>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-20 lg:mb-24 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="max-w-2xl">
              {/* Badge + micro-ornament (matches other sections) */}
              <div className="flex items-center gap-4 mb-8">
                <span className="hidden sm:block w-16 h-px bg-[#C9A9A6]/80" />
                <span className="inline-flex items-center gap-2 rounded-full border border-[#FDFCF0]/15 bg-[#FDFCF0]/5 px-4 py-2 backdrop-blur-md">
                  <span className="text-xs uppercase tracking-[0.35em] text-[#C9A9A6] font-light">
                    Our Portfolio
                  </span>
                  <span className="relative w-5 h-5">
                    <FloralPattern
                      variant="blossom"
                      animate={false}
                      className="absolute inset-0 w-5 h-5 text-[#C9A9A6]/70"
                    />
                  </span>
                </span>
              </div>

              {/* Soft panel behind copy for a more premium, cohesive look */}
              <div className="relative">
                <div className="absolute -inset-6 sm:-inset-8 rounded-3xl bg-linear-to-br from-[#FDFCF0]/6 via-transparent to-[#C9A9A6]/6 blur-sm" />
                <div className="relative">
                  <h2 className="text-5xl lg:text-7xl font-serif text-[#FDFCF0] leading-[1.05] mb-6">
                    Featured{" "}
                    <span className="italic text-[#C9A9A6]">
                      Wedding Florals
                    </span>
                  </h2>
                  <p className="text-base lg:text-lg text-[#FDFCF0]/65 leading-relaxed font-light max-w-xl">
                    Each celebration tells a unique story through carefully
                    curated blooms and designs that capture the essence of your
                    special day.
                  </p>
                </div>
              </div>
            </div>
            <Link
              href="/portfolio"
              className="group relative inline-flex items-center gap-4 overflow-hidden rounded-full border border-[#FDFCF0]/20 px-8 py-4 text-xs uppercase tracking-[0.25em] text-[#FDFCF0] shadow-sm transition-colors duration-300 hover:border-[#C9A9A6]/70 self-start lg:self-end"
            >
              <span className="relative z-10 font-light transition-colors duration-300 group-hover:text-[#1a1a1a]">
                Explore Gallery
              </span>
              <motion.span
                className="relative z-10 flex items-center justify-center w-9 h-9 rounded-full bg-[#C9A9A6]/14 text-[#C9A9A6] transition-all duration-300 group-hover:bg-[#1a1a1a]/12 group-hover:text-[#1a1a1a]"
                whileHover={{ rotate: 45 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                →
              </motion.span>
              <motion.div
                className="absolute inset-0 bg-[#C9A9A6]"
                initial={{ x: "-105%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
              />
            </Link>
          </div>
        </div>
      </RevealOnScroll>

      {/* Modern Asymmetric Grid Layout */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Hero Feature - Large Left Column */}
          <RevealOnScroll delay={0.1} className="lg:col-span-7">
            <Link
              href={`/portfolio/${weddings[0].slug.current}`}
              className="group block relative h-full min-h-[500px] lg:min-h-[700px] overflow-hidden rounded-2xl"
            >
              <div className="absolute inset-0">
                {weddings[0].coverImage && (
                  <Image
                    src={weddings[0].coverImage}
                    alt={weddings[0].title}
                    fill
                    className="object-cover transition-all duration-[1200ms] group-hover:scale-110"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    priority
                  />
                )}
                {/* Enhanced gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/60 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-700" />

                {/* Decorative border */}
                <div className="absolute inset-0 border-2 border-[#FDFCF0]/0 group-hover:border-[#C9A9A6]/30 rounded-2xl transition-all duration-700" />
              </div>

              {/* Content with better spacing */}
              <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
                <div className="space-y-4">
                  <span className="inline-block px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-[#1a1a1a] bg-[#C9A9A6] font-medium rounded-full">
                    {weddings[0].category}
                  </span>
                  <h3 className="text-3xl lg:text-5xl font-serif text-[#FDFCF0] leading-[1.2] group-hover:text-[#C9A9A6] transition-colors duration-500">
                    {weddings[0].title}
                  </h3>
                  <div className="flex items-center gap-3 text-sm lg:text-base text-[#FDFCF0]/70">
                    <svg
                      className="w-5 h-5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="font-light">{weddings[0].venue}</span>
                  </div>

                  {/* View project indicator */}
                  <div className="flex items-center gap-3 text-sm text-[#C9A9A6] opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                    <span className="uppercase tracking-[0.2em] font-light">
                      View Project
                    </span>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </RevealOnScroll>

          {/* Right Column - Stacked Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:gap-8">
            {weddings.slice(1, 4).map((wedding, index) => (
              <RevealOnScroll key={wedding._id} delay={0.2 + index * 0.1}>
                <Link
                  href={`/portfolio/${wedding.slug.current}`}
                  className="group block relative h-full min-h-[220px] overflow-hidden rounded-2xl"
                >
                  <div className="absolute inset-0">
                    {wedding.coverImage && (
                      <Image
                        src={wedding.coverImage}
                        alt={wedding.title}
                        fill
                        className="object-cover transition-all duration-[1000ms] group-hover:scale-110"
                        sizes="(max-width: 1024px) 100vw, 40vw"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/95 via-[#1A1A1A]/50 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-700" />

                    {/* Decorative border */}
                    <div className="absolute inset-0 border-2 border-[#FDFCF0]/0 group-hover:border-[#C9A9A6]/30 rounded-2xl transition-all duration-700" />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-7">
                    <div className="space-y-2.5">
                      <span className="inline-block text-[10px] uppercase tracking-[0.3em] text-[#C9A9A6] font-light">
                        {wedding.category}
                      </span>
                      <h3 className="text-xl lg:text-2xl font-serif text-[#FDFCF0] leading-[1.3] group-hover:text-[#C9A9A6] transition-colors duration-500">
                        {wedding.title}
                      </h3>
                      <p className="text-sm text-[#FDFCF0]/60 font-light">
                        {wedding.venue}
                      </p>
                    </div>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Bottom decorative section */}
      <RevealOnScroll delay={0.5}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-20 lg:mt-24">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#C9A9A6]/20 to-[#C9A9A6]/40" />
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs uppercase tracking-[0.3em] text-[#FDFCF0]/40 font-light">
                Established 2018
              </span>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#C9A9A6]" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#C9A9A6]/60" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#C9A9A6]/30" />
              </div>
            </div>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-[#C9A9A6]/20 to-[#C9A9A6]/40" />
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
