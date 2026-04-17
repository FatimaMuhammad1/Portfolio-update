interface ProgressRingProps {
  value: number;
  year: string;
}

function ProgressRing({ value, year }: ProgressRingProps) {
  const radius = 29;
  const circumference = 2 * Math.PI * radius;
  const progress = (Math.max(0, Math.min(100, value)) / 100) * circumference;
  const dashOffset = circumference - progress;

  return (
    <div className="flex flex-col items-center gap-1.5">
      <div className="relative grid h-[76px] w-[76px] place-items-center">
        <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 82 82" aria-hidden>
          <circle cx="41" cy="41" r={radius} fill="none" stroke="rgba(186,230,253,0.42)" strokeWidth="7" />
          <circle
            cx="41"
            cy="41"
            r={radius}
            fill="none"
            stroke="rgba(14,165,233,0.94)"
            strokeWidth="7"
            strokeLinecap="round"
            strokeDasharray={`${circumference}`}
            strokeDashoffset={dashOffset}
          />
        </svg>
        <span className="relative text-[clamp(16px,1.1vw,20px)] font-semibold leading-none tracking-tight text-slate-900 dark:text-slate-100">{value}%</span>
      </div>
      <span className="text-[clamp(12px,0.9vw,15px)] font-semibold tracking-[0.01em] text-slate-600 dark:text-slate-400">{year}</span>
    </div>
  );
}

export function OnTimeDeliveryCard() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/30 bg-white/20 p-4 shadow-[0_8px_32px_-8px_rgba(15,23,42,0.2)] backdrop-blur-md dark:border-white/10 dark:bg-white/5 dark:shadow-[0_8px_32px_-8px_rgba(0,0,0,0.4)]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-300/70 to-transparent dark:via-sky-400/40" />

      <p className="text-[clamp(11px,0.82vw,12px)] font-semibold uppercase tracking-[0.15em] text-slate-500 dark:text-slate-400">
        On-Time Delivery
      </p>

      <div className="mt-3 grid grid-cols-2 gap-4">
        <ProgressRing value={88} year="2023" />
        <ProgressRing value={98} year="2024" />
      </div>
    </div>
  );
}
