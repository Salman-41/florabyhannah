import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  RevealOnScroll,
  FloatingFlowers,
  FloralPattern,
} from "@/components/animations";

// Mock data for development
const mockPortfolioItems = [
  {
    _id: "1",
    title: "Garden Romance",
    slug: { current: "garden-romance" },
    category: "Summer Weddings",
    mainImage: "/images/portfolio-1.jpg",
    description:
      "A breathtaking summer wedding featuring lush garden roses, delicate peonies, and cascading greenery. The romantic palette of soft blush and ivory perfectly complemented the outdoor ceremony at this historic Charleston venue.",
    images: [
      "/images/portfolio-1.jpg",
      "/images/portfolio-2.jpg",
      "/images/portfolio-3.jpg",
    ],
  },
  {
    _id: "2",
    title: "Bridal Cascade",
    slug: { current: "bridal-cascade" },
    category: "Bouquets",
    mainImage: "/images/portfolio-2.jpg",
    description:
      "An elegant cascading bridal bouquet featuring white roses, ranunculus, and trailing amaranthus. This show-stopping arrangement added drama and romance to the bride's classic look.",
    images: ["/images/portfolio-2.jpg", "/images/portfolio-1.jpg"],
  },
  // Add more items as needed
];

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = mockPortfolioItems.find((i) => i.slug.current === slug);

  return {
    title: item
      ? `${item.title} | Flora by Hannah Portfolio`
      : "Portfolio | Flora by Hannah",
    description:
      item?.description || "View our wedding floral design portfolio.",
  };
}

export default async function PortfolioDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = mockPortfolioItems.find((i) => i.slug.current === slug);

  if (!item) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#FDFCF0]">
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 relative overflow-hidden">
        <FloatingFlowers density="light" />
        <div className="absolute inset-0 pointer-events-none">
          <FloralPattern
            variant="branch"
            animate={false}
            className="absolute -top-8 -left-8 w-52 h-52 sm:w-80 sm:h-80 text-muted-rose/14 rotate-12"
          />
          <FloralPattern
            variant="leaf"
            animate={false}
            className="absolute -bottom-10 -right-8 w-56 h-56 sm:w-80 sm:h-80 text-deep-sage/12 -rotate-12"
          />
          <FloralPattern
            variant="blossom"
            animate={false}
            className="absolute top-24 right-10 w-24 h-24 sm:w-32 sm:h-32 text-deep-sage/10 rotate-6"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <RevealOnScroll>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] text-[#4A5D4E] hover:text-[#C9A9A6] transition-colors duration-300 mb-8"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Portfolio
            </Link>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <span className="text-sm uppercase tracking-[0.3em] text-[#C9A9A6] mb-4 block">
              {item.category}
            </span>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif text-[#2D2D2D] mb-6">
              {item.title}
            </h1>
          </RevealOnScroll>

          <RevealOnScroll delay={0.3}>
            <p className="text-lg lg:text-xl text-[#2D2D2D]/70 max-w-3xl">
              {item.description}
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Main Image */}
      <section className="pb-16 lg:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <FloralPattern
            variant="petal"
            animate={false}
            className="absolute -top-12 -right-10 w-44 h-44 sm:w-64 sm:h-64 text-muted-rose/10 rotate-12"
          />
          <FloralPattern
            variant="leaf"
            animate={false}
            className="absolute -bottom-10 -left-10 w-52 h-52 sm:w-72 sm:h-72 text-deep-sage/10 -rotate-12"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <RevealOnScroll>
            <div className="relative aspect-[16/9] overflow-hidden bg-[#FAF9F5]">
              <Image
                src={item.mainImage || "/images/placeholder.jpg"}
                alt={item.title}
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Gallery Grid */}
      {item.images && item.images.length > 0 && (
        <section className="pb-24 lg:pb-32 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <FloralPattern
              variant="branch"
              animate={false}
              className="absolute top-16 left-10 w-24 h-24 sm:w-32 sm:h-32 text-muted-rose/10 -rotate-6"
            />
            <FloralPattern
              variant="blossom"
              animate={false}
              className="absolute bottom-12 right-10 w-28 h-28 sm:w-36 sm:h-36 text-deep-sage/10 rotate-6"
            />
          </div>

          <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {item.images.map((image, index) => (
                <RevealOnScroll
                  key={index}
                  delay={index * 0.1}
                  direction={index % 2 === 0 ? "left" : "right"}
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#FAF9F5]">
                    <Image
                      src={image}
                      alt={`${item.title} - Image ${index + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-[#4A5D4E] relative overflow-hidden">
        <FloatingFlowers density="medium" />
        <div className="absolute inset-0 pointer-events-none">
          <FloralPattern
            variant="leaf"
            animate={false}
            className="absolute -top-10 -left-10 w-56 h-56 sm:w-80 sm:h-80 text-antique-white/12 rotate-12"
          />
          <FloralPattern
            variant="petal"
            animate={false}
            className="absolute -bottom-12 -right-10 w-56 h-56 sm:w-80 sm:h-80 text-muted-rose/14 -rotate-12"
          />
          <FloralPattern
            variant="blossom"
            animate={false}
            className="absolute top-24 right-12 w-24 h-24 sm:w-32 sm:h-32 text-antique-white/10 rotate-6"
          />
        </div>

        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center relative z-10">
          <RevealOnScroll>
            <h2 className="text-4xl lg:text-5xl font-serif text-[#FDFCF0] mb-6">
              Love What You See?
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <p className="text-lg text-[#FDFCF0]/80 mb-10 max-w-2xl mx-auto">
              Let&apos;s create something beautiful together for your special
              day.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <Link
              href="/contact"
              className="inline-block w-full sm:w-auto px-8 sm:px-12 py-5 bg-[#FDFCF0] text-[#4A5D4E] text-sm uppercase tracking-[0.2em] hover:bg-[#C9A9A6] hover:text-[#FDFCF0] transition-colors duration-500"
            >
              Schedule a Consultation
            </Link>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
}
