"use client";
import { motion } from "framer-motion";
import { InIcon, TwIcon } from "./svgs";

const Hero = () => {
  return (
    <>
      <section className="mx-auto px-6 py-24 md:px-8 lg:pt-32 lg:px-20">
        <div className="flex flex-col items-start max-w-4xl mx-auto">
          {/* Greeting */}
          <p className="text-[#F0FEFF] text-lg md:text-xl font-medium mb-4">
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

          {/* Main Description */}
          <div className="text-[#F0FEFF] font-medium space-y-6 max-w-3xl">
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

          {/* Social Links */}
          <div className="mt-12 md:mt-16 flex items-center gap-6">
            <motion.a
              href="https://twitter.com/iyanu_codes"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="transition-all duration-300"
            >
              <TwIcon
                fill="#6f1cd7"
                className="w-8 h-8 rounded-full border-2 border-[#6f1cd7] p-1.5 hover:bg-white transition-all duration-300"
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
                fill="#6f1cd7"
                className="w-8 h-8 rounded-full border-2 border-[#6f1cd7] p-1.5 hover:bg-white transition-all duration-300"
              />
            </motion.a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
