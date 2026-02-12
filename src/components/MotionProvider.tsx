"use client";

import { LazyMotion, domAnimation } from "framer-motion";
import { type ReactNode } from "react";

/**
 * Wraps the app with LazyMotion + domAnimation features.
 * This lazy-loads only the animation features actually used (~60% smaller
 * than importing the full `motion` component from framer-motion).
 *
 * All child components should use `m` instead of `motion`:
 *   import { m } from "framer-motion";
 *   <m.div animate={{ opacity: 1 }} />
 */
export default function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  );
}
