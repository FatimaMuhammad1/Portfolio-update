import { useId } from "react";

import { cn } from "@/lib/utils";

interface HeroDeliveryDashboardProps {
  className?: string;
}

interface ChartShellProps {
  className?: string;
  children: React.ReactNode;
}

function ChartShell({ className, children }: ChartShellProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[8px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015))] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]",
        className,
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(196,219,239,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(196,219,239,0.08) 1px, transparent 1px)",
          backgroundSize: "100% 9px, 12px 100%",
        }}
      />
      {children}
    </div>
  );
}

function LeftTrendChart() {
  const uniqueId = useId().replace(/:/g, "");
  const barGradientId = `delivery-left-bars-${uniqueId}`;
  const bars = [9, 15, 20, 14, 18, 19];
  const line = [10, 16, 21, 17, 15, 19];
  const max = Math.max(...bars, ...line, 1);
  const baseline = 44;
  const chartHeight = 22;
  const barWidth = 8;
  const gap = 5;

  const linePoints = line
    .map((value, index) => {
      const x = 24 + index * (barWidth + gap) + barWidth / 2;
      const y = baseline - (value / max) * chartHeight;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <ChartShell className="h-[48px] w-full">
      <svg viewBox="0 0 96 48" className="relative z-10 h-full w-full">
        <defs>
          <linearGradient id={barGradientId} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(214,240,255,0.88)" />
            <stop offset="65%" stopColor="rgba(155,203,234,0.68)" />
            <stop offset="100%" stopColor="rgba(155,203,234,0.18)" />
          </linearGradient>
        </defs>

        {[10, 20, 30, 40].map((y) => (
          <path key={`h-${y}`} d={`M20 ${y}.5H92`} stroke="rgba(218,233,247,0.09)" strokeWidth="1" />
        ))}
        {[20, 32, 44, 56, 68, 80].map((x) => (
          <path key={`v-${x}`} d={`M${x}.5 6V44`} stroke="rgba(218,233,247,0.07)" strokeWidth="1" />
        ))}

        <path d="M20.5 6V44" stroke="rgba(231,240,249,0.18)" strokeWidth="1" />
        <path d="M20 44.5H92" stroke="rgba(231,240,249,0.18)" strokeWidth="1" />

        {[6, 16, 26, 36].map((y, index) => (
          <text
            key={`label-${y}`}
            x="2"
            y={y + 2}
            fill="rgba(205,224,240,0.34)"
            fontSize="4.2"
            fontWeight="500"
          >
            {["3", "2", "1", "0"][index]}
          </text>
        ))}

        {bars.map((value, index) => {
          const x = 24 + index * (barWidth + gap);
          const height = (value / max) * chartHeight;
          const y = baseline - height;

          return (
            <rect
              key={`bar-${index}`}
              x={x}
              y={y}
              width={barWidth}
              height={height}
              rx="1.6"
              fill={`url(#${barGradientId})`}
              opacity={0.45 + index * 0.08}
            />
          );
        })}

        <polyline
          points={linePoints}
          fill="none"
          stroke="rgba(241,245,249,0.72)"
          strokeWidth="1.35"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {line.map((value, index) => {
          const x = 24 + index * (barWidth + gap) + barWidth / 2;
          const y = baseline - (value / max) * chartHeight;

          return (
            <circle
              key={`dot-${index}`}
              cx={x}
              cy={y}
              r="1.4"
              fill="rgba(247,250,252,0.86)"
            />
          );
        })}
      </svg>
    </ChartShell>
  );
}

function RightBarsChart() {
  const uniqueId = useId().replace(/:/g, "");
  const barGradientId = `delivery-right-bars-${uniqueId}`;
  const bars = [7, 11, 10, 14, 13, 16];
  const max = Math.max(...bars, 1);

  return (
    <ChartShell className="h-[48px] w-full">
      <svg viewBox="0 0 96 48" className="relative z-10 h-full w-full">
        <defs>
          <linearGradient id={barGradientId} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(223,246,255,0.94)" />
            <stop offset="65%" stopColor="rgba(164,215,244,0.72)" />
            <stop offset="100%" stopColor="rgba(164,215,244,0.16)" />
          </linearGradient>
        </defs>

        {[10, 20, 30, 40].map((y) => (
          <path key={`h-${y}`} d={`M4 ${y}.5H92`} stroke="rgba(218,233,247,0.09)" strokeWidth="1" />
        ))}
        {[12, 24, 36, 48, 60, 72, 84].map((x) => (
          <path key={`v-${x}`} d={`M${x}.5 6V44`} stroke="rgba(218,233,247,0.07)" strokeWidth="1" />
        ))}

        <path d="M4 44.5H92" stroke="rgba(231,240,249,0.18)" strokeWidth="1" />

        {bars.map((value, index) => {
          const height = (value / max) * 26;
          const x = 10 + index * 12;
          const y = 42 - height;

          return (
            <rect
              key={`bar-${index}`}
              x={x}
              y={y}
              width="7.5"
              height={height}
              rx="1.6"
              fill={`url(#${barGradientId})`}
              opacity={0.45 + index * 0.09}
            />
          );
        })}
      </svg>
    </ChartShell>
  );
}

function SqlIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[12px] w-[12px]" aria-hidden>
      <ellipse cx="12" cy="5.5" rx="6.4" ry="2.4" fill="#2f82ef" />
      <path d="M5.6 5.5v4.8c0 1.3 2.9 2.4 6.4 2.4s6.4-1.1 6.4-2.4V5.5" fill="#2f82ef" opacity="0.92" />
      <path d="M5.6 10.3v4.9c0 1.3 2.9 2.4 6.4 2.4s6.4-1.1 6.4-2.4v-4.9" fill="#2f82ef" opacity="0.74" />
    </svg>
  );
}

function DatabricksIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[12px] w-[12px]" aria-hidden>
      <path d="m12 4 6.7 3.7L12 11.3 5.3 7.7 12 4Z" fill="#ef5a32" />
      <path d="m12 10.1 6.7 3.7L12 17.5l-6.7-3.7 6.7-3.7Z" fill="#ef5a32" opacity="0.86" />
    </svg>
  );
}

function PowerBiIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[12px] w-[12px]" aria-hidden>
      <rect x="4" y="12" width="4" height="7" rx="1.2" fill="#f2c84b" />
      <rect x="10" y="9" width="4" height="10" rx="1.2" fill="#f2c84b" opacity="0.88" />
      <rect x="16" y="6" width="4" height="13" rx="1.2" fill="#f2c84b" opacity="0.72" />
    </svg>
  );
}

function DeliveryGauge() {
  const uniqueId = useId().replace(/:/g, "");
  const ringGradientId = `delivery-ring-${uniqueId}`;
  const radius = 27;
  const circumference = 2 * Math.PI * radius;
  const progress = circumference * 0.96;
  const dashOffset = circumference - progress;

  return (
    <div className="relative grid h-[78px] w-[78px] shrink-0 place-items-center">
      <div className="absolute inset-[-6px] rounded-full bg-[radial-gradient(circle,rgba(255,232,203,0.54)_0%,rgba(255,232,203,0.18)_36%,transparent_70%)] blur-[12px]" />
      <div className="absolute inset-[11px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.14),rgba(255,255,255,0.01)_70%)]" />

      <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 72 72" aria-hidden>
        <defs>
          <linearGradient id={ringGradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#fffdf9" />
            <stop offset="55%" stopColor="#fee9cb" />
            <stop offset="100%" stopColor="#fff7ef" />
          </linearGradient>
        </defs>

        <circle
          cx="36"
          cy="36"
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.14)"
          strokeWidth="4.2"
        />
        <circle
          cx="36"
          cy="36"
          r={radius}
          fill="none"
          stroke={`url(#${ringGradientId})`}
          strokeWidth="4.2"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
        />
      </svg>

      <div className="relative z-10 flex flex-col items-center leading-none">
        <span className="text-[1.02rem] font-semibold tracking-[-0.05em] text-white">96%</span>
        <span className="mt-[3px] text-[0.33rem] font-semibold uppercase tracking-[0.24em] text-slate-100/62">
          On-Time
        </span>
      </div>
    </div>
  );
}

export function HeroDeliveryDashboard({ className }: HeroDeliveryDashboardProps) {
  return (
    <div
      className={cn(
        "relative aspect-[2.22/1] overflow-hidden rounded-[12px] border border-white/12 bg-[linear-gradient(180deg,rgba(61,83,110,0.58),rgba(35,53,77,0.82)_62%,rgba(25,38,58,0.92))] px-[14px] pb-[8px] pt-[8px] text-white shadow-[0_18px_42px_-24px_rgba(3,10,24,0.95),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-[14px]",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(244,220,188,0.18),transparent_18%),linear-gradient(180deg,rgba(255,255,255,0.05),transparent_38%)]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(193,216,236,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(193,216,236,0.08) 1px, transparent 1px)",
          backgroundSize: "100% 14px, 18px 100%",
        }}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

      <div className="relative z-10 flex h-full flex-col">
        <p className="text-[10.5px] font-medium tracking-[-0.02em] text-slate-100/78">
          On Time Delivery
        </p>

        <div className="mt-[8px] grid grid-cols-[1fr_auto_1fr] items-center gap-[10px]">
          <LeftTrendChart />
          <DeliveryGauge />
          <RightBarsChart />
        </div>

        <div className="mt-[8px] flex items-center gap-[12px] border-t border-white/[0.08] pt-[6px] text-[8.8px] font-medium tracking-[-0.01em] text-slate-100/86">
          <div className="flex items-center gap-[5px]">
            <SqlIcon />
            <span>SQL</span>
          </div>
          <div className="flex items-center gap-[5px]">
            <DatabricksIcon />
            <span>databricks</span>
          </div>
          <div className="flex items-center gap-[5px]">
            <PowerBiIcon />
            <span>Power BI</span>
          </div>
        </div>
      </div>
    </div>
  );
}
