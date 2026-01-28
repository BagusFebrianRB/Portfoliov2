"use client";
import { motion } from "framer-motion";
import ProjectItem from "./ui/ProjectItem";

export default function Project() {
  return (
    <section
      id="projects"
      className="section-dark min-h-screen py-[clamp(4rem,12vh,10rem)] px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Label */}
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">
            02 — What I&apos;ve Built
          </p>

          {/* Section Title */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Featured Projects
          </h2>

          {/* Section Description */}
          <p className="text-sm md:text-xl text-gray-400 max-w-2xl mb-16">
            A selection of projects that showcase my skills in frontend
            development, UI/UX design, and problem-solving.
          </p>

          {/* Content Area - Customize per section */}
          <div className="text-center">
            <ProjectItem/>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
