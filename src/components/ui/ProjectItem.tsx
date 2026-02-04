"use client";
import { motion } from "framer-motion";

import { AnimateIcon } from "../animate-ui/icons/icon";
import { SquareArrowOutUpRight } from "../icons/square-arrow-out-up-right";
import { LinkPreview } from "./link-preview";

export default function ProjectItem() {
  const projects = [
    {
      number: "01",
      title: "E-Commerce Platform",
      description:
        "Full-stack online store with real-time inventory management",
      tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      link: "https://www.sanity.io/templates",
      year: "2024",
    },
    {
      number: "02",
      title: "Task Management App",
      description: "Collaborative project tool with drag-and-drop interface",
      tech: ["React", "Firebase", "Tailwind", "Framer Motion"],
      link: "https://tailwindcss.com/",
      year: "2024",
    },
  ];

  return (
    <section>
      <div className="w-full mx-auto">
        {/* Projects List */}
        <div>
          {projects.map((project, index) => (
            <motion.div
              key={project.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
              }}
              className="border-b border-stone-300 last:border-b-0"
            >
              <AnimateIcon animation="path" animateOnHover>
                <LinkPreview url={project.link} className="block">
                  <motion.div
                    whileHover="hover"
                    className="py-8 group cursor-pointer"
                  >
                    <div className="grid md:grid-cols-[80px_1fr_auto] gap-2 items-start">
                      {/* Number */}
                      <div className="text-[clamp(1rem,2vw,5rem)] text-left font-bold text-white/40">
                        {project.number}
                      </div>

                      {/* Title & Tech */}
                      <div className="space-y-1">
                        <div className="flex justify-start items-start gap-2 md:gap-4">
                          <h3 className="text-[clamp(2rem,2vw,5rem)] font-bold">
                            {project.title}
                          </h3>
                          <div>
                            <SquareArrowOutUpRight className="md:opacity-0 md:group-hover:opacity-100 transition-opacity w-5 h-5" />
                          </div>
                        </div>

                        <p className="text-[clamp(1rem,1vw,5rem)] text-stone-600 font-light text-left">
                          {project.description}
                        </p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-4 pt-2">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="text-sm text-stone-500 font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Year */}
                      <div className="hidden md:block text-lg text-stone-400 font-medium">
                        {project.year}
                      </div>
                    </div>
                  </motion.div>
                </LinkPreview>
              </AnimateIcon>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
