"use client";

import { useState } from "react";
import {
  HeroSection,
  HeroIntro,
  FeaturedWeddings,
  TestimonialSlider,
  AboutPreview,
  CTASection,
} from "@/components/home";

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false);

  // Single source of truth: HeroIntro center image + HeroSection background match.
  const HERO_IMAGE =
    "https://images.unsplash.com/photo-1470509037663-253afd7f0f51?q=80&w=2070&auto=format&fit=crop";

  return (
    <>
      {/* Sophisticated intro animation */}
      <HeroIntro
        onComplete={() => setIntroComplete(true)}
        skipIntro={false}
        heroImage={HERO_IMAGE}
      />

      {/* Main content */}
      <HeroSection showContent={introComplete} backgroundImage={HERO_IMAGE} />
      <AboutPreview />
      <FeaturedWeddings />
      <TestimonialSlider />
      <CTASection />
    </>
  );
}
