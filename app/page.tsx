import Intro from "@/app/components/intro";
import SectionDivider from "@/app/components/section-divider";
import About from "@/app/components/about";
import Projects from "@/app/components/projects";
import ProjectsAlt from "@/app/components/projects-alt";
import Skills from "@/app/components/skills";
import Experience from "@/app/components/experience";
import Contact from "@/app/components/contact";

export default function Home() {
  return (
    <main
      // flex-col because we want to stack the elements vertically.
      className="flex flex-col items-center"
    >
      <Intro />

      <About />

      <ProjectsAlt />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
