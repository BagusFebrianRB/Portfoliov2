"use client";

import { FileUser, Github, Linkedin } from 'lucide-react';
import Image from "next/image";

export default function AboutEditorial() {
  return (
    <section className="relative min-h-screen w-full pb-20">
      {/* CONTENT */}
      <div className="mx-auto w-full">
        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* IMAGE */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <div className="aspect-4/5 overflow-hidden grayscale hover:grayscale-0 transition duration-700">
                <Image
                  src="/about.jpg"
                  alt="Portrait"
                  fill
                  unoptimized
                  className="object-cover scale-120 object-bottom"
                />
              </div>

              <p className="hidden md:block absolute text-5xl text-white/80 select-none">
                Bagus Febrian
              </p>
            </div>
          </div>

          {/* TEXT */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-10">
            <div>
              <h3 className="text-4xl leading-snug max-w-xl">
                Building digital experiences through structure, intent, and
                engineering discipline.
              </h3>

              <div className="h-px w-24 bg-black/20 dark:bg-white/20 my-6" />

              <p className="text-lg opacity-70 max-w-xl leading-relaxed">
                I’m a software engineer who focuses on turning ideas into
                well-structured, thoughtful digital products. My approach is
                grounded in clarity, usability, and long-term maintainability —
                treating development as both a technical and design-driven
                process, where every decision has purpose.
              </p>

              <p className="text-lg opacity-70 max-w-xl leading-relaxed mt-6">
                I work across frontend and backend layers, with a strong
                interest in UI architecture, interaction details, and clean
                system design. Through academic, professional, and independent
                projects, I’ve learned that good software is built through
                consistency, attention to detail, and a deep understanding of
                how systems evolve over time.
              </p>

              {/* Links */}
              <div className="mt-10 flex flex-row gap-4">
                <a
                  href="https://www.linkedin.com/in/bagusfebrian/"
                  target="_blank"
                  className="w-fit text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors"
                >
                  <Linkedin />
                </a>
                <a
                  href="https://github.com/BagusFebrianRB"
                  target="_blank"
                  className="w-fit text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors"
                >
                  <Github/>
                </a>
                <a
                  href="/cv.pdf"
                  target="_blank"
                  className="w-fit text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors"
                >
                  <FileUser/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
