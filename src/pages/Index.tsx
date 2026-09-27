import { motion } from "framer-motion";
import { FileCheck, Handshake, CircleDollarSign } from "lucide-react";
import Navigation from "@/components/Navigation";
import HeroExact from "@/components/HeroExact";
import Services from "@/components/Services";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import containers from "@/assets/containers.jpg";
import cargoWake from "@/assets/cargo-wake.jpg";
import globalRoutes from "@/assets/global-routes.jpg";

const Index = () => {
  return (
    <motion.div
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Navigation />
      <HeroExact />

      <section className="relative py-8 md:py-12 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={globalRoutes}
            alt="Global supply chain network"
            className="w-full h-full object-cover opacity-20 dark:opacity-30"
            loading="lazy"
            width={1920}
            height={800}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/65 via-background/85 to-background" />
        </div>
        <div className="container mx-auto px-4 md:px-8 lg:px-10 xl:px-12 relative z-10">
          <div className="max-w-[1180px] mx-auto rounded-[1.5rem] border border-white/65 bg-white/75 dark:border-white/10 dark:bg-card/70 p-2 md:p-3 backdrop-blur-xl shadow-[0_20px_60px_-30px_rgba(15,23,42,0.25)]">
            <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-6 lg:gap-7 items-stretch">

              <div className="relative rounded-[1.25rem] overflow-hidden min-h-[300px] md:min-h-[420px] shadow-[0_18px_35px_-18px_rgba(15,23,42,0.18)]">
                <img
                  src={containers}
                  alt="Aerial view of shipping port"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/10 to-transparent" />
                <div className="absolute left-4 right-4 bottom-4 md:left-6 md:right-6 md:bottom-6">
                  <div className="rounded-xl border border-white/20 bg-slate-950/35 backdrop-blur-sm p-4 md:p-5">
                    <p className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] font-semibold text-sky-400 mb-3">
                      Port operations
                    </p>
                    <h2 className="font-display text-[24px] md:text-[32px] lg:text-[36px] font-semibold leading-[1.1] text-white">
                      Port visibility that keeps cargo moving.
                    </h2>
                  </div>
                </div>
              </div>

              <div className="rounded-[1.25rem] border border-border/60 bg-card/90 p-4 md:p-5 shadow-xl shadow-slate-900/10 backdrop-blur-lg">
                <p className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] font-semibold text-sky-500 mb-4">
                  Customs clearance
                </p>
                <h3 className="font-display text-[1.9rem] md:text-[2.5rem] font-semibold leading-[1.05] text-foreground mb-4 tracking-[-0.03em]">
                  Trade compliance built for smooth clearance.
                </h3>
                <p className="text-muted-foreground text-[14px] md:text-[15px] leading-[1.8] mb-7 max-w-[32rem]">
                  Import and export documentation, broker coordination, customs follow-up, and duty planning handled with tighter control to support compliant, timely cargo movement.
                </p>

                <div className="space-y-3.5">
                  <div className="rounded-xl border border-border bg-background/60 p-3 md:p-4 flex gap-3 md:gap-4">
                    <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/10 text-sky-600 dark:text-sky-400">
                      <FileCheck className="w-5 h-5" strokeWidth={2.5} />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm md:text-[14px] mb-1">
                        Documents lined up
                      </p>
                      <p className="text-muted-foreground text-sm leading-[1.7]">
                        Commercial invoices, packing lists, HS codes, declarations, and supporting trade documents reviewed before submission.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-border bg-background/60 p-3 md:p-4 flex gap-3 md:gap-4">
                    <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/10 text-sky-600 dark:text-sky-400">
                      <Handshake className="w-5 h-5" strokeWidth={2.5} />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm md:text-[14px] mb-1">
                        Broker coordination
                      </p>
                      <p className="text-muted-foreground text-sm leading-[1.7]">
                        Active coordination with customs brokers, port teams, and transport partners to keep cargo flowing without unnecessary holds.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-border bg-background/60 p-3 md:p-4 flex gap-3 md:gap-4">
                    <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/10 text-sky-600 dark:text-sky-400">
                      <CircleDollarSign className="w-5 h-5" strokeWidth={2.5} />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm md:text-[14px] mb-1">
                        Cost visibility
                      </p>
                      <p className="text-muted-foreground text-sm leading-[1.7]">
                        Better planning around duties, fees, banking requirements, and clearance timing before costs escalate.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Services />

      <section className="relative py-4 md:py-6">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid gap-4 md:grid-cols-[0.9fr_1.1fr]">
            <div className="img-zoom rounded-sm overflow-hidden h-56 md:h-72 border border-border/40">
              <img
                src={cargoWake}
                alt="Modern warehouse interior"
                className="w-full h-full object-cover"
                loading="lazy"
                width={1920}
                height={1080}
              />
            </div>

            <div className="rounded-sm border border-border/50 bg-secondary/30 p-6 md:p-8 flex flex-col justify-end min-h-[14rem] md:min-h-[18rem]">
              <p className="text-label text-accent mb-3">Built for pressure</p>
              <p className="font-display text-2xl md:text-4xl font-semibold leading-tight">
                Sharper operations, tighter costs, stronger supplier control.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </motion.div>
  );
};

export default Index;
