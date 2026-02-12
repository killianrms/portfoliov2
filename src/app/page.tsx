import Hero from "@/components/Hero";
import About from "@/components/About";
import ProjectsSection from "@/components/ProjectsSection";
import { Suspense, lazy } from "react";
import LazyComponents from "@/components/LazyComponents";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="section-separator" />
      <About />
      <div className="section-separator" />
      <ProjectsSection />
      <div className="section-separator" />
      <LazyComponents />
    </>
  );
}
