"use client";

import { useRef, useEffect, type ReactNode, type CSSProperties } from "react";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  margin?: string;
  as?: "div" | "form" | "span";
}

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

    // On mobile: skip IO entirely — CSS already shows content instantly
    if (window.innerWidth <= 768) return;

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
