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
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const headerY = useTransform(scrollYProgress, [0, 0.5], [100, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className="py-32 lg:py-40 bg-[#1a1a1a] overflow-hidden relative"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#4A5D4E]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#C9A9A6]/5 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <motion.div
        className="max-w-7xl mx-auto px-6 lg:px-12 mb-16 lg:mb-20 relative z-10"
        style={{ y: headerY, opacity: headerOpacity }}
      >
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div>
            <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-[#C9A9A6] mb-6">
              <span className="w-12 h-px bg-[#C9A9A6]" />
              Featured Work
            </span>
            <h2 className="text-4xl lg:text-6xl xl:text-7xl font-serif text-[#FDFCF0] leading-[1.1]">
              Featured
              <br />
              <span className="italic text-[#C9A9A6]">Weddings</span>
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-4"
          >
            <span className="text-sm uppercase tracking-[0.2em] text-[#FDFCF0]/70 group-hover:text-[#C9A9A6] transition-colors duration-300">
              View All Work
            </span>
            <motion.span
              className="flex items-center justify-center w-12 h-12 rounded-full border border-[#FDFCF0]/30 text-[#FDFCF0] group-hover:bg-[#C9A9A6] group-hover:border-[#C9A9A6] group-hover:text-[#1a1a1a] transition-all duration-300"
              whileHover={{ scale: 1.1 }}
            >
              →
            </motion.span>
          </Link>
        </div>
      </motion.div>

      {/* Bento Grid Layout */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-6">
          {/* Large Feature - spans 7 columns */}
          <motion.div
            className="lg:col-span-7 lg:row-span-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Link
              href={`/portfolio/${weddings[0].slug.current}`}
              className="group block relative h-full min-h-[500px] lg:min-h-[600px] overflow-hidden"
            >
              <div className="absolute inset-0">
                {weddings[0].coverImage && (
                  <Image
                    src={weddings[0].coverImage}
                    alt={weddings[0].title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                )}
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
                <span className="inline-block px-3 py-1 text-xs uppercase tracking-[0.2em] text-[#1a1a1a] bg-[#C9A9A6] mb-4">
                  {weddings[0].category}
                </span>
                <h3 className="text-3xl lg:text-4xl font-serif text-[#FDFCF0] mb-3 group-hover:text-[#C9A9A6] transition-colors duration-300">
                  {weddings[0].title}
                </h3>
                <p className="text-sm text-[#FDFCF0]/60 flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
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
                  {weddings[0].venue}
                </p>
              </div>
            </Link>
          </motion.div>

          {/* Smaller cards - each spans 5 columns */}
          {weddings.slice(1, 4).map((wedding, index) => (
            <motion.div
              key={wedding._id}
              className="lg:col-span-5"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 * (index + 1) }}
            >
              <Link
                href={`/portfolio/${wedding.slug.current}`}
                className="group block relative h-full min-h-[280px] overflow-hidden"
              >
                <div className="absolute inset-0">
                  {wedding.coverImage && (
                    <Image
                      src={wedding.coverImage}
                      alt={wedding.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-xs uppercase tracking-[0.2em] text-[#C9A9A6] mb-2 block">
                    {wedding.category}
                  </span>
                  <h3 className="text-xl lg:text-2xl font-serif text-[#FDFCF0] mb-1 group-hover:text-[#C9A9A6] transition-colors duration-300">
                    {wedding.title}
                  </h3>
                  <p className="text-sm text-[#FDFCF0]/50">{wedding.venue}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom decorative line */}
      <motion.div
        className="max-w-7xl mx-auto px-6 lg:px-12 mt-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#FDFCF0]/20 to-transparent" />
          <span className="text-xs uppercase tracking-[0.3em] text-[#FDFCF0]/30">
            Est. 2018
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#FDFCF0]/20 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
