"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/weddings-events", label: "Weddings & Events" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Many inner pages have very light hero sections; keep the nav readable there
  // without redesigning the navigation.
  const isHome = pathname === "/";
  const useLightHeader = scrolled || !isHome;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-2 sm:px-4 ${
          useLightHeader
            ? "bg-antique-white/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <nav className="max-w-7xl mx-auto px-4 lg:px-12 py-3 lg:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="group">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative h-10 w-32 sm:h-11 sm:w-36 lg:h-12 lg:w-40"
              >
                <Image
                  src="/Flora logo.webp"
                  alt="Flora by Hannah"
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group relative"
                >
                  <span
                    className={`text-sm tracking-[0.15em] uppercase transition-colors duration-300 ${
                      pathname === link.href
                        ? useLightHeader
                          ? "text-deep-sage"
                          : "text-antique-white"
                        : useLightHeader
                          ? "text-charcoal hover:text-deep-sage"
                          : "text-antique-white hover:text-muted-rose"
                    }`}
                  >
                    {link.label}
                  </span>
                  <motion.span
                    className="absolute -bottom-1 left-0 h-px bg-muted-rose"
                    initial={{ width: pathname === link.href ? "100%" : "0%" }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative w-8 h-6 flex flex-col justify-center items-center"
              aria-label="Toggle menu"
            >
              <motion.span
                className={`w-6 h-px absolute ${useLightHeader ? "bg-charcoal" : "bg-antique-white"}`}
                animate={{
                  rotate: isOpen ? 45 : 0,
                  y: isOpen ? 0 : -6,
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className={`w-6 h-px absolute ${useLightHeader ? "bg-charcoal" : "bg-antique-white"}`}
                animate={{
                  opacity: isOpen ? 0 : 1,
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className={`w-6 h-px absolute ${useLightHeader ? "bg-charcoal" : "bg-antique-white"}`}
                animate={{
                  rotate: isOpen ? -45 : 0,
                  y: isOpen ? 0 : 6,
                }}
                transition={{ duration: 0.3 }}
              />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden bg-antique-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-3xl font-serif tracking-wide ${
                      pathname === link.href
                        ? "text-deep-sage"
                        : "text-charcoal hover:text-muted-rose"
                    } transition-colors duration-300`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
