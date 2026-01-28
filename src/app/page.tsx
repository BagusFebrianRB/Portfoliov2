import Hero from "@/components/Hero";
import Project from "@/components/Project";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Expertise from "@/components/Expertise";

export default function Portfolio() {
  return (
    <div className="min-h-screen mx-auto overflow-hidden pb-20">
      <section className="pb-8 ">
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
