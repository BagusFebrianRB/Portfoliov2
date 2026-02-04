"use client";

import {  Github, Instagram, Linkedin } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-linear-to-b from-black to-black/80 text-white"
    >
      <div className="mx-auto px-6 md:px-12 py-12">
        {/* Header */}
        <h2 className="text-center text-5xl md:text-7xl tracking-tight mb-20">
          Get In Touch
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          {/* Left Info */}
          <div className="md:col-span-4 space-y-12 text-sm">
            {/* Email */}
            <div>
              <p className="uppercase tracking-widest text-black/50 dark:text-white/50 mb-2">
                Email
              </p>
              <p className="text-lg">bagusfebrian67@email.com</p>
            </div>

            {/* Location */}
            <div>
              <p className="uppercase tracking-widest text-black/50 dark:text-white/50 mb-2">
                Location
              </p>
              <p className="text-lg">Tuban, Jawa Timur, Indonesia</p>
            </div>

            {/* Socials */}
            <div>
              <p className="uppercase flex-row tracking-widest text-black/50 dark:text-white/50 mb-4">
                Socials
              </p>
              <ul className="space-y-3 text-lg">
                <li>
                  <a
                    href="https://www.linkedin.com/in/bagusfebrian/"
                    target="_blank"
                    className="hover:opacity-60 transition"
                  >
                    <Linkedin />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/BagusFebrianRB"
                    target="_blank"
                    className="hover:opacity-60 transition"
                  >
                    <Github />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/bagusfebrian_/"
                    target="_blank"
                    className="hover:opacity-60 transition"
                  >
                    <Instagram />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Form */}
          <form className="md:col-span-8 space-y-12">
            {/* Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <label className="block uppercase tracking-widest text-xs mb-3 text-black/50 dark:text-white/50">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full bg-transparent border-b border-black/30 dark:border-white/30 py-2 focus:outline-none"
                />
              </div>

              <div>
                <label className="block uppercase tracking-widest text-xs mb-3 text-black/50 dark:text-white/50">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full bg-transparent border-b border-black/30 dark:border-white/30 py-2 focus:outline-none"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block uppercase tracking-widest text-xs mb-3 text-black/50 dark:text-white/50">
                Message
              </label>
              <textarea
                rows={3}
                placeholder="How can we collaborate?"
                className="w-full bg-transparent border-b border-black/30 dark:border-white/30 py-2 focus:outline-none resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="mt-8 inline-block bg-black dark:bg-white text-white dark:text-black px-12 py-4 text-xs uppercase tracking-widest hover:opacity-80 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
