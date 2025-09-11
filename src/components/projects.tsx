"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    name: "E-Commerce Dashboard",
    desc: "Modern admin dashboard with analytics and inventory management",
    link: "https://github.com/yourusername/project1",
    image: null, // Will use default background
    tech: "React, Node.js, MongoDB",
  },
  {
    name: "Task Management App",
    desc: "Collaborative project management tool with real-time updates",
    link: "https://github.com/yourusername/project2",
    image: null,
    tech: "Next.js, TypeScript, Prisma",
  },
  {
    name: "Chrome Extension",
    desc: "Productivity extension for web developers with custom shortcuts",
    link: "https://github.com/yourusername/project3",
    image: null,
    tech: "JavaScript, Chrome APIs",
  },
];

const Projects = () => {
  return (
    <section className="relative py-24 px-4 md:px-8 lg:px-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#130b1c] to-transparent opacity-40" />

      <div className="max-w-4xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-left mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-clashbold text-white mb-6 tracking-tight">
            Featured Work
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-blue-500 mb-6" />
          <p className="text-[#FFFFFF99] text-base md:text-lg max-w-2xl">
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
              className="group bg-[#130b1c]/80 backdrop-blur-lg rounded-lg overflow-hidden border border-[#ffffff10] hover:border-purple-500/50 transition-all duration-300"
            >
              {/* Project Image/Default Background */}
              <div className="relative h-48 bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-indigo-600/20 overflow-hidden">
                <div
                  className={`absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#130b1c]/60 to-transparent" />
                {/* Tech badges removed */}
              </div>

              {/* Project Info */}
              <div className="p-6">
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group/title"
                >
                  <h3 className="text-white text-xl font-clashbold mb-3 group-hover/title:text-purple-300 transition-colors duration-200">
                    {project.name}
                    <span className="inline-block ml-2 transform group-hover/title:translate-x-1 transition-transform duration-200">
                      →
                    </span>
                  </h3>
                </Link>

                <p className="text-[#FFFFFF99] text-sm leading-relaxed mb-4">
                  {project.desc}
                </p>
                {/* Tech chips removed */}
              </div>

              {/* Hover effect border */}
              <div className="h-[2px] w-full bg-gradient-to-r from-purple-500/50 to-blue-500/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 absolute bottom-0 left-0" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
