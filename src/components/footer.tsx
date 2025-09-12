"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Copyright, InIcon, TwIcon } from "./svgs";

const Footer = () => {
  const [time, setTime] = useState<string>("");
  const [timezone, setTimezone] = useState<string>("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Detect user timezone once on mount
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      setTimezone(tz || "");
    } catch (_) {
      setTimezone("");
    }
    const updateTime = () => {
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour12: true,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };

    updateTime(); // Initial call
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  // Return empty time string during server-side rendering
  const displayTime = mounted ? time : "";

  return (
    <section className="mt-[60px] lg:mt-[150px]">
      {/* Demarcation line that touches both sides */}
      <div className="h-[2px] bg-[var(--border-primary)]"></div>

      <div className="mx-[30px] pb-[20px] lg:pb-[50px] lg:mx-[76px]">
        <div className="max-w-4xl mx-auto">
          <div className="mt-[63px] flex flex-col-reverse justify-between items-center gap-5 md:flex-row md:items-center">
            <div className="flex flex-col items-start">
              <div className="flex flex-row items-center gap-2">
                <span>
                  <Copyright className="size-[18px] md:size-[20px]" />
                </span>
                <p className="text-[var(--text-muted)] md:text-xl text-lg font-medium">
                  © IyanuOluwa{" "}
                  <span className="text-[var(--text-primary)] text-[14px] lg:text-base">
                    {new Date().getFullYear()}
                  </span>
                </p>
              </div>
              <p className="text-[var(--text-muted)] transition-all duration-300 text-sm lg:text-base mt-1">
                {displayTime}
                {mounted && timezone ? ` (${timezone})` : ""}
              </p>
            </div>
            <div className="flex justify-center items-center gap-[20px] md:justify-end">
              <motion.a
                href="https://twitter.com/iyanu_codes"
                target="_blank"
                rel="noreferrer"
                whileTap={{ scale: 1.1 }}
                whileHover={{ scale: 0.99 }}
                className="h-auto w-auto"
              >
                <TwIcon
                  fill="var(--text-muted)"
                  className={`w-[30px] h-[30px] rounded-full border-[var(--text-muted)] border-solid border-[2px] p-1 transition-all duration-500 hover:bg-[var(--bg-secondary)]`}
                />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/atijosan-iyanuoluwa-827049246/"
                target="_blank"
                rel="noreferrer"
                whileTap={{ scale: 1.1 }}
                whileHover={{ scale: 0.99 }}
                className="h-auto w-auto"
              >
                <InIcon
                  fill="var(--text-muted)"
                  className="w-[30px] h-[30px] rounded-full border-[var(--text-muted)] border-solid border-[2px] p-0.5 transition-all duration-700 hover:bg-[var(--bg-secondary)]"
                />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
