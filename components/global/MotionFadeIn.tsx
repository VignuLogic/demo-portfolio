"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type MotionFadeInProps = {
  children: ReactNode;
  delay?: number;
};

export function MotionFadeIn({ children, delay = 0 }: MotionFadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-64px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

