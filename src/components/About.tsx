"use client";
import { motion } from "framer-motion";
import AboutEditorial from "./ui/AboutMe";

export default function About() {
  return (
    <section id="about" className="section-dark min-h-screen rounded-b-4xl py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">
            04 — Get To Know Me
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mb-16">About Me</h2>

          <AboutEditorial/>
        </motion.div>
      </div>
    </section>
  );
}
