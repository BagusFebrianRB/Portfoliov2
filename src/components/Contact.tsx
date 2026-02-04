"use client";
import { motion } from "framer-motion";
import ContactSection from "./ui/ContactSection";

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
          <ContactSection/>
        </motion.div>
      </div>
    </section>
  );
}
