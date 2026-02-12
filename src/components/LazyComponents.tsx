"use client";

import dynamic from "next/dynamic";

const Timeline = dynamic(() => import("@/components/Timeline"), { ssr: false });
const TechStack = dynamic(() => import("@/components/TechStack"), { ssr: false });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: false });

export default function LazyComponents() {
  return (
    <>
      <Timeline />
      <div className="section-separator" />
      <TechStack />
      <div className="section-separator" />
      <Contact />
    </>
  );
}
