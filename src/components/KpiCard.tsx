import { cn } from "@/lib/utils";

interface KpiCardProps {
  label: string;
  value: string;
  badge: string;
  badgeDown?: boolean;
  sparkData?: number[];
  sparkLabels?: string[];
  className?: string;
}

export function KpiCard({
  label,
  value,
  badge,
  badgeDown = true,
  sparkData = [],
  sparkLabels = [],
  className,
}: KpiCardProps) {
  const min = Math.min(...sparkData);
  const max = Math.max(...sparkData);
  const range = max - min || 1;
  const W = 180;
  const H = 40;
  const pts = sparkData
    .map((d, i) => {
      const x = (i / (sparkData.length - 1)) * W;
      const y = H - ((d - min) / range) * (H - 4) - 2;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/30 bg-white/20 p-4 shadow-[0_8px_32px_-8px_rgba(15,23,42,0.2)] backdrop-blur-md dark:border-white/10 dark:bg-white/5 dark:shadow-[0_8px_32px_-8px_rgba(0,0,0,0.4)]",
        className,
      )}
    >
      {/* top shimmer line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-300/70 to-transparent dark:via-sky-400/40" />

      <p className="whitespace-nowrap text-[clamp(11px,0.82vw,12px)] font-semibold uppercase tracking-[0.15em] text-slate-400 dark:text-slate-400">
        {label}
      </p>

      <div className="mt-1.5 flex items-center gap-2">
        <span className="text-[clamp(1.85rem,1.8vw,2.1rem)] font-bold leading-none text-gray-900 dark:text-white">{value}</span>
        <span
          className={cn(
            "inline-flex shrink-0 items-center rounded-md border px-2 py-0.5 text-[clamp(11px,0.78vw,13px)] font-semibold",
            badgeDown
              ? "border-sky-300/50 bg-white/30 text-sky-600 backdrop-blur-sm dark:border-sky-400/30 dark:bg-white/10 dark:text-sky-300"
              : "border-emerald-300/50 bg-white/30 text-emerald-600 backdrop-blur-sm dark:border-emerald-400/30 dark:bg-white/10 dark:text-emerald-300",
          )}
        >
          {badge}
        </span>
      </div>

      {sparkData.length > 1 && (
        <div className="mt-3">
          <svg
            viewBox={`0 0 ${W} ${H}`}
            className="w-full"
            preserveAspectRatio="none"
            style={{ height: 40 }}
          >
            <polyline
              points={pts}
              fill="none"
              stroke="rgba(14,165,233,0.9)"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* dot at each data point */}
            {sparkData.map((d, i) => {
              const x = (i / (sparkData.length - 1)) * W;
              const y = H - ((d - min) / range) * (H - 4) - 2;
              return (
                <circle
                  key={i}
                  cx={x}
                  cy={y}
                  r="2.5"
                  fill="white"
                  stroke="rgba(14,165,233,0.95)"
                  strokeWidth="1.8"
                />
              );
            })}
          </svg>
          {sparkLabels.length > 0 && (
            <div className="mt-1 flex justify-between">
              {sparkLabels.map((l) => (
                <span key={l} className="text-[10px] font-semibold tracking-[0.02em] text-slate-400 dark:text-slate-500">
                  {l}
                </span>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
