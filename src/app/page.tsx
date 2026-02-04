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
        <div className="relative z-20"><About /></div>
        <div className="relative z-10"><Contact /></div>
      </section>
    </div>
  );
}
