"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function SpotlightCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Hide on mobile
    if (window.matchMedia("(max-width: 768px)").matches) {
      cursor.style.display = "none";
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.6,
        ease: "power2.out",
      });
    };

    const onMouseEnter = () => {
      gsap.to(cursor, { opacity: 1, duration: 0.3 });
    };

    const onMouseLeave = () => {
      gsap.to(cursor, { opacity: 0, duration: 0.3 });
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return <div ref={cursorRef} className="spotlight-cursor hidden md:block" />;
}
