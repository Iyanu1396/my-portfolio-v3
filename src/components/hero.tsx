"use client";
import { motion } from "framer-motion";
import { InIcon, TwIcon } from "./svgs";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section className="mx-auto px-6 pt-24 md:px-8 lg:pt-32 lg:px-20">
        <div className="flex flex-col items-start md:flex-row md:items-center md:gap-16 lg:justify-between">
          <div className="max-w-xl">
            <h1 className="gradientText text-4xl md:text-5xl lg:text-6xl font-bold">
              Full Stack <span className="block md:inline">Software Dev</span>
              <span className="text-purple-600">.</span>
            </h1>
            
            <p className="gradientText font-medium text-base md:text-lg text-opacity-80 mt-6 max-w-lg">
              Crafting elegant digital experiences where innovation meets functionality.
            </p>
            
            <div className="text-[#F0FEFF] font-medium mt-10 flex flex-col gap-6 md:gap-8 lg:flex-row">
              <p className="max-w-xs lg:max-w-sm">
                I&apos;m Iyanuoluwa Atijosan, specializing in web and mobile development 
                with expertise in modern frameworks and cloud architecture.
              </p>
              <p className="max-w-xs lg:max-w-sm">
                Professional developer with a talent for creating robust, scalable solutions.
          
              </p>
            </div>
            
            <div className="mt-10 md:mt-12 flex items-center gap-6">
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
          
          <div className="mt-12 md:mt-0">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative w-max"
            >
              <Image
                src="/images/hero.jpg"
                alt="Iyanuoluwa Atijosan - Full Stack Developer"
                width={400}
                height={400}
                className="absolute w-full h-full bottom-3 right-4 md:bottom-5 md:right-6 lg:bottom-6 lg:right-6 z-10"
                draggable={false}
                priority
              />
              <motion.div
                animate={{ 
                  boxShadow: ["0px 0px 0px rgba(111, 28, 215, 0.3)", "0px 0px 20px rgba(111, 28, 215, 0.5)", "0px 0px 0px rgba(111, 28, 215, 0.3)"]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="shrink-0 w-[280px] h-[280px] md:w-[320px] md:h-[320px] lg:w-[400px] lg:h-[400px] border-3 border-[#6f1cd7]"
              ></motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;