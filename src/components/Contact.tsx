"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen py-32 px-6 bg-white text-black"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">
            05 — Let&apos;s Connect
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">Get In Touch</h2>

          <div className="border border-black/10 p-12 text-center">
            <p className="text-gray-500">Your contact form/info here...</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
