"use client";

import React, { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Menu, X } from "lucide-react";
import type { Variants } from "motion/react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { scrollY } = useScroll();

  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  const menuVariants: Variants = {
    hidden: {
      clipPath: "circle(0% at 100% 0%)",
    },
    visible: {
      clipPath: "circle(150% at 50% 50%)",
      transition: {
        duration: 2,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: {
      clipPath: "circle(0% at 100% 0%)",
      transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] as const },
    },
  };

  useEffect(() => {
    const handleScroll = () => {
      const projects = document.getElementById("expertise");
      if (!projects) return;

      const triggerY = projects.offsetTop;

      setScrolled(window.scrollY >= triggerY);
      if (window.scrollY <= triggerY) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <div className="h-16">
      {/* NAVBAR */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-6`}
      >
        <div className="mx-auto px-6 md:px-8 lg:px-12 flex justify-between">
          {/* Logo */}
          <motion.p
            className="text-xl md:text-2xl font-bold tracking-wide text-stone-600"
            animate={{
              opacity: scrolled ? 0 : 1,
              y: scrolled ? -8 : 0,
            }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
            style={{
              pointerEvents: scrolled ? "none" : "auto",
              opacity: heroOpacity,
            }}
          >
            Bagus Febrian
          </motion.p>

          {/* Desktop Navigation */}
          {!scrolled && (
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 lg:gap-10">
              {navItems.map((item, i) => (
                <motion.a
                  style={{
                    opacity: heroOpacity,
                  }}
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="text-sm  tracking-widest font-medium text-stone-600 hover:text-gray-400 transition-colors cursor-pointer"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          )}

          {/* Mobile Menu Button */}
          {scrolled && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white p-7 relative z-60"
                aria-label="Toggle menu"
              >
                <motion.div
                  animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.div>
              </button>
            </motion.div>
          )}
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {scrolled && mobileMenuOpen && (
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-lg z-40 "
            >
              <div className="flex flex-col justify-center items-center h-full space-y-8">
                {navItems.map((item, i) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="text-xl md:text-4xl uppercase tracking-widest font-medium text-[#e7e7e7] hover:text-gray-400 transition-colors cursor-pointer duration-300"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
}
