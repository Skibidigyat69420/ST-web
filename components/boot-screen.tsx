"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export function BootScreen({ onComplete }: { onComplete?: () => void }) {
  const [phase, setPhase] = useState(0);
  const [exit, setExit] = useState(false);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 800),
      setTimeout(() => setPhase(2), 1800),
      setTimeout(() => setExit(true), 2800),
      setTimeout(() => onComplete?.(), 3800),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!exit && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ivory"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="flex flex-col items-center gap-8">
            <div className="relative h-8 flex items-center justify-center">
              <motion.span
                className="text-caption tracking-[0.3em] text-stone"
                initial={{ opacity: 0 }}
                animate={{ opacity: phase >= 0 ? 1 : 0 }}
                transition={{ duration: 0.8 }}
              >
                SOUND THESIS
              </motion.span>
            </div>

            <div className="w-24 h-[1px] bg-border overflow-hidden">
              <motion.div
                className="h-full bg-accent"
                initial={{ width: "0%" }}
                animate={{ width: phase >= 1 ? "100%" : "0%" }}
                transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
              />
            </div>

            <motion.span
              className="text-caption tracking-[0.2em] text-stone-light"
              initial={{ opacity: 0, y: 5 }}
              animate={{
                opacity: phase >= 2 ? 1 : 0,
                y: phase >= 2 ? 0 : 5,
              }}
              transition={{ duration: 0.6 }}
            >
              Entering
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
