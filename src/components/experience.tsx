"use client";

import Resume from "./resume";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section className="relative pt-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#130b1c] via-[#130b1c]/80 to-transparent opacity-30" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="text-[#6f1cd7] text-sm tracking-[0.25em] uppercase mb-4 block font-medium">
            Experience
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-clashbold text-white mb-6 tracking-tight">
            Professional Journey
          </h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-[#6f1cd7] to-transparent mb-8" />
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 md:left-12 top-0 w-[1px] h-full bg-gradient-to-b from-[#6f1cd7]/40 via-[#6f1cd7]/20 to-transparent" />

          <div className="space-y-12">
            {[
              {
                title: "Fullstack Engineer",
                company: "Twosvn Agency",
                location: "Remote (London ,UK)",
                period: "Dec 2024 - Present",
                description: [
                  "Partnered with a UK-based team to build a high-performance accounts receivable software, delivering a scalable and reliable solution.",
                  " Designed and integrated 3rd-party systems, enabling seamless data synchronization between QuickBooks and the platform.",
                  "Contributed in developing a robust API infrastructure, enhancing system reliability and enabling secure, efficient data exchange.",
                  "Streamlined operations by automating invoice workflows, reducing manual processes and improving productivity.",
                  "Led efforts in code restructuring, optimizing maintainability, and improving system performance.",
                  "Maintained high standards of code quality through rigorous testing and debugging, ensuring robust and reliable functionality.",
                ],
              },
              {
                title: "Frontend Engineer",
                company: "Medilog",
                location: "Remote (Lagos, Nigeria)",
                period: "Sep 2024 - Current",
                description: [
                  "Developed and implemented all dashboards, enhancing the user interface and functionality.",
                  "Improved site visuals, aligning with modern design principles to enhance the user experience.",
                  "Customized user interface elements to ensure an intuitive, user-friendly experience tailored to medical professionals.",
                  "Ensured responsiveness across all devices, optimizing performance and usability on various screen sizes.",
                ],
              },
              {
                title: "Web Developer - Contract",
                company: "Rubies Undies",
                location: "Remote (Lagos, Nigeria)",
                period: "Mar 2023 - Oct 2023",
                description: [
                  "Developed a fully functional e-commerce website for a clothing brand , enhancing brand visibility and online sales capabilities.",
                  "Crafted a visually engaging, brand-consistent design with a smooth and intuitive user experience.",
                  "Integrated secure payment gateways using Flutterwave and streamlined checkout processes, resulting in an efficient and user-friendly shopping experience.",
                  "Optimized website performance by implementing caching, image compression, and other speed-enhancing techniques, improving load times and customer satisfaction.",
                  "Implemented responsive design to ensure optimal functionality across devices, increasing mobile traffic engagement and conversions.",
                  "Configured and managed product catalogues, handling variations, categories, and inventory for an organized and user-friendly product display.",
                  "Utilized SEO best practices and integrated Google Analytics to boost search engine rankings and provide insightful user behavior metrics",
                ],
              },
            ].map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative pl-16 md:pl-24"
              >
                <motion.div
                  className="absolute left-0 top-3 transform -translate-x-1/2"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-5 h-5 rounded-full bg-[#130b1c] border-2 border-[#6f1cd7] shadow-lg shadow-[#6f1cd7]/20" />
                </motion.div>

                <motion.div
                  whileHover={{
                    scale: 1.02,
                    backgroundColor: "rgba(111, 28, 215, 0.08)",
                  }}
                  className="group relative bg-[#130b1c]/60 backdrop-blur-sm border border-[#ffffff08] p-8 rounded-sm transition-all duration-500"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#6f1cd7]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  <div className="relative z-10">
                    <h3 className="text-2xl md:text-3xl font-clashbold text-white mb-3">
                      {experience.title}
                    </h3>
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-6">
                      <p className="text-[#6f1cd7] font-medium tracking-wide">
                        {experience.company}
                      </p>
                      <div className="flex items-center gap-4">
                        <span className="hidden md:inline text-[#FFFFFF40]">
                          •
                        </span>
                        <span className="text-[#FFFFFF99] text-sm">
                          {experience.location}
                        </span>
                        <span className="text-[#FFFFFF40]">•</span>
                        <span className="text-[#FFFFFF99] text-sm tracking-wider">
                          {experience.period}
                        </span>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {experience.description.map((item, i) => (
                        <li
                          key={i}
                          className="text-[#FFFFFF99] leading-relaxed font-light flex items-start"
                        >
                          <span className="text-[#6f1cd7] mr-3 mt-1.5">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 pl-16 md:pl-24"
          >
            <Resume buttonText="View Resume" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
