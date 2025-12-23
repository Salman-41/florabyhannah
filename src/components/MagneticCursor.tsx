"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function MagneticCursor() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // start false to match SSR markup

  // Decide visibility only on client after mount to avoid hydration mismatch.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const isTouchDevice =
      "ontouchstart" in window ||
      (typeof navigator !== "undefined" && navigator.maxTouchPoints > 0);
    setIsVisible(!isTouchDevice);
  }, []);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 400 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const moveCursor = useCallback(
    (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    },
    [cursorX, cursorY]
  );

  useEffect(() => {
    if (!isVisible) return;

    window.addEventListener("mousemove", moveCursor);

    // Add hover detection for images and links
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "IMG" ||
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("cursor-expand")
      ) {
        setIsExpanded(true);
      }
    };

    const handleMouseOut = () => {
      setIsExpanded(false);
    };

    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [moveCursor, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-9999 mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          className="relative -translate-x-1/2 -translate-y-1/2 rounded-full border border-deep-sage"
          animate={{
            width: isExpanded ? 60 : 20,
            height: isExpanded ? 60 : 20,
            borderColor: isExpanded ? "#C9A9A6" : "#4A5D4E",
            backgroundColor: isExpanded
              ? "rgba(201, 169, 166, 0.1)"
              : "transparent",
          }}
          transition={{
            type: "spring",
            damping: 20,
            stiffness: 300,
          }}
        />
      </motion.div>

      {/* Cursor dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-9999 w-1 h-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-deep-sage"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          scale: isExpanded ? 0 : 1,
        }}
      />
    </>
  );
}
