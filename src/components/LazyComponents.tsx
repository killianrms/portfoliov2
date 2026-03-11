"use client";

import React, { useRef, useState, useEffect, type ComponentType } from "react";
import dynamic from "next/dynamic";

const Timeline = dynamic(() => import("@/components/Timeline"), { ssr: false });
const TechStack = dynamic(() => import("@/components/TechStack"), { ssr: false });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: false });

function SkeletonTimeline() {
  return (
    <div className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-3">
          <div className="h-10 bg-surface rounded-lg w-52 mx-auto animate-pulse" />
          <div className="h-4 bg-surface rounded w-80 mx-auto animate-pulse" />
        </div>
        <div className="space-y-5">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex gap-5 p-6 bg-surface border border-border rounded-r-2xl rounded-tl-2xl">
              <div className="w-11 h-11 rounded-xl bg-surface-hover animate-pulse shrink-0" />
              <div className="flex-1 space-y-3">
                <div className="h-3 bg-surface-hover rounded w-28 animate-pulse" />
                <div className="h-5 bg-surface-hover rounded w-64 animate-pulse" />
                <div className="h-3 bg-surface-hover rounded w-48 animate-pulse" />
                <div className="h-3 bg-surface-hover rounded w-full animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SkeletonTechStack() {
  return (
    <div className="py-24 md:py-32 px-6 md:px-12 bg-surface/50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 space-y-3">
          <div className="h-10 bg-surface rounded-lg w-52 mx-auto animate-pulse" />
          <div className="h-4 bg-surface rounded w-80 mx-auto animate-pulse" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-surface border border-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-5 w-8 bg-surface-hover rounded animate-pulse" />
                <div className="h-4 w-24 bg-surface-hover rounded animate-pulse" />
              </div>
              <div className="flex flex-wrap gap-2">
                {[1, 2, 3, 4, 5].map((j) => (
                  <div key={j} className="h-8 w-20 bg-surface-hover rounded-md animate-pulse" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SkeletonContact() {
  return (
    <div className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-2xl mx-auto">
        <div className="h-10 bg-surface rounded-lg w-52 mx-auto mb-12 animate-pulse" />
        <div className="bg-surface border border-border rounded-2xl p-6 md:p-8 space-y-8">
          {[1, 2].map((i) => (
            <div key={i} className="space-y-2">
              <div className="h-4 w-20 bg-surface-hover rounded animate-pulse" />
              <div className="h-12 bg-surface-hover rounded-lg animate-pulse" />
            </div>
          ))}
          <div className="space-y-2">
            <div className="h-4 w-24 bg-surface-hover rounded animate-pulse" />
            <div className="h-36 bg-surface-hover rounded-lg animate-pulse" />
          </div>
          <div className="h-12 w-36 bg-accent/20 rounded-lg animate-pulse" />
        </div>
      </div>
    </div>
  );
}

const skeletons: Record<string, () => React.JSX.Element> = {
  Timeline: SkeletonTimeline,
  TechStack: SkeletonTechStack,
  Contact: SkeletonContact,
};

function LazySection({
  component: Component,
  skeleton: Skeleton,
  id,
}: {
  component: ComponentType;
  skeleton: () => React.JSX.Element;
  id: string;
}) {
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
    <div ref={ref} id={id}>
      {visible ? <Component /> : <Skeleton />}
    </div>
  );
}

export default function LazyComponents() {
  return (
    <>
      <LazySection id="timeline" component={Timeline} skeleton={SkeletonTimeline} />
      <div className="section-separator" />
      <LazySection id="skills" component={TechStack} skeleton={SkeletonTechStack} />
      <div className="section-separator" />
      <LazySection id="contact" component={Contact} skeleton={SkeletonContact} />
    </>
  );
}
