"use client";

import { motion } from "framer-motion";

interface FloralPatternProps {
  variant?: "rose" | "leaf" | "petal" | "branch" | "blossom";
  className?: string;
  animate?: boolean;
}

export default function FloralPattern({
  variant = "rose",
  className = "",
  animate = true,
}: FloralPatternProps) {
  const animations = animate
    ? {
        initial: { opacity: 0, scale: 0.8, rotate: -10 },
        animate: {
          opacity: [0.3, 0.5, 0.3],
          scale: [0.8, 1, 0.8],
          rotate: [-10, 10, -10],
        },
        transition: {
          duration: 8,
          repeat: Infinity as number,
          ease: "easeInOut" as const,
        },
      }
    : {};

  const renderPattern = () => {
    switch (variant) {
      case "rose":
        return (
          <svg
            viewBox="0 0 100 100"
            fill="none"
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Rose center */}
            <circle cx="50" cy="50" r="8" fill="currentColor" opacity="0.6" />
            {/* Petals */}
            <path
              d="M50 35 C40 35, 35 40, 35 50 C35 55, 38 58, 42 58 C45 58, 50 55, 50 50 Z"
              fill="currentColor"
              opacity="0.4"
            />
            <path
              d="M50 35 C60 35, 65 40, 65 50 C65 55, 62 58, 58 58 C55 58, 50 55, 50 50 Z"
              fill="currentColor"
              opacity="0.4"
            />
            <path
              d="M35 50 C35 40, 40 35, 50 35 C55 35, 58 38, 58 42 C58 45, 55 50, 50 50 Z"
              fill="currentColor"
              opacity="0.3"
            />
            <path
              d="M65 50 C65 40, 60 35, 50 35 C45 35, 42 38, 42 42 C42 45, 45 50, 50 50 Z"
              fill="currentColor"
              opacity="0.3"
            />
            <path
              d="M50 65 C40 65, 35 60, 35 50 C35 45, 38 42, 42 42 C45 42, 50 45, 50 50 Z"
              fill="currentColor"
              opacity="0.35"
            />
            <path
              d="M50 65 C60 65, 65 60, 65 50 C65 45, 62 42, 58 42 C55 42, 50 45, 50 50 Z"
              fill="currentColor"
              opacity="0.35"
            />
          </svg>
        );

      case "leaf":
        return (
          <svg
            viewBox="0 0 100 100"
            fill="none"
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M50 10 Q70 30, 75 50 Q70 70, 50 90 Q40 70, 35 50 Q40 30, 50 10"
              fill="currentColor"
              opacity="0.3"
            />
            <path
              d="M50 15 Q50 40, 50 90"
              stroke="currentColor"
              strokeWidth="1"
              opacity="0.4"
            />
            <path
              d="M50 30 Q60 35, 65 45"
              stroke="currentColor"
              strokeWidth="0.5"
              opacity="0.3"
            />
            <path
              d="M50 30 Q40 35, 35 45"
              stroke="currentColor"
              strokeWidth="0.5"
              opacity="0.3"
            />
            <path
              d="M50 50 Q60 52, 68 60"
              stroke="currentColor"
              strokeWidth="0.5"
              opacity="0.3"
            />
            <path
              d="M50 50 Q40 52, 32 60"
              stroke="currentColor"
              strokeWidth="0.5"
              opacity="0.3"
            />
          </svg>
        );

      case "petal":
        return (
          <svg
            viewBox="0 0 100 100"
            fill="none"
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M50 20 Q30 25, 25 45 Q30 65, 50 80 Q55 65, 55 45 Q52 25, 50 20 Z"
              fill="currentColor"
              opacity="0.35"
            />
            <path
              d="M50 25 Q50 45, 50 75"
              stroke="currentColor"
              strokeWidth="0.5"
              opacity="0.2"
            />
          </svg>
        );

      case "branch":
        return (
          <svg
            viewBox="0 0 100 100"
            fill="none"
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 80 Q30 60, 40 40 Q50 20, 80 10"
              stroke="currentColor"
              strokeWidth="1.5"
              opacity="0.3"
            />
            <circle cx="30" cy="65" r="3" fill="currentColor" opacity="0.4" />
            <circle cx="45" cy="45" r="3" fill="currentColor" opacity="0.4" />
            <circle cx="60" cy="28" r="3" fill="currentColor" opacity="0.4" />
            <circle cx="75" cy="15" r="3" fill="currentColor" opacity="0.4" />
            {/* Small leaves */}
            <path
              d="M30 65 Q25 63, 23 60"
              stroke="currentColor"
              strokeWidth="1"
              opacity="0.3"
            />
            <path
              d="M45 45 Q40 43, 38 40"
              stroke="currentColor"
              strokeWidth="1"
              opacity="0.3"
            />
            <path
              d="M60 28 Q55 26, 53 23"
              stroke="currentColor"
              strokeWidth="1"
              opacity="0.3"
            />
          </svg>
        );

      case "blossom":
        return (
          <svg
            viewBox="0 0 100 100"
            fill="none"
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* 5 petals in a circle */}
            <g transform="rotate(0 50 50)">
              <ellipse
                cx="50"
                cy="30"
                rx="8"
                ry="15"
                fill="currentColor"
                opacity="0.4"
              />
            </g>
            <g transform="rotate(72 50 50)">
              <ellipse
                cx="50"
                cy="30"
                rx="8"
                ry="15"
                fill="currentColor"
                opacity="0.4"
              />
            </g>
            <g transform="rotate(144 50 50)">
              <ellipse
                cx="50"
                cy="30"
                rx="8"
                ry="15"
                fill="currentColor"
                opacity="0.4"
              />
            </g>
            <g transform="rotate(216 50 50)">
              <ellipse
                cx="50"
                cy="30"
                rx="8"
                ry="15"
                fill="currentColor"
                opacity="0.4"
              />
            </g>
            <g transform="rotate(288 50 50)">
              <ellipse
                cx="50"
                cy="30"
                rx="8"
                ry="15"
                fill="currentColor"
                opacity="0.4"
              />
            </g>
            {/* Center */}
            <circle cx="50" cy="50" r="6" fill="currentColor" opacity="0.5" />
          </svg>
        );

      default:
        return null;
    }
  };

  return (
    <motion.div className={className} {...animations}>
      {renderPattern()}
    </motion.div>
  );
}

// Preset positioned patterns for easy use
export function FloatingFlowers({
  density = "medium",
}: {
  density?: "light" | "medium" | "dense";
}) {
  const patterns = {
    light: 3,
    medium: 5,
    dense: 8,
  };

  const count = patterns[density];
  const variants: Array<"rose" | "leaf" | "petal" | "branch" | "blossom"> = [
    "rose",
    "leaf",
    "petal",
    "branch",
    "blossom",
  ];

  // Generate stable random positions using index-based seeding
  const getStableRandom = (seed: number, multiplier: number) => {
    const x = Math.sin(seed * multiplier) * 10000;
    return x - Math.floor(x);
  };

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {Array.from({ length: count }).map((_, i) => {
        const variant = variants[i % variants.length];
        const top = `${(i * 100) / count + getStableRandom(i, 12345) * 20}%`;
        const left = `${getStableRandom(i, 67890) * 100}%`;
        const size = 40 + getStableRandom(i, 54321) * 60;
        const delay = getStableRandom(i, 98765) * 5;
        const duration = 15 + getStableRandom(i, 24680) * 10;

        return (
          <motion.div
            key={i}
            className="absolute text-muted-rose"
            style={{
              top,
              left,
              width: `${size}px`,
              height: `${size}px`,
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              y: [0, -20, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration,
              repeat: Infinity,
              delay,
              ease: "easeInOut",
            }}
          >
            <FloralPattern variant={variant} animate={false} />
          </motion.div>
        );
      })}
    </div>
  );
}
