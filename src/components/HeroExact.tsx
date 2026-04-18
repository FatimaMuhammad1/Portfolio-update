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
    <section className="hero relative h-[clamp(450px,85vh,900px)] w-full overflow-hidden sm:h-[clamp(550px,90vh,900px)] md:h-[clamp(650px,100vh,900px)]">
      <img
        src={heroPort1}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-[70%_35%] sm:object-[center_35%]"
        style={{
          filter: "saturate(0.92) contrast(0.98) brightness(1.08)",
        }}
      />

      {showName && (
        <div className="fixed left-4 top-4 z-50 hidden transition-all duration-300 sm:left-6 sm:top-6 sm:block">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-[-0.04em] text-white drop-shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
            Mohammad
          </h1>
        </div>
      )}

      <div className="absolute left-4 top-[36%] z-20 bg-[linear-gradient(90deg,rgba(27,35,49,0.42)_0%,rgba(27,35,49,0.18)_68%,rgba(27,35,49,0)_100%)] px-2 py-1 sm:hidden">
        <h1 className='text-[2.85rem] font-["Times_New_Roman","Georgia","Times",serif] italic leading-[0.86] tracking-[-0.04em] text-white drop-shadow-[0_16px_36px_rgba(0,0,0,0.34)]'>
          Mohammad
          <span className="block text-[2.45rem]">A Wasaya</span>
        </h1>
      </div>
      <div className="absolute inset-y-0 left-0 z-20 w-4 bg-[#4c5669] sm:hidden" />

      <div className="absolute inset-0 bg-transparent transition-colors duration-300 dark:bg-black/50" />
    </section>
  );
}
