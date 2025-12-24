import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import MagneticCursor from "@/components/MagneticCursor";

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
      <body className="antialiased bg-[#FDFCF0] text-[#2D2D2D] w-full overflow-x-clip">
        <MagneticCursor />
        <Navigation />
        <main className="min-h-screen w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
