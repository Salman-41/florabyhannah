import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { RevealOnScroll, Parallax } from "@/components/animations";

export const metadata: Metadata = {
  title: "About | Flora by Hannah",
  description:
    "Meet Hannah, the creative force behind Flora by Hannah. Discover her passion for creating timeless floral designs for Charleston weddings.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FDFCF0]">
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <div className="order-2 lg:order-1">
              <RevealOnScroll>
                <span className="text-sm uppercase tracking-[0.3em] text-[#4A5D4E] mb-4 block">
                  About Flora
                </span>
              </RevealOnScroll>

              <RevealOnScroll delay={0.1}>
                <h1 className="text-5xl lg:text-6xl xl:text-7xl font-serif text-[#2D2D2D] mb-6">
                  Hi! I&apos;m Hannah
                </h1>
              </RevealOnScroll>

              <RevealOnScroll delay={0.2}>
                <p className="text-xl lg:text-2xl text-[#2D2D2D]/80 font-serif italic mb-6">
                  Owner & Founder of Flora by Hannah
                </p>
              </RevealOnScroll>

              <RevealOnScroll delay={0.3}>
                <p className="text-lg text-[#2D2D2D]/70 leading-relaxed">
                  I fell in love with flowers growing up, and I started Flora as
                  a way to hopefully share my love for these beautiful creations
                  with as many people as possible.
                </p>
              </RevealOnScroll>
            </div>

            {/* Main Portrait */}
            <RevealOnScroll
              direction="right"
              className="order-1 lg:order-2 relative"
            >
              <div className="relative">
                <div className="absolute -top-6 -right-6 w-full h-full border border-[#C9A9A6]/40" />
                <div className="relative aspect-[3/4] overflow-hidden bg-[#FAF9F5]">
                  <Image
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop"
                    alt="Hannah - Flora by Hannah"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
                <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-[#4A5D4E]/10 rounded-full blur-2xl" />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 lg:py-28 bg-[#FAF9F5]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <RevealOnScroll>
            <h2 className="text-4xl lg:text-5xl font-serif text-[#2D2D2D] text-center mb-12">
              My Story
            </h2>
          </RevealOnScroll>

          <div className="prose prose-lg max-w-none">
            <RevealOnScroll delay={0.1}>
              <p className="text-lg lg:text-xl text-[#2D2D2D]/70 leading-relaxed mb-8">
                When I was a kid, my mom would take me to the grocery store
                where I would sit there and just stare at all the flowers in the
                Floral Department. I was intrigued by how many different colors
                could even just be on one petal, and I know she got annoyed with
                me always asking if we could just buy a couple of flowers.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={0.2}>
              <p className="text-lg lg:text-xl text-[#2D2D2D]/70 leading-relaxed mb-8">
                When I was in high school, I went to see the movie
                Valentine&apos;s Day where Ashton Kutcher plays the florist. I
                mean it was Ashton Kutcher so that definitely helped, but seeing
                the life of a florist on Valentine&apos;s Day portrayed in a
                movie, going to the wholesale market, picking out flowers,
                selling them to people who want to create a special moment in
                theirs or someone else&apos;s life... I just knew.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={0.3}>
              <p className="text-lg lg:text-xl text-[#2D2D2D]/70 leading-relaxed mb-8">
                So, I started working at a florist in high school and continued
                to work for different florists and event companies throughout
                college. After college, I took a corporate job and have worked
                for a couple of other small businesses in customer service as
                well.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={0.4}>
              <p className="text-xl lg:text-2xl text-[#4A5D4E] font-serif italic text-center">
                Now, I am living my dream and working to do what I love every
                day!
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Asymmetrical Gallery */}
      <section className="py-20 lg:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-12 gap-6 lg:gap-8">
            {/* Large image */}
            <RevealOnScroll
              className="col-span-12 lg:col-span-7"
              direction="left"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#FAF9F5]">
                <Image
                  src="https://images.unsplash.com/photo-1487530811176-3780de880c2d?q=80&w=2070&auto=format&fit=crop"
                  alt="Flora by Hannah - Floral Arrangement"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
              </div>
            </RevealOnScroll>

            {/* Stacked images */}
            <div className="col-span-12 lg:col-span-5 flex flex-col gap-6 lg:gap-8">
              <RevealOnScroll direction="right" delay={0.1}>
                <div className="relative aspect-square overflow-hidden bg-[#FAF9F5]">
                  <Image
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1932&auto=format&fit=crop"
                    alt="Flora by Hannah - Behind the Scenes"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                  />
                </div>
              </RevealOnScroll>

              <RevealOnScroll direction="right" delay={0.2}>
                <div className="relative aspect-[4/3] overflow-hidden bg-[#FAF9F5]">
                  <Image
                    src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=2080&auto=format&fit=crop"
                    alt="Flora by Hannah - Wedding Setup"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                  />
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 lg:py-28 bg-[#4A5D4E]">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <RevealOnScroll className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-serif text-[#FDFCF0] mb-4">
              What Brides Say
            </h2>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <RevealOnScroll delay={0.1}>
              <blockquote className="bg-[#FDFCF0]/10 backdrop-blur-sm p-8 lg:p-10 rounded-sm">
                <p className="text-lg lg:text-xl text-[#FDFCF0]/90 font-serif italic leading-relaxed mb-6">
                  &ldquo;Working with Hannah was one of the easiest parts of the
                  wedding planning process - clear and constant communication,
                  and I never had a doubt she would execute flawlessly!&rdquo;
                </p>
                <footer className="text-[#C9A9A6] font-medium">— Kelly</footer>
              </blockquote>
            </RevealOnScroll>

            <RevealOnScroll delay={0.2}>
              <blockquote className="bg-[#FDFCF0]/10 backdrop-blur-sm p-8 lg:p-10 rounded-sm">
                <p className="text-lg lg:text-xl text-[#FDFCF0]/90 font-serif italic leading-relaxed mb-6">
                  &ldquo;Hannah didn&apos;t hesitate with any of my ideas and
                  met them with enthusiasm! The service she provides is more
                  like a collaboration between friends and I truly enjoyed
                  working with her.&rdquo;
                </p>
                <footer className="text-[#C9A9A6] font-medium">— Haley</footer>
              </blockquote>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <RevealOnScroll>
            <h2 className="text-4xl lg:text-5xl font-serif text-[#2D2D2D] mb-6">
              I&apos;d love to bring flowers into your life
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <p className="text-lg text-[#2D2D2D]/70 mb-10 max-w-2xl mx-auto">
              Feel free to reach out with any daily delivery or wedding
              requests. Let&apos;s create something beautiful together!
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <Link
              href="/contact"
              className="inline-block px-12 py-5 bg-[#4A5D4E] text-[#FDFCF0] text-sm uppercase tracking-[0.2em] hover:bg-[#C9A9A6] transition-colors duration-500"
            >
              Contact Me
            </Link>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
}
