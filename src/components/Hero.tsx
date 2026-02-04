// components/Hero.tsx
"use client";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const { scrollY } = useScroll();
  const heroYRaw = useTransform(scrollY, [0, 500], [0, 600]);
  const heroY = useSpring(heroYRaw, {
    stiffness: 500,
    damping: 100,
    mass: 0.1,
  });

  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  const heroScaleRaw = useTransform(scrollY, [0, 500], [1, 0.85]);
  const heroScale = useSpring(heroScaleRaw, {
    stiffness: 100,
    damping: 30,
  });

  const scrollProgress = useTransform(scrollY, [0, 50], [1, 0]);

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="hero relative min-h-svh flex items-center justify-center overflow-hidden pb-16"
    >
      <motion.div
        style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
        className="relative z-10 text-center px-6 mx-auto "
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-[clamp(3rem,10vw,8rem)] leading-none text-center tracking-wide font-extrabold mb-6 text-color-text-light "
        >
          Turning Ideas Into Thoughtful <br />
          <span className="relative inline-flex w-[0.9em] h-[0.7em] ">
            <Image
              src={"/profile.png"}
              fill
              className="object-cover object-top"
              alt="profile"
            />
          </span>{" "}
          Web Experiences.
        </motion.h1>
      </motion.div>
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        style={{ opacity: scrollProgress }}
        className="fixed bottom-[clamp(1rem,5vh,2rem)] z-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer "
        onClick={() => scrollToSection("#expertise")}
      >
        <span className="text-xs uppercase tracking-widest text-stone-800">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut",
          }}
        >
          <ChevronDown className="w-5 h-5 text-stone-800" />
        </motion.div>
      </motion.div>
    </section>
  );
}
