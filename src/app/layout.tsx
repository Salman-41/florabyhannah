import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import MagneticCursor from "@/components/MagneticCursor";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "Flora by Hannah | Wedding Florist in Charleston, SC",
  description:
    "Custom wedding floral design in Charleston. Flora Designs specializes in creating classic and timeless florals that bring weddings and events to life.",
  keywords: [
    "wedding florist",
    "Charleston florist",
    "wedding flowers",
    "floral design",
    "bridal bouquet",
    "wedding arrangements",
  ],
  openGraph: {
    title: "Flora by Hannah | Wedding Florist in Charleston, SC",
    description:
      "Custom wedding floral design in Charleston. Creating classic and timeless florals for your special day.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Romantic Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-antique-white text-deep-taupe w-full overflow-x-clip">
        <MagneticCursor />
        <Navigation />
        <main className="min-h-screen w-full">{children}</main>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
