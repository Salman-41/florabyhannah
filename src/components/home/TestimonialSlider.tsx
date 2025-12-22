"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { RevealOnScroll } from "@/components/animations";

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
    }, 6000);
    return () => clearInterval(timer);
  }, [paginate]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <section className="py-24 lg:py-32 bg-[#FAF9F5]">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <RevealOnScroll className="text-center mb-16">
          <span className="text-sm uppercase tracking-[0.3em] text-[#4A5D4E] mb-4 block">
            Testimonials
          </span>
          <h2 className="text-4xl lg:text-5xl font-serif text-[#2D2D2D]">
            Kind Words
          </h2>
        </RevealOnScroll>

        {/* Slider */}
        <div className="relative min-h-[300px] md:min-h-[250px] flex items-center justify-center">
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
                opacity: { duration: 0.3 },
              }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
            >
              {/* Quote Icon */}
              <svg
                className="w-12 h-12 text-[#C9A9A6]/40 mb-8"
                fill="currentColor"
                viewBox="0 0 32 32"
              >
                <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
              </svg>

              {/* Quote */}
              <blockquote className="text-xl md:text-2xl lg:text-3xl font-serif text-[#2D2D2D] leading-relaxed max-w-4xl mb-8">
                &ldquo;{testimonials[currentIndex].quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                {testimonials[currentIndex].image && (
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                )}
                <div>
                  <p className="text-lg font-serif text-[#4A5D4E]">
                    {testimonials[currentIndex].name}
                  </p>
                  {testimonials[currentIndex].role && (
                    <p className="text-sm text-[#B8AFA6]">
                      {testimonials[currentIndex].role}
                    </p>
                  )}
                </div>
              </div>

              {/* Rating */}
              {testimonials[currentIndex].rating && (
                <div className="flex gap-1 mt-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-[#C9A9A6]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6 mt-12">
          <button
            onClick={() => paginate(-1)}
            className="w-12 h-12 rounded-full border border-[#B8AFA6] flex items-center justify-center text-[#4A5D4E] hover:bg-[#4A5D4E] hover:text-[#FDFCF0] hover:border-[#4A5D4E] transition-all duration-300"
            aria-label="Previous testimonial"
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
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-[#4A5D4E] w-6" : "bg-[#B8AFA6]"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => paginate(1)}
            className="w-12 h-12 rounded-full border border-[#B8AFA6] flex items-center justify-center text-[#4A5D4E] hover:bg-[#4A5D4E] hover:text-[#FDFCF0] hover:border-[#4A5D4E] transition-all duration-300"
            aria-label="Next testimonial"
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
          </button>
        </div>
      </div>
    </section>
  );
}
