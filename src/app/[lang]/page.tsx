import Hero from "@/components/Hero";
import About from "@/components/About";
import Journey from "@/components/Journey";
import ProjectsSection from "@/components/ProjectsSection";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";
import { projects, summarizeProject } from "@/data/projects";

// Every section is server-rendered: nothing waits for a scroll to appear.
// Only project summaries reach the client; full write-ups stay on their own pages.
export default function Home() {
  const summaries = projects.map(summarizeProject);
  const projectCount = summaries.filter((p) => !p.archived).length;

  return (
    <>
      <Hero />
      <About projectCount={projectCount} />
      <Journey />
      <ProjectsSection projects={summaries} />
      <TechStack />
      <Contact />
    </>
  );
}
