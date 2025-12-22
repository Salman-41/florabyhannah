import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { RevealOnScroll } from "@/components/animations";
import { ProcessTimeline } from "@/components/weddings";

export const metadata: Metadata = {
  title: "Weddings & Events | Flora by Hannah",
  description:
    "Custom wedding floral design services in Charleston. From intimate elopements to grand celebrations, we create stunning floral arrangements for your special day.",
};

const services = [
  {
    title: "Full Wedding Florals",
    description:
      "Complete floral design for your wedding day including bridal bouquet, ceremony arrangements, reception centerpieces, and more.",
    features: [
      "Bridal & Bridesmaid Bouquets",
      "Ceremony Florals",
      "Reception Centerpieces",
      "Personal Flowers",
      "Installation Pieces",
    ],
    minInvestment: "$7,500",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Elopements & Micro Weddings",
    description:
      "Intimate packages perfect for smaller celebrations. Beautiful florals for couples who want a more intimate affair.",
    features: [
      "Bridal Bouquet",
      "Groom Boutonniere",
      "Small Ceremony Piece",
      "Petite Centerpiece",
    ],
    minInvestment: "Starting at $1,500",
    image:
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Events & Installations",
    description:
      "We work with businesses and brands to bring your vision to life for corporate events, galas, and special occasions.",
    features: [
      "Corporate Events",
      "Brand Activations",
      "Holiday Parties",
      "Grand Installations",
      "Custom Designs",
    ],
    minInvestment: "Custom Quote",
    image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2073&auto=format&fit=crop",
  },
];

export default function WeddingsEventsPage() {
  return (
    <div className="min-h-screen bg-[#FDFCF0]">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop"
            alt="Weddings and Events"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#1A1A1A]/50" />
        </div>

        <div className="relative z-10 text-center px-6">
          <RevealOnScroll>
            <span className="text-sm uppercase tracking-[0.3em] text-[#C9A9A6] mb-4 block">
              Services
            </span>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-serif text-[#FDFCF0] mb-6">
              Weddings & Events
            </h1>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <p className="text-xl text-[#FDFCF0]/80 max-w-2xl mx-auto">
              Creating timeless floral designs for life&apos;s most celebrated
              moments
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <RevealOnScroll>
            <h2 className="text-4xl lg:text-5xl font-serif text-[#2D2D2D] mb-6">
              Getting Married in Charleston?
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <p className="text-xl text-[#2D2D2D]/70 mb-4">
              Let&apos;s talk flowers.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <p className="text-lg text-[#2D2D2D]/70 leading-relaxed mb-10">
              I work personally with each client to make sure I really capture
              your vision for your special day. From lush, romantic arrangements
              to modern minimalist designs, every wedding is a unique reflection
              of the couple&apos;s love story.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.3}>
            <div className="inline-flex items-center gap-3 text-[#4A5D4E]">
              <span className="text-sm uppercase tracking-[0.2em]">
                Minimum Investment:
              </span>
              <span className="text-2xl font-serif">$7,500</span>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28 bg-[#FAF9F5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <RevealOnScroll className="text-center mb-16">
            <span className="text-sm uppercase tracking-[0.3em] text-[#4A5D4E] mb-4 block">
              What We Offer
            </span>
            <h2 className="text-4xl lg:text-5xl font-serif text-[#2D2D2D]">
              Our Services
            </h2>
          </RevealOnScroll>

          <div className="space-y-20 lg:space-y-28">
            {services.map((service, index) => (
              <RevealOnScroll
                key={service.title}
                delay={index * 0.1}
                direction={index % 2 === 0 ? "left" : "right"}
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image */}
                  <div
                    className={`relative ${
                      index % 2 === 1 ? "lg:order-2" : ""
                    }`}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-[#FDFCF0]">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                    {/* Decorative element */}
                    <div
                      className={`absolute w-32 h-32 bg-[#C9A9A6]/10 rounded-full blur-2xl ${
                        index % 2 === 0
                          ? "-bottom-8 -right-8"
                          : "-bottom-8 -left-8"
                      }`}
                    />
                  </div>

                  {/* Content */}
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <h3 className="text-3xl lg:text-4xl font-serif text-[#2D2D2D] mb-4">
                      {service.title}
                    </h3>
                    <p className="text-lg text-[#2D2D2D]/70 mb-6">
                      {service.description}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-3 text-[#2D2D2D]/80"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C9A9A6]" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center gap-2 text-[#4A5D4E]">
                      <span className="text-sm uppercase tracking-[0.15em]">
                        Starting at:
                      </span>
                      <span className="text-xl font-serif">
                        {service.minInvestment}
                      </span>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <ProcessTimeline />

      {/* Events Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <RevealOnScroll direction="left">
              <div className="relative aspect-square overflow-hidden bg-[#FAF9F5]">
                <Image
                  src="/images/events-section.jpg"
                  alt="Corporate Events"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </RevealOnScroll>

            <div>
              <RevealOnScroll>
                <span className="text-sm uppercase tracking-[0.3em] text-[#4A5D4E] mb-4 block">
                  Corporate & Brand
                </span>
              </RevealOnScroll>

              <RevealOnScroll delay={0.1}>
                <h2 className="text-4xl lg:text-5xl font-serif text-[#2D2D2D] mb-6">
                  Hosting an Event in the Holy City?
                </h2>
              </RevealOnScroll>

              <RevealOnScroll delay={0.2}>
                <p className="text-lg text-[#2D2D2D]/70 leading-relaxed mb-8">
                  We work with businesses and brands to bring your vision to
                  life. Whether it&apos;s a product launch, corporate gala, or
                  brand activation, we create stunning floral installations that
                  make a lasting impression.
                </p>
              </RevealOnScroll>

              <RevealOnScroll delay={0.3}>
                <Link
                  href="/contact"
                  className="inline-block px-10 py-4 bg-[#4A5D4E] text-[#FDFCF0] text-sm uppercase tracking-[0.2em] hover:bg-[#C9A9A6] transition-colors duration-500"
                >
                  Inquire Here
                </Link>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-[#4A5D4E]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <RevealOnScroll>
            <h2 className="text-4xl lg:text-5xl font-serif text-[#FDFCF0] mb-6">
              Ready to Get Started?
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <p className="text-lg text-[#FDFCF0]/80 mb-10 max-w-2xl mx-auto">
              I&apos;d love to hear about your wedding or event. Fill out the
              contact form and I&apos;ll be in touch soon with more information
              about packages and availability.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <Link
              href="/contact"
              className="inline-block px-12 py-5 bg-[#FDFCF0] text-[#4A5D4E] text-sm uppercase tracking-[0.2em] hover:bg-[#C9A9A6] hover:text-[#FDFCF0] transition-colors duration-500"
            >
              Schedule a Consultation
            </Link>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
}
