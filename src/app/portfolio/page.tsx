import { Metadata } from "next";
import { MasonryGrid } from "@/components/portfolio";
import { RevealOnScroll, FloatingFlowers } from "@/components/animations";

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
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
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
      <section className="pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <MasonryGrid />
        </div>
      </section>
    </div>
  );
}
