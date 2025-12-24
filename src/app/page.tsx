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
  const HERO_IMAGE = "/images/hero%20image.jpg";

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
