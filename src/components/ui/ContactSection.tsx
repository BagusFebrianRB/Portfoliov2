"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Github, Instagram, Linkedin } from "lucide-react";
import { useRef } from "react";

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end 80%"],
  });

  const heroYRaw = useTransform(scrollYProgress, [0, 1], [-250, 0]);
  const heroY = useSpring(heroYRaw, {
    stiffness: 300,
    damping: 60,
  });


  const heroScaleRaw = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const heroScale = useSpring(heroScaleRaw, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <motion.div style={{ y: heroY, scale: heroScale }} className="will-change-transform">
      <section
        ref={sectionRef}
        id="contact"
        className="bg-linear-to-b from-black to-black/80 text-white"
      >
        <div className="mx-auto px-6 md:px-12 py-12 md:py-16">
          {/* Header */}
          <h2 className="text-center text-4xl md:text-5xl lg:text-7xl tracking-tight mb-12 md:mb-20">
            Get In Touch
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
            {/* Left Info */}
            <div className="md:col-span-4 order-last md:order-first space-y-8 md:space-y-12 text-sm">
              {/* Email */}
              <div>
                <p className="uppercase tracking-widest text-white/50 mb-2 text-xs">
                  Email
                </p>
                <p className="text-base md:text-lg break-all">
                  bagusfebrian67@email.com
                </p>
              </div>

              {/* Location */}
              <div>
                <p className="uppercase tracking-widest text-white/50 mb-2 text-xs">
                  Location
                </p>
                <p className="text-base md:text-lg">
                  Tuban, Jawa Timur, Indonesia
                </p>
              </div>

              {/* Socials */}
              <div>
                <p className="uppercase tracking-widest text-white/50 mb-4 text-xs">
                  Socials
                </p>
                <ul className="flex md:flex-col gap-4 md:gap-3">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/bagusfebrian/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-60 transition inline-block"
                    >
                      <Linkedin className="w-6 h-6" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/BagusFebrianRB"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-60 transition inline-block"
                    >
                      <Github className="w-6 Fh-6" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/bagusfebrian_/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-60 transition inline-block"
                    >
                      <Instagram className="w-6 h-6" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Form */}
            <form className="md:col-span-8 space-y-8 md:space-y-12">
              {/* Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                <div>
                  <label className="block uppercase tracking-widest text-xs mb-3 text-white/50">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full bg-transparent border-b border-white/30 py-2 focus:outline-none focus:border-white transition placeholder:text-white/30 text-white"
                  />
                </div>

                <div>
                  <label className="block uppercase tracking-widest text-xs mb-3 text-white/50">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full bg-transparent border-b border-white/30 py-2 focus:outline-none focus:border-white transition placeholder:text-white/30 text-white"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block uppercase tracking-widest text-xs mb-3 text-white/50">
                  Message
                </label>
                <textarea
                  rows={3}
                  placeholder="How can we collaborate?"
                  className="w-full bg-transparent border-b border-white/30 py-2 focus:outline-none focus:border-white transition resize-none placeholder:text-white/30 text-white"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full md:w-auto mt-6 md:mt-8 bg-white text-black px-8 md:px-12 py-3 md:py-4 text-xs uppercase tracking-widest hover:opacity-80 transition font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
