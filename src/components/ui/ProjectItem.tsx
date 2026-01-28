"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ProjectItem() {
  const projects = [
    {
      number: "01",
      title: "E-Commerce Platform",
      description:
        "Full-stack online store with real-time inventory management",
      tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      link: "#",
      year: "2024",
    },
    {
      number: "02",
      title: "Task Management App",
      description: "Collaborative project tool with drag-and-drop interface",
      tech: ["React", "Firebase", "Tailwind", "Framer Motion"],
      link: "#",
      year: "2024",
    },
    {
      number: "03",
      title: "Portfolio CMS",
      description: "Headless CMS for creative professionals",
      tech: ["Next.js", "Sanity", "TypeScript", "Vercel"],
      link: "#",
      year: "2023",
    },
    {
      number: "04",
      title: "Weather Dashboard",
      description: "Real-time weather data visualization",
      tech: ["React", "API Integration", "Chart.js", "Tailwind"],
      link: "#",
      year: "2023",
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
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border-b border-stone-300 last:border-b-0"
            >
              <motion.a
                href={project.link}
                whileHover="hover"
                className="block py-12  group cursor-pointer"
              >
                <div className="grid md:grid-cols-[80px_1fr_auto] gap-8 items-start">
                  {/* Number */}
                  <div className="text-4xl font-bold text-stone-400 group-hover:text-stone-900 transition-colors">
                    {project.number}
                  </div>

                  {/* Title & Tech */}
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <h3 className="text-3xl md:text-4xl font-bold text-stone-900 group-hover:translate-x-2 transition-transform">
                        {project.title}
                      </h3>
                      <motion.div
                        variants={{
                          hover: { x: 5, y: -5 },
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowUpRight className="w-6 h-6 text-stone-400 group-hover:text-stone-900 transition-colors" />
                      </motion.div>
                    </div>

                    <p className="text-lg text-stone-600 max-w-2xl">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 pt-2">
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
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
