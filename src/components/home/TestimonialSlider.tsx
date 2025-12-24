"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { FloralPattern, FloatingFlowers } from "@/components/animations";

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
    <section className="py-32 lg:py-40 bg-antique-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <FloatingFlowers density="light" />

        {/* Soft romantic glows */}
        <div className="absolute -top-24 left-1/2 h-112 w-[min(92vw,56rem)] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(201,169,166,0.16)_0%,rgba(201,169,166,0.07)_40%,transparent_72%)] blur-2xl" />
        <div className="absolute -bottom-28 left-[-10%] h-112 w-md rounded-full bg-[radial-gradient(ellipse_at_center,rgba(74,93,78,0.12)_0%,rgba(74,93,78,0.05)_45%,transparent_72%)] blur-2xl" />

        {/* Section corner florals */}
        <FloralPattern
          variant="petal"
          animate={false}
          className="absolute -top-6 -left-6 w-40 h-40 sm:w-60 sm:h-60 text-muted-rose/16 rotate-12"
        />
        <FloralPattern
          variant="blossom"
          animate={false}
          className="absolute -bottom-8 -right-6 w-44 h-44 sm:w-64 sm:h-64 text-deep-sage/14 -rotate-12"
        />

        <FloralPattern
          variant="leaf"
          animate={false}
          className="absolute top-24 right-10 w-20 h-20 sm:w-28 sm:h-28 text-deep-sage/10 rotate-6"
        />
        <FloralPattern
          variant="branch"
          animate={false}
          className="absolute bottom-24 left-10 w-20 h-20 sm:w-28 sm:h-28 text-muted-rose/10 -rotate-6"
        />

        {/* Large quote marks as background decoration */}
        <div className="absolute top-20 left-10 lg:left-32 text-[20rem] font-serif text-deep-sage/3 leading-none select-none">
          &ldquo;
        </div>
        <div className="absolute bottom-20 right-10 lg:right-32 text-[20rem] font-serif text-deep-sage/3 leading-none select-none rotate-180">
          &rdquo;
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
          <div className="flex justify-center mb-7">
            <span className="fb-kicker-pill fb-kicker-pill--light">
              Testimonials
            </span>
          </div>

          <h2 className="text-5xl lg:text-6xl font-serif text-charcoal leading-[1.06] tracking-[-0.02em]">
            Kind <span className="italic text-muted-rose">Words</span>
          </h2>

          <div className="mt-7">
            <div className="fb-divider" />
          </div>
        </motion.div>

        {/* Slider */}
        <div className="relative min-h-87.5 md:min-h-75 flex items-center justify-center">
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
              <div className="mx-auto w-full max-w-4xl">
                <blockquote className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-serif text-charcoal leading-[1.35]">
                  &ldquo;{testimonials[currentIndex].quote}&rdquo;
                </blockquote>

                <div className="mt-10">
                  <div className="mx-auto h-px w-36 bg-linear-to-r from-transparent via-muted-rose/35 to-transparent" />
                </div>

                <p className="mt-8 text-sm sm:text-base uppercase tracking-[0.2em] text-deep-sage">
                  — {testimonials[currentIndex].name}
                  {testimonials[currentIndex].role
                    ? `, ${testimonials[currentIndex].role}`
                    : ""}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-8 mt-12">
          <motion.button
            onClick={() => paginate(-1)}
            className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-deep-sage hover:text-muted-rose transition-colors duration-300"
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
            <span className="border-b border-transparent hover:border-muted-rose/60">
              Previous
            </span>
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
                className="relative py-2 px-1"
                aria-label={`Go to testimonial ${index + 1}`}
              >
                <span
                  className={`block h-px w-10 transition-all duration-500 ${
                    index === currentIndex ? "bg-deep-sage" : "bg-warm-taupe/40"
                  }`}
                />
                {index === currentIndex && (
                  <motion.span
                    className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-deep-sage"
                    layoutId="activeTestimonial"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          <motion.button
            onClick={() => paginate(1)}
            className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-deep-sage hover:text-muted-rose transition-colors duration-300"
            aria-label="Next testimonial"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="border-b border-transparent hover:border-muted-rose/60">
              Next
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
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
