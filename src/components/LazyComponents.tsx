"use client";

import { useRef, useState, useEffect, type ComponentType } from "react";
import dynamic from "next/dynamic";

const Timeline = dynamic(() => import("@/components/Timeline"), { ssr: false });
const TechStack = dynamic(() => import("@/components/TechStack"), { ssr: false });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: false });

function LazySection({ component: Component }: { component: ComponentType }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ minHeight: visible ? undefined : "100px" }}>
      {visible && <Component />}
    </div>
  );
}

export default function LazyComponents() {
  return (
    <>
      <LazySection component={Timeline} />
      <div className="section-separator" />
      <LazySection component={TechStack} />
      <div className="section-separator" />
      <LazySection component={Contact} />
    </>
  );
}
