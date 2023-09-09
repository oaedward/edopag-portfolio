import About from "@/components/section/About";
import Hero from "@/components/section/Hero";
import Services from "@/components/section/Services";
import Projects from "../components/section/projects/Projects";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Projects />
    </>
  );
}
