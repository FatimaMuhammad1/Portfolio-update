export function GlobalSuppliersCard() {
  const bars = [30, 44, 40, 58, 54, 68];
  const years = ["2020", "2021", "2022", "2023", "2024", "2025"];

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/30 bg-white/20 p-4 shadow-[0_8px_32px_-8px_rgba(15,23,42,0.2)] backdrop-blur-md dark:border-white/10 dark:bg-white/5 dark:shadow-[0_8px_32px_-8px_rgba(0,0,0,0.4)]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-300/70 to-transparent dark:via-sky-400/40" />

      <div className="flex items-end justify-between gap-3">
        <p className="text-[clamp(11px,0.82vw,12px)] font-semibold uppercase tracking-[0.15em] text-slate-500 dark:text-slate-400">
          Global Suppliers
        </p>
        <span className="text-[clamp(12px,0.9vw,14px)] font-semibold tracking-tight text-slate-500 dark:text-slate-400">-18%</span>
      </div>

      <div className="mt-1.5 flex items-baseline justify-between gap-3">
        <span className="text-[clamp(1.7rem,1.55vw,1.95rem)] font-semibold leading-none tracking-tight text-slate-900 dark:text-slate-100">
          1,500
        </span>
      </div>

      <div className="mt-2.5 grid grid-cols-6 items-end gap-1.5">
        {bars.map((h, idx) => (
          <div key={years[idx]} className="flex flex-col items-center gap-1.5">
            <div className="w-full max-w-[18px] rounded-sm bg-sky-500/85" style={{ height: `${h}px` }} />
            <span className="text-[10px] font-medium text-slate-400 dark:text-slate-500">{years[idx]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
