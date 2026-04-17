import { useEffect, useState } from "react";
import { useTheme } from "@/components/ThemeProvider";

/** True when `<html class="dark">` — stays in sync when toggling light/dark/system */
export function useResolvedDark() {
  const { theme } = useTheme();
  const [dark, setDark] = useState(() =>
    typeof document !== "undefined" ? document.documentElement.classList.contains("dark") : false,
  );

  useEffect(() => {
    const el = document.documentElement;
    const sync = () => setDark(el.classList.contains("dark"));
    sync();
    const mo = new MutationObserver(sync);
    mo.observe(el, { attributes: true, attributeFilter: ["class"] });
    return () => mo.disconnect();
  }, [theme]);

  return dark;
}
