"use client";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="min-h-screen py-32 px-6  section-dark">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">
            03 — My Journey
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">Experience</h2>

          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-16">
            Timeline of my professional growth and the roles I&apos;ve taken on.
          </p>

          <div className="border border-black/10 p-12 text-center">
            <p className="text-gray-500">Your experience timeline here...</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
