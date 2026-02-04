import Hero from "@/components/Hero";
import Project from "@/components/Project";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Expertise from "@/components/Expertise";

export default function Portfolio() {
  return (
    <div className="min-h-screen mx-auto">
      <section>
        <Hero />
        <Expertise/>
        <Project />
        <Experience />
        <About />
        <Contact />
      </section>
    </div>
  );
}
