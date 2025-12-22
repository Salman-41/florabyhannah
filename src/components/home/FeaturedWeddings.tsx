"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { RevealOnScroll } from "@/components/animations";

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
    coverImage: "/images/wedding-1.jpg",
    category: "Summer Weddings",
  },
  {
    _id: "2",
    title: "Elegant Southern Charm",
    slug: { current: "elegant-southern-charm" },
    venue: "Lowndes Grove",
    coverImage: "/images/wedding-2.jpg",
    category: "Installations",
  },
  {
    _id: "3",
    title: "Blush & Bloom",
    slug: { current: "blush-and-bloom" },
    venue: "Boone Hall",
    coverImage: "/images/wedding-3.jpg",
    category: "Bouquets",
  },
  {
    _id: "4",
    title: "Coastal Elegance",
    slug: { current: "coastal-elegance" },
    venue: "The Cedar Room",
    coverImage: "/images/wedding-4.jpg",
    category: "Summer Weddings",
  },
  {
    _id: "5",
    title: "Timeless Traditions",
    slug: { current: "timeless-traditions" },
    venue: "William Aiken House",
    coverImage: "/images/wedding-5.jpg",
    category: "Installations",
  },
  {
    _id: "6",
    title: "Garden Party Dreams",
    slug: { current: "garden-party-dreams" },
    venue: "Magnolia Plantation",
    coverImage: "/images/wedding-6.jpg",
    category: "Bouquets",
  },
];

interface FeaturedWeddingsProps {
  weddings?: Wedding[];
}

export default function FeaturedWeddings({
  weddings = mockWeddings,
}: FeaturedWeddingsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({
    container: containerRef,
  });

  return (
    <section className="py-24 lg:py-32 bg-[#FDFCF0] overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-12 lg:mb-16">
        <RevealOnScroll>
          <span className="text-sm uppercase tracking-[0.3em] text-[#4A5D4E] mb-4 block">
            Featured Work
          </span>
        </RevealOnScroll>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <RevealOnScroll delay={0.1}>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-serif text-[#2D2D2D] max-w-2xl">
              Featured Weddings
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] text-[#4A5D4E] hover:text-[#C9A9A6] transition-colors duration-300"
            >
              View All
              <motion.span
                className="inline-block"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
              >
                →
              </motion.span>
            </Link>
          </RevealOnScroll>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div
        ref={containerRef}
        className="horizontal-scroll pl-6 lg:pl-12 cursor-grab active:cursor-grabbing"
      >
        {weddings.map((wedding, index) => (
          <motion.div
            key={wedding._id}
            className="relative w-[85vw] md:w-[60vw] lg:w-[40vw] xl:w-[35vw] aspect-[3/4] flex-shrink-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Link
              href={`/portfolio/${wedding.slug.current}`}
              className="group block h-full"
            >
              <div className="relative h-full overflow-hidden bg-[#FAF9F5]">
                {wedding.coverImage ? (
                  <Image
                    src={wedding.coverImage}
                    alt={wedding.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 85vw, (max-width: 1024px) 60vw, 40vw"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-[#C9A9A6]/20 to-[#4A5D4E]/20" />
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                  <span className="text-xs uppercase tracking-[0.2em] text-[#C9A9A6] mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {wedding.category}
                  </span>
                  <h3 className="text-2xl lg:text-3xl font-serif text-[#FDFCF0] mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {wedding.title}
                  </h3>
                  <p className="text-sm text-[#FDFCF0]/70 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    {wedding.venue}
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}

        {/* View All Card */}
        <motion.div
          className="w-[60vw] md:w-[40vw] lg:w-[25vw] aspect-[3/4] flex-shrink-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link href="/portfolio" className="group text-center">
            <motion.div
              className="w-20 h-20 mx-auto mb-6 rounded-full border border-[#4A5D4E] flex items-center justify-center group-hover:bg-[#4A5D4E] transition-colors duration-500"
              whileHover={{ scale: 1.1 }}
            >
              <span className="text-2xl text-[#4A5D4E] group-hover:text-[#FDFCF0] transition-colors duration-500">
                →
              </span>
            </motion.div>
            <span className="text-sm uppercase tracking-[0.2em] text-[#4A5D4E] group-hover:text-[#C9A9A6] transition-colors duration-300">
              View All Work
            </span>
          </Link>
        </motion.div>
      </div>

      {/* Progress Indicator */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-8">
        <div className="h-[2px] bg-[#B8AFA6]/30 max-w-xs">
          <motion.div
            className="h-full bg-[#4A5D4E]"
            style={{ scaleX: scrollXProgress, transformOrigin: "left" }}
          />
        </div>
      </div>
    </section>
  );
}
