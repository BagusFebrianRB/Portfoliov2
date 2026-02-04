"use client";
import { motion } from "framer-motion";
import ExpertiseItem from "./ui/ExpertiseItem";

export default function Expertise() {
  return (
    <section
      id="expertise"
      className="min-h-screen py-[clamp(4rem,12vh,10rem)] px-8 section-dark rounded-t-4xl"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">
            01 — What I Do Best
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">My Expertise</h2>

          <p className="text-sm md:text-xl text-gray-600 max-w-2xl mb-16">
            The skills and tools I rely on to turn ideas into polished digital
            experiences.
          </p>

          <ExpertiseItem />
        </motion.div>
      </div>
    </section>
  );
}
