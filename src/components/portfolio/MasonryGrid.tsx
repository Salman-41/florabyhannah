"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface PortfolioItem {
  _id: string;
  title: string;
  slug: { current: string };
  category: string;
  mainImage?: string;
  tags?: string[];
}

// Mock data for development
const categories = [
  "All",
  "Summer Weddings",
  "Bouquets",
  "Installations",
  "Centerpieces",
  "Ceremony",
];

const mockPortfolioItems: PortfolioItem[] = [
  {
    _id: "1",
    title: "Garden Romance",
    slug: { current: "garden-romance" },
    category: "Summer Weddings",
    mainImage:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
    tags: ["outdoor", "garden"],
  },
  {
    _id: "2",
    title: "Bridal Cascade",
    slug: { current: "bridal-cascade" },
    category: "Bouquets",
    mainImage:
      "https://images.unsplash.com/photo-1561128290-006dc4827e9a?q=80&w=1974&auto=format&fit=crop",
    tags: ["bridal", "cascade"],
  },
  {
    _id: "3",
    title: "Ceremony Arch",
    slug: { current: "ceremony-arch" },
    category: "Installations",
    mainImage:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop",
    tags: ["arch", "ceremony"],
  },
  {
    _id: "4",
    title: "Elegant Tables",
    slug: { current: "elegant-tables" },
    category: "Centerpieces",
    mainImage:
      "https://images.unsplash.com/photo-1478146896981-b80fe463b330?q=80&w=2080&auto=format&fit=crop",
    tags: ["table", "reception"],
  },
  {
    _id: "5",
    title: "Sunset Ceremony",
    slug: { current: "sunset-ceremony" },
    category: "Ceremony",
    mainImage:
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=2070&auto=format&fit=crop",
    tags: ["sunset", "outdoor"],
  },
  {
    _id: "6",
    title: "Blush Bouquet",
    slug: { current: "blush-bouquet" },
    category: "Bouquets",
    mainImage:
      "https://images.unsplash.com/photo-1525258946800-98cfd641d0de?q=80&w=2074&auto=format&fit=crop",
    tags: ["blush", "roses"],
  },
  {
    _id: "7",
    title: "Garden Party",
    slug: { current: "garden-party" },
    category: "Summer Weddings",
    mainImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
    tags: ["garden", "summer"],
  },
  {
    _id: "8",
    title: "Floral Wall",
    slug: { current: "floral-wall" },
    category: "Installations",
    mainImage:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2073&auto=format&fit=crop",
    tags: ["wall", "backdrop"],
  },
  {
    _id: "9",
    title: "Classic White",
    slug: { current: "classic-white" },
    category: "Centerpieces",
    mainImage:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop",
    tags: ["white", "classic"],
  },
  {
    _id: "10",
    title: "Wildflower Dreams",
    slug: { current: "wildflower-dreams" },
    category: "Bouquets",
    mainImage:
      "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=2070&auto=format&fit=crop",
    tags: ["wildflowers", "natural"],
  },
  {
    _id: "11",
    title: "Coastal Elegance",
    slug: { current: "coastal-elegance" },
    category: "Summer Weddings",
    mainImage:
      "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop",
    tags: ["coastal", "beach"],
  },
  {
    _id: "12",
    title: "Hanging Gardens",
    slug: { current: "hanging-gardens" },
    category: "Installations",
    mainImage:
      "https://images.unsplash.com/photo-1510076857177-7470076d4098?q=80&w=2072&auto=format&fit=crop",
    tags: ["hanging", "suspended"],
  },
];

interface MasonryGridProps {
  items?: PortfolioItem[];
}

export default function MasonryGrid({
  items = mockPortfolioItems,
}: MasonryGridProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const filteredItems =
    activeCategory === "All"
      ? items
      : items.filter((item) => item.category === activeCategory);

  // Generate random heights for masonry effect
  const getRandomHeight = (id: string) => {
    const heights = [
      "aspect-[3/4]",
      "aspect-[4/5]",
      "aspect-square",
      "aspect-[3/4]",
      "aspect-[4/3]",
    ];
    const index = parseInt(id) % heights.length;
    return heights[index];
  };

  return (
    <section className="py-8">
      {/* Filter Buttons */}
      <div className="mb-12 overflow-x-auto pb-4">
        <div className="flex gap-3 min-w-max">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 text-sm uppercase tracking-[0.15em] transition-all duration-300 whitespace-nowrap ${
                activeCategory === category
                  ? "bg-[#4A5D4E] text-[#FDFCF0]"
                  : "bg-transparent text-[#2D2D2D] border border-[#B8AFA6] hover:bg-[#FAF9F5]"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Masonry Grid */}
      <div className="masonry-grid">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item._id}
              className="masonry-grid-item"
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Link
                href={`/portfolio/${item.slug.current}`}
                className="group block relative overflow-hidden cursor-expand"
                onMouseEnter={() => setHoveredId(item._id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div
                  className={`relative ${getRandomHeight(
                    item._id
                  )} bg-[#FAF9F5]`}
                >
                  {item.mainImage ? (
                    <Image
                      src={item.mainImage}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-[#C9A9A6]/30 to-[#4A5D4E]/30" />
                  )}

                  {/* Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-[#1A1A1A]/60 flex flex-col items-center justify-center text-center p-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredId === item._id ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-xs uppercase tracking-[0.2em] text-[#C9A9A6] mb-2">
                      {item.category}
                    </span>
                    <h3 className="text-2xl font-serif text-[#FDFCF0] mb-4">
                      {item.title}
                    </h3>
                    <motion.div
                      className="w-10 h-10 rounded-full border border-[#FDFCF0] flex items-center justify-center"
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: "rgba(253, 252, 240, 0.2)",
                      }}
                    >
                      <svg
                        className="w-4 h-4 text-[#FDFCF0]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </motion.div>
                  </motion.div>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Empty State */}
      {filteredItems.length === 0 && (
        <motion.div
          className="text-center py-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <p className="text-lg text-[#2D2D2D]/60">
            No items found in this category.
          </p>
        </motion.div>
      )}
    </section>
  );
}
