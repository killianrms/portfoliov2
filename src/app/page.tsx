import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import Timeline from "@/components/Timeline";
import TechStack from "@/components/TechStack";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="section-separator" />
      <About />
      <div className="section-separator" />
      <ProjectsSection />
      <div className="section-separator" />
      <Timeline />
      <div className="section-separator" />
      <TechStack />
      <div className="section-separator" />
      <Contact />
    </>
  );
}
