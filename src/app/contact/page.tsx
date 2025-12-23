import { Metadata } from "next";
import {
  RevealOnScroll,
  FloatingFlowers,
  FloralPattern,
} from "@/components/animations";
import { ContactForm } from "@/components/contact";

export const metadata: Metadata = {
  title: "Contact | Flora by Hannah",
  description:
    "Schedule a consultation with Flora by Hannah. Let's discuss your wedding floral design vision for your Charleston celebration.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#FDFCF0]">
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 relative overflow-hidden">
        <FloatingFlowers density="light" />
        <div className="absolute inset-0 pointer-events-none">
          <FloralPattern
            variant="branch"
            animate={false}
            className="absolute -top-10 -left-10 w-52 h-52 sm:w-80 sm:h-80 text-muted-rose/14 rotate-12"
          />
          <FloralPattern
            variant="leaf"
            animate={false}
            className="absolute -bottom-12 -right-10 w-56 h-56 sm:w-80 sm:h-80 text-deep-sage/12 -rotate-12"
          />
          <FloralPattern
            variant="blossom"
            animate={false}
            className="absolute top-24 right-12 w-24 h-24 sm:w-32 sm:h-32 text-deep-sage/10 rotate-6"
          />
        </div>

        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center relative z-10">
          <RevealOnScroll>
            <span className="text-sm uppercase tracking-[0.3em] text-[#4A5D4E] mb-4 block">
              Let&apos;s Connect
            </span>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif text-[#2D2D2D] mb-6">
              Get in Touch
            </h1>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <p className="text-lg lg:text-xl text-[#2D2D2D]/70 max-w-2xl mx-auto">
              I&apos;d love to talk to you about how I can make your floral
              dreams come true for your special day. Fill out the form below and
              I&apos;ll be in touch soon.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="pb-24 lg:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <FloralPattern
            variant="petal"
            animate={false}
            className="absolute -top-12 -right-10 w-44 h-44 sm:w-64 sm:h-64 text-muted-rose/12 rotate-12"
          />
          <FloralPattern
            variant="branch"
            animate={false}
            className="absolute -bottom-14 -left-10 w-56 h-56 sm:w-80 sm:h-80 text-deep-sage/10 -rotate-12"
          />
          <FloralPattern
            variant="blossom"
            animate={false}
            className="absolute top-20 left-12 w-24 h-24 sm:w-32 sm:h-32 text-deep-sage/10 -rotate-6"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
            {/* Contact Info */}
            <RevealOnScroll direction="left" className="lg:col-span-2">
              <div className="lg:sticky lg:top-32">
                <h2 className="text-3xl font-serif text-[#2D2D2D] mb-6">
                  Ready to Create Something Beautiful?
                </h2>

                <p className="text-[#2D2D2D]/70 leading-relaxed mb-8">
                  Please fill out the contact form with as much detail as
                  possible about your event and vision for your florals. The
                  more information you provide, the better I can assist you!
                </p>

                {/* Quick Info */}
                <div className="space-y-6 mb-10">
                  <div>
                    <h3 className="text-sm uppercase tracking-[0.15em] text-[#4A5D4E] mb-2">
                      Location
                    </h3>
                    <p className="text-[#2D2D2D]/70">
                      Charleston, South Carolina
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm uppercase tracking-[0.15em] text-[#4A5D4E] mb-2">
                      Wedding Minimum
                    </h3>
                    <p className="text-[#2D2D2D]/70">$7,500</p>
                  </div>

                  <div>
                    <h3 className="text-sm uppercase tracking-[0.15em] text-[#4A5D4E] mb-2">
                      Currently Booking
                    </h3>
                    <p className="text-[#2D2D2D]/70">2025 Weddings</p>
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="text-sm uppercase tracking-[0.15em] text-[#4A5D4E] mb-4">
                    Follow Along
                  </h3>
                  <div className="flex gap-4">
                    <a
                      href="https://www.instagram.com/florabyhannah"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full border border-[#B8AFA6] flex items-center justify-center text-[#4A5D4E] hover:bg-[#4A5D4E] hover:text-[#FDFCF0] hover:border-[#4A5D4E] transition-all duration-300"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                    <a
                      href="https://www.pinterest.com/florabyhannah"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full border border-[#B8AFA6] flex items-center justify-center text-[#4A5D4E] hover:bg-[#4A5D4E] hover:text-[#FDFCF0] hover:border-[#4A5D4E] transition-all duration-300"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Decorative Element */}
                <div className="hidden lg:block mt-12">
                  <div className="w-40 h-40 rounded-full bg-[#C9A9A6]/10" />
                </div>
              </div>
            </RevealOnScroll>

            {/* Form */}
            <RevealOnScroll
              direction="right"
              delay={0.2}
              className="lg:col-span-3"
            >
              <div className="bg-[#FAF9F5] p-8 lg:p-12">
                <ContactForm />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </div>
  );
}
