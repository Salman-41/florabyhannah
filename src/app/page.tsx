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

  return (
    <>
      {/* Sophisticated intro animation */}
      <HeroIntro onComplete={() => setIntroComplete(true)} skipIntro={false} />

      {/* Main content */}
      <HeroSection showContent={introComplete} />
      <AboutPreview />
      <FeaturedWeddings />
      <TestimonialSlider />
      <CTASection />
    </>
  );
}
