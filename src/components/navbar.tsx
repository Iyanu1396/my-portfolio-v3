"use client";
import clsx from "clsx";
import { GhIcon } from "./svgs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@/contexts/ThemeContext";
import { useEffect, useState } from "react";

// Moon and Sun icons as SVG components
interface IconProps {
  className?: string;
}
const MoonIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
  </svg>
);

const SunIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06L5.106 17.834a.75.75 0 001.06 1.06l1.592-1.591zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.592a.75.75 0 00-1.061 1.061l1.59 1.591z" />
  </svg>
);

const NavbarContent = () => {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <main className="">
        <header
          className={clsx(
            "fixed z-40 top-0 bg-[var(--bg-primary)]/90 backdrop-blur-sm pb-3 w-full pt-[20px] px-[32px] py-[30px] lg:px-[80px] border-b border-[var(--border-primary)]"
          )}
        >
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center justify-between">
              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className="relative active:scale-[0.86] transition-all duration-300 hover:bg-[var(--bg-secondary)] p-2 rounded-full"
              >
                {theme === "dark" ? (
                  <MoonIcon className="w-[24px] h-[24px] md:w-[30px] md:h-[30px] text-[var(--text-primary)] transition-all duration-300" />
                ) : (
                  <SunIcon className="w-[24px] h-[24px] md:w-[30px] md:h-[30px] text-yellow-500 transition-all duration-300" />
                )}
              </button>

              {/* Right side buttons */}
              <div className="flex items-center gap-[16px] md:gap-[24px]">
                {/* GitHub Link */}
                <div className="text-[var(--text-muted)] group group-hover:text-[var(--text-primary)] transition-all duration-300">
                  <Link
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/Iyanu1396"
                    className="group-hover:text-[var(--text-primary)] transition-colors duration-300"
                  >
                    <span className="flex items-center gap-[8px] md:gap-[10px]">
                      <GhIcon
                        fill="var(--text-muted)"
                        className="opacity-60 w-[26px] h-[26px] md:w-[32px] md:h-[32px] transition-opacity duration-300 group-hover:opacity-100"
                      />
                      <p className="font-clash text-[15px] md:text-[18px] font-medium group-hover:text-[var(--text-primary)] transition-colors duration-300">
                        github
                      </p>
                    </span>
                  </Link>
                </div>

                {/* Resume Button */}
                <a
                  href="https://standardresume.co/r/bimfuqcRzU5D8A4DYzHzG"
                  target="_blank"
                  rel="noreferrer"
                  className="group"
                >
                  <button className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-all duration-300 font-clash text-[15px] md:text-[18px] font-medium px-4 py-2 border border-[var(--border-secondary)] hover:border-[var(--border-accent)] rounded-lg hover:bg-[var(--bg-secondary)] active:scale-[0.95]">
                    View Resume
                  </button>
                </a>
              </div>
            </nav>
          </div>
        </header>
      </main>
    </>
  );
};

const Navbar = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return a placeholder navbar during SSR
    return (
      <>
        <main className="">
          <header
            className={clsx(
              "fixed z-40 top-0 bg-[var(--bg-primary)]/90 backdrop-blur-sm pb-3 w-full pt-[20px] px-[32px] py-[30px] lg:px-[80px] border-b border-[var(--border-primary)]"
            )}
          >
            <div className="max-w-4xl mx-auto">
              <nav className="flex items-center justify-between">
                {/* Theme Toggle Button Placeholder */}
                <button className="relative active:scale-[0.86] transition-all duration-300 hover:bg-[var(--bg-secondary)] p-2 rounded-full">
                  <SunIcon className="w-[24px] h-[24px] md:w-[30px] md:h-[30px] text-yellow-500 transition-all duration-300" />
                </button>

                {/* Right side buttons */}
                <div className="flex items-center gap-[16px] md:gap-[24px]">
                  {/* GitHub Link */}
                  <div className="text-[var(--text-muted)] group group-hover:text-[var(--text-primary)] transition-all duration-300">
                    <Link
                      target="_blank"
                      rel="noreferrer"
                      href="https://github.com/Iyanu1396"
                      className="group-hover:text-[var(--text-primary)] transition-colors duration-300"
                    >
                      <span className="flex items-center gap-[8px] md:gap-[10px]">
                        <GhIcon
                          fill="var(--text-muted)"
                          className="opacity-60 w-[26px] h-[26px] md:w-[32px] md:h-[32px] transition-opacity duration-300 group-hover:opacity-100"
                        />
                        <p className="font-clash text-[15px] md:text-[18px] font-medium group-hover:text-[var(--text-primary)] transition-colors duration-300">
                          github
                        </p>
                      </span>
                    </Link>
                  </div>

                  {/* Resume Button */}
                  <a
                    href="https://standardresume.co/r/bimfuqcRzU5D8A4DYzHzG"
                    target="_blank"
                    rel="noreferrer"
                    className="group"
                  >
                    <button className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-all duration-300 font-clash text-[15px] md:text-[18px] font-medium px-4 py-2 border border-[var(--border-secondary)] hover:border-[var(--border-accent)] rounded-lg hover:bg-[var(--bg-secondary)] active:scale-[0.95]">
                      View Resume
                    </button>
                  </a>
                </div>
              </nav>
            </div>
          </header>
        </main>
      </>
    );
  }

  return <NavbarContent />;
};

export default Navbar;
