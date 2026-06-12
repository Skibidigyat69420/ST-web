"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useSpring(0, { stiffness: 300, damping: 25 });
  const cursorY = useSpring(0, { stiffness: 300, damping: 25 });

  useEffect(() => {
    setMounted(true);

    if (window.innerWidth < 1024) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const addHoverListeners = () => {
      const interactives = document.querySelectorAll(
        "a, button, [role='button'], input, textarea, select, [data-cursor-hover]"
      );
      interactives.forEach((el) => {
        el.addEventListener("mouseenter", () => setIsHovering(true));
        el.addEventListener("mouseleave", () => setIsHovering(false));
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });
    addHoverListeners();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      observer.disconnect();
    };
  }, [cursorX, cursorY]);

  if (!mounted || (typeof window !== "undefined" && window.innerWidth < 1024))
    return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9998] mix-blend-difference"
      style={{
        x: cursorX,
        y: cursorY,
      }}
    >
      <motion.div
        className="rounded-full bg-linen"
        animate={{
          width: isHovering ? 48 : 8,
          height: isHovering ? 48 : 8,
          opacity: isVisible ? 1 : 0,
          x: isHovering ? -24 : -4,
          y: isHovering ? -24 : -4,
        }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      />
    </motion.div>
  );
}
