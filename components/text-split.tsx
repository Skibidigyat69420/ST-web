"use client";

import { motion, useReducedMotion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface TextSplitProps {
  children: string;
  className?: string;
  delay?: number;
  stagger?: number;
  duration?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

export function TextSplit({
  children,
  className = "",
  delay = 0,
  stagger = 0.03,
  duration = 0.6,
  as: Tag = "span",
}: TextSplitProps) {
  const shouldReduceMotion = useReducedMotion();
  const words = children.split(" ");

  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const child: Variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.1 : duration,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <motion.span
      className={`inline-flex flex-wrap ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={child}
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export function FadeIn({
  children,
  className = "",
  delay = 0,
  duration = 0.8,
  direction = "up",
}: FadeInProps) {
  const shouldReduceMotion = useReducedMotion();

  const directions = {
    up: { y: 30 },
    down: { y: -30 },
    left: { x: 30 },
    right: { x: -30 },
    none: {},
  };

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        ...directions[direction],
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: shouldReduceMotion ? 0.1 : duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

interface TextRevealLinesProps {
  children: string;
  className?: string;
  delay?: number;
  lineClassName?: string;
}

export function TextRevealLines({
  children,
  className = "",
  delay = 0,
  lineClassName = "",
}: TextRevealLinesProps) {
  const shouldReduceMotion = useReducedMotion();
  const lines = children.replace(/\\n/g, "\n").split("\n").filter(Boolean);

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.12,
            delayChildren: delay,
          },
        },
      }}
    >
      {lines.map((line, i) => (
        <div key={i} className="overflow-hidden">
          <motion.div
            variants={{
              hidden: { y: shouldReduceMotion ? 0 : "100%" },
              visible: {
                y: 0,
                transition: {
                  duration: shouldReduceMotion ? 0.1 : 0.8,
                  ease: [0.25, 0.1, 0.25, 1],
                },
              },
            }}
            className={lineClassName}
          >
            {line}
          </motion.div>
        </div>
      ))}
    </motion.div>
  );
}
