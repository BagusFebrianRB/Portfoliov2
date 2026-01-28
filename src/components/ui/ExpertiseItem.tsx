"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus } from "lucide-react";

export default function ExpertiseItem() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const skills = [
    {
      number: "01",
      title: "Full-Stack Development",
      description:
        "I design and build end-to-end web systems, connecting user-facing interfaces with robust backend logic and data layers. My focus is on reliability, data flow, and real-world application needs.",
      tech: ["Node.js", "Express.js", "PostgreSQL", "MySQL", "Supabase", "REST APIs"],
      items: [
        "Database Design",
        "RESTful APIs",
        "API Documentation",
        "Authentication & Security",
        "Server Architecture",
      ],
    },
    {
      number: "02",
      title: "Frontend & UI Engineering",
      description:
        "I focus on building intuitive, responsive, and visually clean interfaces. Every UI decision is grounded in usability, performance, and long-term maintainability.",
      tech: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion"],
      items: [
        "Component Architecture",
        "State Management",
        "Responsive Design",
        "Performance Optimization",
        "Animation & Interactions",
      ],
    },
    {
      number: "03",
      title: "Engineering & Workflow",
      description:
        "I care about how software is built, not just how it looks. I prioritize clean code, structured workflows, and tooling that supports collaboration and scalability.",
      tech: ["Git", "Github", "Design Systems", "User Research"],
      items: [
        "Project Structure",
        "Reusable Components",
        "Clean Architecture",
        "Debugging & Refactoring",
        "Performance Awareness",
      ],
    },
  ];

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section>
      <div className="w-full mx-auto">
        {/* Accordion List */}
        <div className="space-y-4">
          {skills.map((skill, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <motion.div
                key={skill.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className=" overflow-hidden bg-white/5 backdrop-blur-sm"
              >
                {/* Header - Always Visible */}
                <button
                  onClick={() => toggleExpand(index)}
                  className="w-full px-8 py-6 flex items-center justify-between hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-center gap-6">
                    <span className="text-[clamp(1rem,2vw,5rem)] font-bold text-white/40">
                      {skill.number}
                    </span>
                    <h3 className="text-[clamp(1rem,2vw,5rem)] font-bold text-left">
                      {skill.title}
                    </h3>
                  </div>

                  <motion.div
                    animate={{ rotate: isExpanded ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0"
                  >
                    <Plus className="w-[clamp(20px,4vw,28px)] h-[clamp(20px,4vw,28px)]" />
                  </motion.div>
                </button>

                {/* Expandable Content */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-8 pt-4 border-t border-white/10">
                        {/* Description */}
                        <p className="text-gray-400 text-sm md:text-xl leading-relaxed mb-8">
                          {skill.description}
                        </p>
                        <div className="flex justify-center items-center">
                          {/* Tech Stack */}
                          <div >
                            <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-4">
                              Technologies
                            </h4>
                            <div className="flex flex-wrap justify-center gap-2">
                              {skill.tech.map((tech, i) => (
                                <motion.span
                                  key={tech}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: i * 0.05 }}
                                  className="px-3 py-1.5 bg-white/10 text-white text-sm "
                                >
                                  {tech}
                                </motion.span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
