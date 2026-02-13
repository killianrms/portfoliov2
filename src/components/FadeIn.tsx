"use client";

import { useRef, useEffect, type ReactNode, type CSSProperties } from "react";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  /** Delay in seconds before the animation starts */
  delay?: number;
  /** Root margin for IntersectionObserver */
  margin?: string;
  /** HTML tag to render */
  as?: "div" | "form" | "span";
}

/**
 * Lightweight scroll-triggered fade-in using native IntersectionObserver + CSS.
 * Replaces framer-motion's `motion.div whileInView` with zero JS animation overhead.
 *
 * - No React state updates (class toggle only via DOM API)
 * - No animation frame callbacks
 * - GPU-accelerated CSS transitions
 * - ~0.5KB vs ~40KB for framer-motion equivalent
 */
export default function FadeIn({
  children,
  className = "",
  delay = 0,
  margin = "-50px",
  as: Tag = "div",
}: FadeInProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("fade-in-visible");
          observer.unobserve(el);
        }
      },
      { rootMargin: margin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [margin]);

  const style: CSSProperties | undefined =
    delay > 0 ? { transitionDelay: `${delay}s` } : undefined;

  return (
    <Tag
      ref={ref as never}
      className={`fade-in-hidden ${className}`}
      style={style}
    >
      {children}
    </Tag>
  );
}
