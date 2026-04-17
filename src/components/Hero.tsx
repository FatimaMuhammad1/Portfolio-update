import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { useEffect, useRef } from "react";

import heroPort from "@/assets/hero-port1.jpg";
import { HeroDeliveryDashboard } from "@/components/HeroDeliveryDashboard";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  title: string;
  aside?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}

function GlassCard({ title, aside, className, children }: GlassCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[18px] border border-white/16 bg-[linear-gradient(180deg,rgba(128,150,186,0.3),rgba(88,105,135,0.18))] px-5 py-4 shadow-[0_22px_40px_-30px_rgba(5,10,22,0.95)] backdrop-blur-[14px]",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.09),transparent_28%),radial-gradient(circle_at_78%_10%,rgba(255,219,192,0.12),transparent_24%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/28 to-transparent" />

      <div className="relative z-10">
        <div className="flex items-start justify-between gap-3">
          <p className="text-[clamp(0.98rem,1.05vw,1.15rem)] font-medium tracking-[-0.02em] text-white/94">
            {title}
          </p>
          {aside}
        </div>
        {children}
      </div>
    </div>
  );
}

function GridOverlay({ className }: { className?: string }) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0 opacity-35", className)}
      style={{
        backgroundImage:
          "linear-gradient(rgba(219,231,245,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(219,231,245,0.08) 1px, transparent 1px)",
        backgroundSize: "100% 22px, 28px 100%",
      }}
    />
  );
}

function FreightCostsCard() {
  const points: Array<[number, number]> = [
    [14, 76],
    [56, 72],
    [98, 67],
    [140, 63],
    [182, 70],
    [224, 64],
    [266, 58],
    [308, 52],
  ];

  return (
    <GlassCard
      title="Freight Costs"
      aside={
        <div className="flex items-center gap-1 text-white">
          <ArrowDownRight className="h-5 w-5 text-white/82" strokeWidth={2} />
          <span className="text-[clamp(1.85rem,2.15vw,2.6rem)] font-semibold tracking-[-0.05em]">-8.6%</span>
        </div>
      }
      className="min-h-[176px]"
    >
      <div className="relative mt-4 h-[96px] overflow-hidden rounded-[14px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))] px-3 pb-2 pt-3">
        <GridOverlay />

        <svg className="relative z-10 h-[74px] w-full" viewBox="0 0 320 74" preserveAspectRatio="none">
          <path d="M12 66.5H310" stroke="rgba(255,255,255,0.15)" strokeWidth="1.1" />
          <path d="M12.5 8V67" stroke="rgba(255,255,255,0.12)" strokeWidth="1.1" />
          <polyline
            points={points.map(([x, y]) => `${x},${y}`).join(" ")}
            fill="none"
            stroke="rgba(247,250,252,0.98)"
            strokeWidth="2.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {points.map(([x, y], index) => (
            <circle key={`freight-point-${index}`} cx={x} cy={y} r="2.8" fill="rgba(247,250,252,0.96)" />
          ))}
        </svg>

        <div className="absolute inset-x-3 bottom-1 flex justify-between text-[9px] font-medium tracking-[-0.01em] text-white/48">
          {["JAN (23)", "FEB (23)", "MAR (23)", "APR (23)", "MAY (23)"].map((label) => (
            <span key={label}>{label}</span>
          ))}
        </div>
      </div>
    </GlassCard>
  );
}

function OnTimeDeliveryCard() {
  return (
    <GlassCard title="On-Time Delivery" className="min-h-[154px]">
      <div className="mt-4 grid items-center gap-4 md:grid-cols-[1.2fr_132px]">
        <div className="relative overflow-hidden rounded-[14px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))] px-3 py-3">
          <GridOverlay className="opacity-20" />

          <svg viewBox="0 0 360 82" className="relative z-10 h-[76px] w-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="heroMapFill" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(192,220,252,0.82)" />
                <stop offset="100%" stopColor="rgba(136,177,232,0.3)" />
              </linearGradient>
            </defs>

            <path
              d="M24 44c10-7 18-9 29-8 10 1 15 5 24 9 6 3 12 1 18-3 7-5 12-7 19-6 10 2 17 8 24 8 8 0 13-5 20-10 6-5 14-7 24-6 10 1 17 4 24 9 7 4 14 5 22 2 8-3 14-8 24-9 11-1 19 1 28 6 9 5 15 7 24 7 8 0 15-3 23-7 9-4 17-5 28-3 8 1 14 5 22 10v14H24Z"
              fill="url(#heroMapFill)"
              opacity="0.92"
            />
            <path
              d="M52 24c10-7 21-7 33 0 8 4 13 5 21 3 7-2 12-6 18-9 10-6 18-7 29-4 11 3 17 8 26 13 7 4 14 4 22 0 8-4 15-10 27-13 11-3 19-2 29 3 8 4 14 8 22 9 8 1 13-1 19-5 10-6 18-8 29-6 10 2 17 7 25 13v12c-8-6-17-8-27-8-9 0-15 3-23 6-8 4-15 4-23 0-8-4-15-8-24-10-10-3-17-1-26 3-8 4-13 8-20 12-9 5-17 5-26 0-8-4-14-9-23-12-10-3-18-2-27 2-8 3-13 7-20 10-9 4-17 3-26-1-8-4-14-8-23-10-11-3-20-2-28 5Z"
              fill="rgba(229,242,255,0.38)"
            />
          </svg>
        </div>

        <div className="relative mx-auto grid h-[118px] w-[118px] place-items-center">
          <div className="absolute inset-[-6px] rounded-full bg-[radial-gradient(circle,rgba(255,201,126,0.45),rgba(255,201,126,0.12)_45%,transparent_72%)] blur-[12px]" />
          <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 112 112" aria-hidden>
            <defs>
              <linearGradient id="heroOnTimeRing" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#fffdfa" />
                <stop offset="58%" stopColor="#ffd18e" />
                <stop offset="100%" stopColor="#ff8f23" />
              </linearGradient>
            </defs>

            <circle cx="56" cy="56" r="43" fill="none" stroke="rgba(255,255,255,0.16)" strokeWidth="7" />
            <circle
              cx="56"
              cy="56"
              r="43"
              fill="none"
              stroke="url(#heroOnTimeRing)"
              strokeWidth="7"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 43 * 0.98} ${2 * Math.PI * 43 * 0.02}`}
            />
          </svg>

          <div className="relative z-10 flex flex-col items-center leading-none">
            <span className="text-[2.8rem] font-semibold tracking-[-0.06em] text-white">98%</span>
          </div>
        </div>
      </div>
    </GlassCard>
  );
}

function GlobalSuppliersCard() {
  const bars = [20, 24, 20, 34, 46, 48, 44, 52, 48, 58];
  const points: Array<[number, number]> = [
    [16, 56],
    [52, 53],
    [88, 57],
    [124, 51],
    [160, 55],
    [196, 49],
    [232, 53],
    [268, 47],
    [304, 51],
    [340, 46],
  ];

  return (
    <GlassCard
      title="Global Suppliers"
      aside={
        <div className="flex items-center gap-1 text-white">
          <ArrowUpRight className="h-5 w-5 text-white/82" strokeWidth={2} />
          <span className="text-[clamp(1.85rem,2.15vw,2.6rem)] font-semibold tracking-[-0.05em]">+22%</span>
        </div>
      }
      className="min-h-[154px]"
    >
      <div className="relative mt-4 h-[94px] overflow-hidden rounded-[14px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))] px-3 pb-2 pt-3">
        <GridOverlay />

        <div className="absolute inset-x-3 bottom-4 flex items-end gap-[5px]">
          {bars.map((height, index) => (
            <div
              key={`suppliers-bar-${index}`}
              className="flex-1 rounded-t-[3px] bg-[linear-gradient(180deg,rgba(226,237,255,0.9),rgba(165,198,237,0.42))]"
              style={{ height: `${height}px`, opacity: 0.52 + index * 0.035 }}
            />
          ))}
        </div>

        <svg className="absolute inset-x-3 bottom-2 h-[52px] w-[calc(100%-1.5rem)]" viewBox="0 0 356 52" preserveAspectRatio="none">
          <polyline
            points={points.map(([x, y]) => `${x},${y}`).join(" ")}
            fill="none"
            stroke="rgba(247,250,252,0.96)"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {points.map(([x, y], index) => (
            <circle key={`suppliers-point-${index}`} cx={x} cy={y} r="2.8" fill="rgba(247,250,252,0.96)" />
          ))}
        </svg>
      </div>

      <div className="mt-3 flex items-end justify-between">
        <span className="text-[clamp(2rem,2.35vw,2.75rem)] font-semibold tracking-[-0.05em] text-white">1,500+</span>
        <span className="text-[0.95rem] font-medium text-white/62">Suppliers</span>
      </div>
    </GlassCard>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 90, damping: 18, mass: 0.4 });
  const sy = useSpring(my, { stiffness: 90, damping: 18, mass: 0.4 });
  const cardX = useTransform(sx, [-0.5, 0.5], ["-10px", "10px"]);
  const cardY = useTransform(sy, [-0.5, 0.5], ["-8px", "8px"]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mx.set(x);
      my.set(y);
    };

    el.addEventListener("pointermove", handleMove, { passive: true });
    return () => el.removeEventListener("pointermove", handleMove);
  }, [mx, my]);

  return (
    <section ref={containerRef} className="relative isolate min-h-[100svh] overflow-hidden bg-slate-950">
      <motion.div className="absolute inset-0" style={{ y: imageY }}>
        <img
          src={heroPort}
          alt="Twilight shipping port with cranes and containers"
          className="h-full w-full object-cover object-center"
          width={1920}
          height={1080}
        />
      </motion.div>

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(10,19,34,0.18),rgba(18,28,45,0.32)_18%,rgba(22,32,49,0.46)_50%,rgba(8,12,20,0.78)),radial-gradient(circle_at_50%_18%,rgba(255,221,188,0.16),transparent_24%),radial-gradient(circle_at_10%_16%,rgba(133,167,223,0.14),transparent_26%)]" />
      <div className="pointer-events-none absolute inset-0 noise opacity-30" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1480px] flex-col px-6 pb-10 pt-[108px] sm:px-8 lg:px-10 xl:px-14">
        <div className="relative flex-1">
          <div className="mx-auto grid w-full max-w-[1260px] items-end gap-7 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)] lg:gap-10">
            <motion.div
              className="relative overflow-hidden rounded-[22px] border border-white/16 bg-[linear-gradient(180deg,rgba(66,92,126,0.42),rgba(40,56,78,0.34)_54%,rgba(18,28,45,0.44))] px-6 pb-6 pt-6 shadow-[0_34px_70px_-54px_rgba(0,0,0,0.95)] backdrop-blur-[18px] sm:px-7 sm:pb-7"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(170,207,255,0.20),transparent_38%),radial-gradient(circle_at_82%_10%,rgba(255,220,185,0.16),transparent_36%),linear-gradient(180deg,rgba(255,255,255,0.06),transparent_38%)]" />
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              <div className="relative z-10">
                <p className="text-[0.9rem] font-medium tracking-[-0.02em] text-white/78">
                  Driving supply chain performance through data analytics.
                </p>

                <h1 className="mt-5 font-display text-[clamp(3.1rem,5.4vw,5.25rem)] font-semibold leading-[0.92] tracking-[-0.05em] text-white/96">
                  Mohammad
                  <br />
                  <span className="font-signature text-[0.82em] font-normal tracking-[0.01em] text-white/82">
                    A. Wasaya
                  </span>
                </h1>

                <p className="mt-4 max-w-[44ch] text-[clamp(1.03rem,1.3vw,1.35rem)] font-medium leading-relaxed tracking-[-0.02em] text-white/72">
                  Driving supply chain performance through data analytics, automation, and operational excellence.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a
                    href="/work"
                    className="inline-flex items-center justify-center rounded-full border border-white/18 bg-white/10 px-5 py-2.5 text-[0.95rem] font-semibold tracking-[-0.01em] text-white/92 shadow-[0_10px_20px_-18px_rgba(0,0,0,0.7)] transition hover:bg-white/14"
                  >
                    Learn more
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full border border-white/18 bg-white/6 px-5 py-2.5 text-[0.95rem] font-semibold tracking-[-0.01em] text-white/86 transition hover:bg-white/10"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              style={{ x: cardX, y: cardY }}
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.95, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="grid gap-5">
                <FreightCostsCard />
                <OnTimeDeliveryCard />
                <GlobalSuppliersCard />
              </div>
            </motion.div>
          </div>

          <motion.div
            className="mx-auto mt-8 w-full max-w-[1260px]"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
          >
            <HeroDeliveryDashboard className="w-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
