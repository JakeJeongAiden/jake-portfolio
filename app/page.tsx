import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";
import About from "@/components/about";
import Projects from "@/components/projects";
import ProjectsAlt from "@/components/projects-alt";

export default function Home() {
  return (
    <main
      // flex-col because we want to stack the elements vertically.
      className="flex flex-col items-center px-4"
    >
      <Intro />
      <SectionDivider />
      <About />

      <ProjectsAlt />
      <Projects />
    </main>
  );
}
