"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

interface Testimonial {
  _id: string;
  name: string;
  role?: string;
  quote: string;
  image?: string;
  rating?: number;
}

// Mock data for development
const mockTestimonials: Testimonial[] = [
  {
    _id: "1",
    name: "Cassie",
    role: "Bride",
    quote:
      "Hannah's eye for colors and attention to detail shows in every arrangement. From the smallest personals, to the ceremony arch, we could not have been more pleased! She was a pleasure to work with.",
    rating: 5,
  },
  {
    _id: "2",
    name: "Haley",
    role: "Bride",
    quote:
      "Hannah made the bouquet of my dreams and went above and beyond to ensure my day was beautiful! Working with her was one of the easiest parts of planning my wedding. I recommend her to everyone!",
    rating: 5,
  },
  {
    _id: "3",
    name: "Kelly",
    role: "Bride",
    quote:
      "Working with Hannah was one of the easiest parts of the wedding planning process - clear and constant communication, and I never had a doubt she would execute flawlessly!",
    rating: 5,
  },
  {
    _id: "4",
    name: "Sarah",
    role: "Bride",
    quote:
      "Hannah didn't hesitate with any of my ideas and met them with enthusiasm! The service she provides is more like a collaboration between friends and I truly enjoyed working with her.",
    rating: 5,
  },
];

interface TestimonialSliderProps {
  testimonials?: Testimonial[];
}

export default function TestimonialSlider({
  testimonials = mockTestimonials,
}: TestimonialSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = useCallback(
    (newDirection: number) => {
      setDirection(newDirection);
      setCurrentIndex((prev) => {
        let nextIndex = prev + newDirection;
        if (nextIndex < 0) nextIndex = testimonials.length - 1;
        if (nextIndex >= testimonials.length) nextIndex = 0;
        return nextIndex;
      });
    },
    [testimonials.length]
  );

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 7000);
    return () => clearInterval(timer);
  }, [paginate]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 80 : -80,
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <section className="py-32 lg:py-40 bg-[#FDFCF0] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large quote marks as background decoration */}
        <div className="absolute top-20 left-10 lg:left-32 text-[20rem] font-serif text-[#4A5D4E]/[0.03] leading-none select-none">
          "
        </div>
        <div className="absolute bottom-20 right-10 lg:right-32 text-[20rem] font-serif text-[#4A5D4E]/[0.03] leading-none select-none rotate-180">
          "
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-[#4A5D4E] mb-6">
            <span className="w-12 h-px bg-[#4A5D4E]" />
            Testimonials
            <span className="w-12 h-px bg-[#4A5D4E]" />
          </span>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-serif text-[#2D2D2D]">
            Kind <span className="italic text-[#C9A9A6]">Words</span>
          </h2>
        </motion.div>

        {/* Slider */}
        <div className="relative min-h-[350px] md:min-h-[300px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 },
                scale: { duration: 0.4 },
              }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
            >
              {/* Rating stars at top */}
              {testimonials[currentIndex].rating && (
                <div className="flex gap-2 mb-8">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <motion.svg
                      key={i}
                      className="w-5 h-5 text-[#C9A9A6]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </motion.svg>
                  ))}
                </div>
              )}

              {/* Quote */}
              <blockquote className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-serif text-[#2D2D2D] leading-[1.4] max-w-4xl mb-10">
                &ldquo;{testimonials[currentIndex].quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex flex-col items-center">
                {testimonials[currentIndex].image && (
                  <motion.div
                    className="w-16 h-16 rounded-full overflow-hidden mb-4 ring-2 ring-[#C9A9A6]/30 ring-offset-4 ring-offset-[#FDFCF0]"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                  >
                    <Image
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </motion.div>
                )}
                <div className="text-center">
                  <p className="text-lg font-serif text-[#4A5D4E]">
                    — {testimonials[currentIndex].name}
                  </p>
                  {testimonials[currentIndex].role && (
                    <p className="text-sm text-[#B8AFA6] mt-1">
                      {testimonials[currentIndex].role}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-8 mt-12">
          <motion.button
            onClick={() => paginate(-1)}
            className="w-14 h-14 rounded-full border border-[#B8AFA6]/50 flex items-center justify-center text-[#4A5D4E] hover:bg-[#4A5D4E] hover:text-[#FDFCF0] hover:border-[#4A5D4E] transition-all duration-300"
            aria-label="Previous testimonial"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </motion.button>

          {/* Progress dots */}
          <div className="flex gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className="relative p-1"
                aria-label={`Go to testimonial ${index + 1}`}
              >
                <span
                  className={`block w-2 h-2 rounded-full transition-all duration-500 ${
                    index === currentIndex ? "bg-[#4A5D4E]" : "bg-[#B8AFA6]/40"
                  }`}
                />
                {index === currentIndex && (
                  <motion.span
                    className="absolute inset-0 rounded-full border border-[#4A5D4E]"
                    layoutId="activeTestimonial"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          <motion.button
            onClick={() => paginate(1)}
            className="w-14 h-14 rounded-full border border-[#B8AFA6]/50 flex items-center justify-center text-[#4A5D4E] hover:bg-[#4A5D4E] hover:text-[#FDFCF0] hover:border-[#4A5D4E] transition-all duration-300"
            aria-label="Next testimonial"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
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
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
