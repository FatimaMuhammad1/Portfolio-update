import { useEffect, useState } from "react";
import heroPort1 from "@/assets/hero-port1.jpg";

export default function HeroExact() {
  const [showName, setShowName] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowName(window.scrollY > 120);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="hero relative w-full overflow-hidden h-[clamp(450px,85vh,900px)] sm:h-[clamp(550px,90vh,900px)] md:h-[clamp(650px,100vh,900px)]"
      style={{
        backgroundImage: `url(${heroPort1})`,
        backgroundPosition: "center 35%",
        backgroundSize: "cover",
        filter: "saturate(0.92) contrast(0.98) brightness(1.08)",
      }}
    >
      {showName && (
        <div className="fixed left-4 top-4 sm:left-6 sm:top-6 z-50 transition-all duration-300">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-[-0.04em] text-white drop-shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
            Mohammad
          </h1>
        </div>
      )}

      <div className="absolute inset-0 bg-transparent transition-colors duration-300 dark:bg-black/50" />
    </section>
  );
}
