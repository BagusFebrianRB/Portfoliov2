"use client";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

interface Skill {
  number: string;
  title: string;
  description: string;
  tech: string[];
  items: string[];
}

// Separate component untuk tiap skill item
function SkillCard({
  skill,
  index,
  containerRef,
}: {
  skill: Skill;
  index: number;
  containerRef: React.RefObject<HTMLDivElement | null>;
}) {
  const { scrollYProgress: skillProgress } = useScroll({
    target: containerRef,
    offset: [`${index * 33}% end`, `${(index + 1) * 33}% start`],
  });

  // Parallax transformations dengan spring
  const yRaw = useTransform(skillProgress, [0, 0.5, 1], [100, 0, -100]);
  const y = useSpring(yRaw, { stiffness: 300, damping: 50 });

  const opacityRaw = useTransform(
    skillProgress,
    [0, 0.2, 0.5, 0.8, 1],
    [0, 1, 1, 1, 0],
  );

  const opacity = useSpring(opacityRaw, { stiffness: 300, damping: 50 });

  const scaleRaw = useTransform(
    skillProgress,
    [0, 0.2, 0.5, 0.8, 1],
    [0.9, 1, 1, 1, 0.7],
  );
  const scale = useSpring(scaleRaw, { stiffness: 100, damping: 50 });

  // Parallax untuk number background
  const numberY = useTransform(skillProgress, [0, 1], [150, -150]);
  const numberOpacity = useTransform(skillProgress, [0, 0.3, 0.7, 1], [0, 0.8, 0.8, 0]);

  return (
    <motion.div style={{ y, opacity, scale }} className="sticky top-20 mb-12">
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          style={{ y: numberY, opacity: numberOpacity }}
          className="absolute top-0 right-0 md:right-10 text-[8rem] md:text-[12rem] font-bold bg-linear-to-b from-white/10 to-white/5 bg-clip-text text-transparent select-none pointer-events-none z-20"
        >
          {skill.number}
        </motion.div>

        {/* Card - More Professional */}
        <div className="relative mt-8  border border-white/5 overflow-hidden z-10">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-[#161616] pointer-events-none" />
          
          {/* Content */}
          <div className="relative py-12 px-10 md:px-16">
            {/* Number Badge */}
            

            {/* Title */}
            <h3 className="text-3xl md:text-5xl font-bold mb-6 bg-linear-to-r from-white to-white/70 bg-clip-text text-transparent">
              {skill.title}
            </h3>

            {/* Description */}
            <p className="text-sm md:text-lg text-gray-400 leading-relaxed mb-10 max-w-3xl">
              {skill.description}
            </p>

            {/* Divider */}
            <div className="h-px bg-linear-to-r from-white/20 via-white/10 to-transparent mb-10" />

            {/* Two Column Layout */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {/* Tech Stack */}
              <div>
                <h4 className="text-xs uppercase tracking-[0.2em] text-white/50 mb-5 font-semibold">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {skill.tech.map((tech, i) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-4 py-2.5 bg-linear-to-br from-white to-white/70 text-black text-xs md:text-sm font-medium cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Key Areas */}
              <div>
                <h4 className="text-xs uppercase tracking-[0.2em] text-white/50 mb-5 font-semibold">
                  Expertise Areas
                </h4>
                <div className="space-y-3">
                  {skill.items.map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-center gap-3 group"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-linear-to-r from-white to-white/50 group-hover:scale-150 transition-transform" />
                      <span className="text-sm md:text-base text-gray-300 group-hover:text-white transition-colors">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Accent Line */}
          <div className="h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />
        </div>
      </div>
    </motion.div>
  );
}

// Main component
export default function ExpertiseItem() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const skills: Skill[] = [
    {
      number: "01",
      title: "Full-Stack Development",
      description:
        "I design and build end-to-end web systems, connecting user-facing interfaces with robust backend logic and data layers. My focus is on reliability, data flow, and real-world application needs.",
      tech: [
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "MySQL",
        "Supabase",
        "REST APIs",
      ],
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

  return (
    <div ref={containerRef} className="relative">
      {skills.map((skill, index) => (
        <SkillCard
          key={skill.number}
          skill={skill}
          index={index}
          containerRef={containerRef}
        />
      ))}
    </div>
  );
}