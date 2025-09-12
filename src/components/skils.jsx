"use client";

import { motion } from "framer-motion";
import { skills } from "../data/data";
import { useTheme } from "@/contexts/ThemeContext";
import { useEffect, useState } from "react";

const Skills = () => {
  const [mounted, setMounted] = useState(false);

  // Only use theme context after component is mounted
  let theme = "light";

  try {
    const themeContext = useTheme();
    theme = themeContext.theme;
  } catch (error) {
    // Theme context not available during SSR
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  // Return a placeholder during SSR
  if (!mounted) {
    return (
      <section className="relative py-32 px-4 md:px-8 lg:px-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-secondary)] via-[var(--bg-secondary)]/80 to-transparent opacity-30" />
        <div className="max-w-4xl mx-auto relative">
          <div className="mb-20">
            <span className="text-[var(--text-accent)] text-sm tracking-[0.2em] uppercase mb-4 block font-medium">
              Expertise
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-clashbold text-[var(--text-primary)] mb-6 tracking-tight">
              Technical Proficiency
            </h2>
            <div className="h-[1px] w-16 bg-[var(--text-accent)] opacity-50 mb-8" />
            <p className="text-[var(--text-muted)] text-lg max-w-2xl font-light leading-relaxed">
              A comprehensive toolkit refined through years of practical
              experience
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group relative bg-[var(--bg-card)]/80 backdrop-blur-sm border border-[var(--border-primary)] p-6 transition-all duration-300 shadow-[var(--shadow-sm)]"
              >
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-[var(--text-accent)] w-5 h-5">
                      {<skill.icon />}
                    </div>
                  </div>
                  <p className="text-[var(--text-primary)] font-medium tracking-wide mb-2">
                    {skill.title}
                  </p>
                  <div className="h-[1px] w-8 bg-[var(--text-accent)]/30" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-32 px-4 md:px-8 lg:px-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-secondary)] via-[var(--bg-secondary)]/80 to-transparent opacity-30" />

      <div className="max-w-4xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="text-[var(--text-accent)] text-sm tracking-[0.2em] uppercase mb-4 block font-medium">
            Expertise
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-clashbold text-[var(--text-primary)] mb-6 tracking-tight">
            Technical Proficiency
          </h2>
          <div className="h-[1px] w-16 bg-[var(--text-accent)] opacity-50 mb-8" />
          <p className="text-[var(--text-muted)] text-lg max-w-2xl font-light leading-relaxed">
            A comprehensive toolkit refined through years of practical
            experience
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={`${theme}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                scale: 1.02,
              }}
              className="group relative bg-[var(--bg-card)]/80 backdrop-blur-sm border border-[var(--border-primary)] p-6 transition-all duration-300 shadow-[var(--shadow-sm)] hover:bg-[var(--bg-card-hover)]"
              data-theme={theme}
            >
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-[var(--text-accent)] w-5 h-5">
                    {<skill.icon />}
                  </div>
                </div>
                <p className="text-[var(--text-primary)] font-medium tracking-wide mb-2">
                  {skill.title}
                </p>
                <div className="h-[1px] w-8 bg-[var(--text-accent)]/30 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--text-accent)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
