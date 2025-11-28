"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { testimonials } from "@/data/data";

const Testimonials = () => {
  return (
    <section
      className="relative py-24 px-4 md:px-8 lg:px-16 overflow-hidden"
      role="region"
      aria-label="Client Testimonials"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--bg-secondary)] to-transparent opacity-40" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-left mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-clashbold text-[var(--text-primary)] mb-6 tracking-tight">
            Testimonials
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] mb-6" />
          <p className="text-[var(--text-muted)] text-base md:text-lg max-w-2xl">
            What clients and colleagues say about working with me.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-[var(--bg-card)]/80 backdrop-blur-lg rounded-lg overflow-hidden border border-[var(--border-primary)] transition-all duration-300 shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-lg)] hover:border-[var(--border-secondary)]"
            >
              <div className="p-6 md:p-8">
                {/* Quote Icon */}
                <div className="mb-6">
                  <svg
                    className="w-10 h-10 text-[var(--gradient-start)] opacity-60"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Testimonial Text */}
                <p className="text-[var(--text-secondary)] text-base md:text-lg leading-[1.8] mb-6 max-w-prose text-justify">
                  &ldquo;{testimonial.testimonial}&rdquo;
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-6 border-t border-[var(--border-primary)]">
                  <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-[var(--border-accent)] flex-shrink-0">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 64px, 80px"
                    />
                  </div>
                  <div>
                    <h4 className="text-[var(--text-primary)] font-clashbold text-lg md:text-xl mb-1">
                      {testimonial.name}
                    </h4>
                    <p className="text-[var(--text-muted)] text-sm md:text-base">
                      {testimonial.title}
                    </p>
                    <p className="text-[var(--text-muted)] text-xs md:text-sm mt-1">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Hover effect border */}
              <div className="h-[2px] w-full bg-gradient-to-r from-[var(--gradient-start)]/50 to-[var(--gradient-end)]/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
