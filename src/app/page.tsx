"use client";

import {
  HeroSection,
  FeaturedWeddings,
  TestimonialSlider,
  AboutPreview,
  CTASection,
} from "@/components/home";

export default function Home() {
  // Single source of truth for the home hero image.
  const HERO_IMAGE = "/images/hero%20image.jpg";

  return (
    <>
      {/* Main content */}
      <HeroSection backgroundImage={HERO_IMAGE} />
      <AboutPreview />
      <FeaturedWeddings />
      <TestimonialSlider />
      <CTASection />
    </>
  );
}
