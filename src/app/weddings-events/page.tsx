import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  RevealOnScroll,
  FloatingFlowers,
  FloralPattern,
} from "@/components/animations";
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
    <div className="min-h-screen bg-antique-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <FloatingFlowers density="light" />
        <div className="absolute inset-0 pointer-events-none z-[1]">
          <FloralPattern
            variant="branch"
            animate={false}
            className="absolute -top-10 -left-10 w-56 h-56 sm:w-80 sm:h-80 text-muted-rose/16 rotate-12"
          />
          <FloralPattern
            variant="leaf"
            animate={false}
            className="absolute -bottom-12 -right-10 w-60 h-60 sm:w-80 sm:h-80 text-antique-white/14 -rotate-12"
          />
          <FloralPattern
            variant="blossom"
            animate={false}
            className="absolute top-24 right-10 w-24 h-24 sm:w-32 sm:h-32 text-antique-white/10 rotate-6"
          />
        </div>
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop"
            alt="Weddings and Events"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-soft-black/55" />
        </div>

        <div className="relative z-10 text-center px-6">
          <RevealOnScroll>
            <span className="fb-kicker-pill fb-kicker-pill--dark mb-6">
              Services
            </span>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif text-antique-white mb-6 leading-[1.06] tracking-[-0.02em] drop-shadow-[0_12px_34px_rgba(0,0,0,0.55)]">
              Weddings & Events
            </h1>
          </RevealOnScroll>

          <RevealOnScroll delay={0.15}>
            <div className="fb-divider" />
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <p className="text-xl text-antique-white/80 max-w-2xl mx-auto mt-6">
              Creating timeless floral designs for life&apos;s most celebrated
              moments
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <FloralPattern
            variant="petal"
            animate={false}
            className="absolute -top-10 -right-10 w-52 h-52 sm:w-80 sm:h-80 text-muted-rose/12 rotate-12"
          />
          <FloralPattern
            variant="branch"
            animate={false}
            className="absolute -bottom-12 -left-10 w-56 h-56 sm:w-80 sm:h-80 text-deep-sage/10 -rotate-12"
          />
        </div>

        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center relative z-10">
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
      <section className="py-20 lg:py-28 bg-[#FAF9F5] relative overflow-hidden">
        <FloatingFlowers density="medium" />
        <div className="absolute inset-0 pointer-events-none">
          <FloralPattern
            variant="leaf"
            animate={false}
            className="absolute -top-10 -left-10 w-56 h-56 sm:w-80 sm:h-80 text-deep-sage/12 rotate-12"
          />
          <FloralPattern
            variant="blossom"
            animate={false}
            className="absolute -bottom-12 -right-10 w-56 h-56 sm:w-80 sm:h-80 text-muted-rose/14 -rotate-12"
          />
          <FloralPattern
            variant="branch"
            animate={false}
            className="absolute top-24 right-12 w-24 h-24 sm:w-32 sm:h-32 text-deep-sage/10 rotate-6"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
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
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <FloralPattern
            variant="branch"
            animate={false}
            className="absolute -top-10 -right-10 w-52 h-52 sm:w-72 sm:h-72 text-muted-rose/12 rotate-12"
          />
          <FloralPattern
            variant="leaf"
            animate={false}
            className="absolute -bottom-12 -left-10 w-56 h-56 sm:w-80 sm:h-80 text-deep-sage/10 -rotate-12"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <RevealOnScroll direction="left">
              <div className="relative aspect-square overflow-hidden bg-[#FAF9F5]">
                <Image
                  src="/images/hero%20image.jpg"
                  alt="Corporate Events"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 pointer-events-none">
                  <FloralPattern
                    variant="petal"
                    animate={false}
                    className="absolute -top-6 -left-6 w-28 h-28 sm:w-36 sm:h-36 text-muted-rose/18 -rotate-12"
                  />
                  <FloralPattern
                    variant="blossom"
                    animate={false}
                    className="absolute -bottom-8 -right-6 w-32 h-32 sm:w-40 sm:h-40 text-deep-sage/14 rotate-12"
                  />
                </div>
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
                  className="inline-block w-full sm:w-auto px-8 sm:px-10 py-4 bg-[#4A5D4E] text-[#FDFCF0] text-sm uppercase tracking-[0.2em] hover:bg-[#C9A9A6] transition-colors duration-500"
                >
                  Inquire Here
                </Link>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-[#4A5D4E] relative overflow-hidden">
        <FloatingFlowers density="light" />
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
