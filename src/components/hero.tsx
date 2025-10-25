"use client";
import { motion } from "framer-motion";
import { InIcon, TwIcon } from "./svgs";
import NowPlaying from "./NowPlaying";

const Hero = () => {
  return (
    <>
      <section className="mx-auto px-6 py-24 md:px-8 lg:pt-32 lg:px-20">
        <div className="flex flex-col items-start max-w-4xl mx-auto">
          {/* Greeting */}
          <p className="text-[var(--text-secondary)] text-lg md:text-xl font-medium mb-4">
            Hey there 👋
          </p>

          {/* Name */}
          <h1 className="gradientText text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            I'm Iyanuoluwa
          </h1>

          {/* Tech Stack */}
          <p className="gradientText font-medium text-lg md:text-xl text-opacity-90 mb-8 max-w-2xl">
            Product Engineer working with React, Next.js, Node.js and
            Typescript.
          </p>

          {/* Now Playing - Compact display */}
          <div className="mb-8">
            <NowPlaying />
          </div>

          {/* Main Description */}
          <div className="text-[var(--text-secondary)] font-medium space-y-6 max-w-3xl">
            <p className="text-base md:text-lg leading-relaxed">
              I've been building apps for over 3 years, primarily focusing on
              delivering delightful web experiences. I've built products in
              fintech, AI, and more recently, content management space.
            </p>

            <p className="text-base md:text-lg leading-relaxed">
              Product Engineer at Hackmamba. I worked as a Full Stack Engineer
              at Twosvn Agency (UK) and actively freelance on Upwork,
              specializing primarily as a Chrome Extension Developer.
            </p>
          </div>

          {/* Resume Button */}
          <div className="mt-12 md:mt-16 space-x-4">
            <a
              href="https://standardresume.co/r/bimfuqcRzU5D8A4DYzHzG"
              target="_blank"
              rel="noreferrer"
              className="inline-block"
            >
              <button className="bg-[var(--gradient-start)] hover:bg-[var(--gradient-end)] text-white font-clash text-[15px] md:text-[18px] font-medium px-6 py-3 border border-[var(--border-accent)] rounded-lg hover:shadow-[var(--shadow-md)] active:scale-[0.95] transition-all duration-300">
                View Resume
              </button>
            </a>
            <a
              href="https://cal.com/iyanu-codes/1on1"
              target="_blank"
              rel="noreferrer"
              className="inline-block"
            >
              <button className="bg-[var(--gradient-start)] hover:bg-[var(--gradient-end)] text-white font-clash text-[15px] md:text-[18px] font-medium px-6 py-3 border border-[var(--border-accent)] rounded-lg hover:shadow-[var(--shadow-md)] active:scale-[0.95] transition-all duration-300">
                Schedule a Call
              </button>
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-8 flex items-center gap-6">
            <motion.a
              href="https://twitter.com/iyanu_codes"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="transition-all duration-300"
            >
              <TwIcon
                fill="var(--gradient-start)"
                className="w-8 h-8 rounded-full border-2 border-[var(--gradient-start)] p-1.5 hover:bg-[var(--bg-secondary)] transition-all duration-300"
              />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/atijosan-iyanuoluwa-827049246/"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="transition-all duration-300"
            >
              <InIcon
                fill="var(--gradient-start)"
                className="w-8 h-8 rounded-full border-2 border-[var(--gradient-start)] p-1.5 hover:bg-[var(--bg-secondary)] transition-all duration-300"
              />
            </motion.a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
