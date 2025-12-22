import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import MagneticCursor from "@/components/MagneticCursor";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

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
      <body
        className={`${cormorant.variable} ${inter.variable} antialiased bg-[#FDFCF0] text-[#2D2D2D]`}
      >
        <MagneticCursor />
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
