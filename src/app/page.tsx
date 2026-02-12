import dynamic from "next/dynamic";
import Hero from "@/components/Hero";

// Below-fold sections: defer loading to reduce initial JS bundle
const About = dynamic(() => import("@/components/About"));
const ProjectsSection = dynamic(() => import("@/components/ProjectsSection"));
const LazyComponents = dynamic(() => import("@/components/LazyComponents"));

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
