import { useEffect, useLayoutEffect, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";

import { ThemeToggle } from "@/components/ThemeToggle";
import { useResolvedDark } from "@/hooks/useResolvedDark";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/work", label: "Experience" },
  { href: "/services", label: "Expertise" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [scrollY, setScrollY] = useState(() =>
    typeof window !== "undefined" ? window.scrollY : 0,
  );

  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const isDark = useResolvedDark();
  const homeHeroMode = isHome && scrollY < 120;

  useLayoutEffect(() => {
    setScrollY(window.scrollY);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const homeTextClass = isDark ? "text-white" : "text-slate-900/88";
  const homeMutedTextClass = isDark
    ? "text-white hover:text-white"
    : "text-slate-900/72 hover:text-slate-950";
  const showBrand = !isHome || scrollY > 120;

  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        homeHeroMode
          ? "bg-[linear-gradient(180deg,rgba(255,255,255,0.16),rgba(255,255,255,0.04))] dark:bg-[linear-gradient(180deg,rgba(15,23,42,0.42),rgba(15,23,42,0.12))]"
          : "bg-background/82 shadow-[0_16px_36px_-24px_rgba(15,23,42,0.45)]",
      )}
    >
      <div className="mx-auto flex h-[78px] w-full max-w-[1540px] items-center justify-between px-6 sm:px-8 lg:px-10 xl:px-14">
        <a
          href="/"
          className={cn(
            "shrink-0 transition-opacity duration-300",
            !showBrand && "opacity-0 pointer-events-none",
          )}
        >
          <span
            className={cn(
              "font-display text-[1.9rem] font-semibold tracking-[-0.035em] transition-colors duration-300",
              homeHeroMode ? homeTextClass : "text-foreground",
            )}
          >
            Mohammad
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex lg:gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "group relative text-[0.98rem] font-medium tracking-[-0.01em] transition-colors duration-300",
                homeHeroMode ? homeMutedTextClass : "text-muted-foreground hover:text-foreground",
              )}
            >
              {link.label}
              <span
                className={cn(
                  "absolute -bottom-[0.45rem] left-0 h-px w-0 transition-all duration-300 group-hover:w-full",
                  homeHeroMode
                    ? isDark
                      ? "bg-white/80"
                      : "bg-slate-900/55"
                    : "bg-accent",
                )}
              />
            </a>
          ))}

          <ThemeToggle
            className={cn(
              homeHeroMode
                ? isDark
                  ? "border-white/14 bg-white/6 text-white hover:bg-white/10 hover:text-white"
                  : "border-slate-900/12 bg-white/28 text-slate-900 hover:bg-white/40 hover:text-slate-950"
                : "border-border/50 bg-background/55 text-foreground hover:bg-muted/75",
            )}
          />
        </div>

        <button
          type="button"
          className={cn(
            "relative z-50 -mr-2 rounded-full p-2 md:hidden",
            homeHeroMode ? homeTextClass : "text-foreground",
          )}
          onClick={() => setOpen((current) => !current)}
          aria-label="Toggle menu"
        >
          <div className="flex h-5 w-6 flex-col justify-between">
            <span
              className={cn(
                "block h-[2px] w-full origin-left rounded-full transition-all duration-300",
                homeHeroMode
                  ? isDark
                    ? "bg-white"
                    : "bg-slate-900"
                  : "bg-foreground",
              )}
              style={open ? { transform: "translateY(9px) rotate(45deg)" } : undefined}
            />
            <span
              className={cn(
                "block h-[2px] w-full rounded-full transition-all duration-300",
                homeHeroMode
                  ? isDark
                    ? "bg-white"
                    : "bg-slate-900"
                  : "bg-foreground",
              )}
              style={open ? { opacity: 0 } : undefined}
            />
            <span
              className={cn(
                "block h-[2px] w-full origin-left rounded-full transition-all duration-300",
                homeHeroMode
                  ? isDark
                    ? "bg-white"
                    : "bg-slate-900"
                  : "bg-foreground",
              )}
              style={open ? { transform: "translateY(-9px) rotate(-45deg)" } : undefined}
            />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="border-t border-white/10 bg-slate-950/92 px-6 pb-8 pt-6">
              <div className="flex flex-col gap-5">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    className="font-display text-3xl font-semibold tracking-[-0.03em] text-white/92 transition-colors duration-300 hover:text-sky-300"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ delay: index * 0.06 }}
                  >
                    {link.label}
                  </motion.a>
                ))}

                <motion.div
                  className="pt-3"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.24 }}
                >
                  <ThemeToggle className="border-white/10 bg-white/6 text-white hover:bg-white/10 hover:text-white" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
