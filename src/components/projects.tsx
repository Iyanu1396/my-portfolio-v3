"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Boki",
    desc: "Boki is a collaborative content operations platform built for content marketers, technical writers, and creators.",
    link: "https://www.boki.io",
    image: "/images/boki-home.png",
  },
  {
    name: "Equisettle",
    desc: "Equisettle simplifies payments, enhances financial management, and provides innovative tools to streamline your daily financial tasks.",
    link: "https://equisettle.co.uk/",
    image: "/images/eqisettle-home.png",
  },
];

const Projects = () => {
  return (
    <section className="relative py-24 px-4 md:px-8 lg:px-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-secondary)] to-transparent opacity-40" />

      <div className="max-w-4xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-left mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-clashbold text-[var(--text-primary)] mb-6 tracking-tight">
            Featured Work
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] mb-6" />
          <p className="text-[var(--text-muted)] text-base md:text-lg max-w-2xl">
            Showcasing projects that demonstrate my skills in building web
            applications and creating impactful solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-[var(--bg-card)]/80 backdrop-blur-lg rounded-lg overflow-hidden border border-[var(--border-primary)] transition-all duration-300 shadow-[var(--shadow-md)]"
            >
              {/* Project Image */}
              <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.name} project screenshot`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)]/40 via-transparent to-transparent" />
              </div>

              {/* Project Info */}
              <div className="p-6">
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group/title"
                >
                  <h3 className="text-[var(--text-primary)] text-xl font-clashbold mb-3 group-hover/title:text-[var(--text-accent)] transition-colors duration-200">
                    {project.name}
                  </h3>
                </Link>

                <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-4">
                  {project.desc}
                </p>
                {/* Tech chips removed */}
              </div>

              {/* Hover effect border */}
              <div className="h-[2px] w-full bg-gradient-to-r from-[var(--gradient-start)]/50 to-[var(--gradient-end)]/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 absolute bottom-0 left-0" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
