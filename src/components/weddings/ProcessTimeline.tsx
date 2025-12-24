"use client";

import { motion } from "framer-motion";
import { FloatingFlowers, FloralPattern } from "@/components/animations";
import { RevealOnScroll } from "@/components/animations";

interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: "Consultation",
    description:
      "We begin with a detailed conversation about your vision, color palette, and the overall aesthetic you want for your special day.",
    icon: "💬",
  },
  {
    id: 2,
    title: "Design",
    description:
      "I create a custom floral design proposal tailored to your venue, theme, and budget, including mood boards and flower selections.",
    icon: "🎨",
  },
  {
    id: 3,
    title: "Refinement",
    description:
      "We refine the details together, selecting the perfect flowers in season and finalizing every arrangement for your celebration.",
    icon: "✨",
  },
  {
    id: 4,
    title: "Delivery",
    description:
      "On your wedding day, I personally deliver and set up each arrangement, ensuring everything is picture-perfect.",
    icon: "💐",
  },
];

export default function ProcessTimeline() {
  return (
    <section className="py-20 lg:py-28 bg-[#FDFCF0] relative overflow-hidden">
      <FloatingFlowers density="medium" />
      <div className="absolute inset-0 pointer-events-none">
        <FloralPattern
          variant="leaf"
          animate={false}
          className="absolute -top-10 -left-10 w-52 h-52 sm:w-80 sm:h-80 text-deep-sage/12 rotate-12"
        />
        <FloralPattern
          variant="petal"
          animate={false}
          className="absolute -bottom-12 -right-10 w-56 h-56 sm:w-80 sm:h-80 text-muted-rose/14 -rotate-12"
        />
        <FloralPattern
          variant="blossom"
          animate={false}
          className="absolute top-24 right-12 w-24 h-24 sm:w-32 sm:h-32 text-deep-sage/10 rotate-6"
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
        <RevealOnScroll className="text-center mb-16">
          <span className="text-sm uppercase tracking-[0.3em] text-[#4A5D4E] mb-4 block">
            How It Works
          </span>
          <h2 className="text-4xl lg:text-5xl font-serif text-deep-taupe">
            The Process
          </h2>
        </RevealOnScroll>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[1px] bg-[#C9A9A6]/30 -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {processSteps.map((step, index) => (
              <RevealOnScroll key={step.id} delay={index * 0.1}>
                <motion.div
                  className="relative text-center"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Step Number & Icon */}
                  <div className="relative z-10 mx-auto mb-6">
                    <div className="w-20 h-20 rounded-full bg-[#FDFCF0] border-2 border-[#C9A9A6] flex items-center justify-center mx-auto shadow-lg">
                      <span className="text-3xl">{step.icon}</span>
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#4A5D4E] text-[#FDFCF0] flex items-center justify-center text-sm font-medium">
                      {step.id}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl lg:text-2xl font-serif text-deep-taupe mb-3">
                    {step.title}
                  </h3>
                  <p className="text-deep-taupe/70 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              </RevealOnScroll>
            ))}
          </div>
        </div>

        {/* Arrow indicators between steps (desktop only) */}
        <div className="hidden lg:flex justify-between max-w-4xl mx-auto mt-8 px-24">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="text-[#C9A9A6] text-2xl"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
            >
              →
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
