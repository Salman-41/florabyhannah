import { Metadata } from "next";
import { MasonryGrid } from "@/components/portfolio";
import {
  RevealOnScroll,
  FloatingFlowers,
  FloralPattern,
} from "@/components/animations";

export const metadata: Metadata = {
  title: "Portfolio | Flora by Hannah",
  description:
    "Browse our wedding floral design portfolio featuring stunning bouquets, installations, and centerpieces from Charleston weddings.",
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[#FDFCF0]">
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 relative overflow-hidden">
        <FloatingFlowers density="medium" />
        <div className="absolute inset-0 pointer-events-none">
          <FloralPattern
            variant="leaf"
            animate={false}
            className="absolute -top-8 -left-8 w-52 h-52 sm:w-80 sm:h-80 text-deep-sage/12 rotate-12"
          />
          <FloralPattern
            variant="petal"
            animate={false}
            className="absolute -bottom-10 -right-8 w-56 h-56 sm:w-80 sm:h-80 text-muted-rose/14 -rotate-12"
          />
          <FloralPattern
            variant="blossom"
            animate={false}
            className="absolute top-24 right-12 w-24 h-24 sm:w-32 sm:h-32 text-deep-sage/10 rotate-6"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <RevealOnScroll>
            <span className="text-sm uppercase tracking-[0.3em] text-[#4A5D4E] mb-4 block">
              Our Work
            </span>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif text-[#2D2D2D] mb-6">
              Portfolio
            </h1>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <p className="text-lg lg:text-xl text-[#2D2D2D]/70 max-w-2xl">
              A curated collection of our finest floral designs, from romantic
              bridal bouquets to stunning ceremony installations. Each
              arrangement tells a unique love story.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="pb-24 lg:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <FloralPattern
            variant="branch"
            animate={false}
            className="absolute top-16 left-10 w-24 h-24 sm:w-32 sm:h-32 text-muted-rose/10 -rotate-6"
          />
          <FloralPattern
            variant="leaf"
            animate={false}
            className="absolute bottom-10 right-10 w-28 h-28 sm:w-36 sm:h-36 text-deep-sage/10 rotate-6"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <MasonryGrid />
        </div>
      </section>
    </div>
  );
}
