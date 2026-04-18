import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import warehouseImg from "@/assets/warehouse.jpg";
import planningDesk from "@/assets/planning-desk.jpg";
import globalRoutes from "@/assets/global-routes.jpg";

const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const tools = ["SAP", "Odoo", "Power BI", "Oracle", "SQL", "Databricks", "Blue Beam", "Asana", "Slack", "Advanced Excel"];

  return (
    <section className="py-20 md:py-28 bg-secondary/50 relative overflow-hidden noise" ref={ref}>
      <div className="absolute inset-0 opacity-10">
        <img
          src={globalRoutes}
          alt="Global trade routes"
          className="w-full h-full object-cover"
          loading="lazy"
          width={1920}
          height={800}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-transparent to-background/70" />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[minmax(0,1fr)_360px] gap-10 mb-16">
            <div>
              <motion.div
                className="flex items-center gap-4 mb-6"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                <span className="inline-block w-12 h-[2px] bg-accent" />
                <p className="text-label text-accent">About</p>
              </motion.div>
              <motion.h2
                className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-[-0.02em]"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Built for
                <br />
                <span className="italic font-normal text-muted-foreground">Complexity</span>
              </motion.h2>

              <motion.p
                className="mt-6 text-muted-foreground text-lg leading-relaxed max-w-xl font-body"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.35 }}
              >
                A passionate and results-driven professional with over 15 years of
                experience in operational and supply chain management, logistics,
                procurement, project management, and international trade across the Gulf
                region.
              </motion.p>
            </div>

            <motion.div
              className="w-full max-w-[380px] justify-self-end"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="img-zoom rounded-sm overflow-hidden border border-border/40 shadow-[0_18px_40px_-24px_rgba(15,23,42,0.28)]">
                <img
                  src={warehouseImg}
                  alt="Modern warehouse operations"
                  className="h-56 w-full object-cover md:h-64"
                  loading="lazy"
                  width={1920}
                  height={1080}
                />
              </div>

              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="img-zoom rounded-sm overflow-hidden border border-border/40 shadow-[0_18px_40px_-24px_rgba(15,23,42,0.18)]">
                  <img
                    src={planningDesk}
                    alt="Strategy planning workspace"
                    className="h-36 w-full object-cover md:h-40"
                    loading="lazy"
                    width={1024}
                    height={1024}
                  />
                </div>
                <div className="img-zoom rounded-sm overflow-hidden border border-border/40 shadow-[0_18px_40px_-24px_rgba(15,23,42,0.18)]">
                  <img
                    src={globalRoutes}
                    alt="Global routes visualization"
                    className="h-36 w-full object-cover md:h-40"
                    loading="lazy"
                    width={1920}
                    height={800}
                  />
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.15fr)_minmax(0,1fr)] items-stretch">
            <motion.div
              className="h-full p-8 bg-card/80 backdrop-blur-sm rounded-sm border border-border/50"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              <p className="text-label text-accent mb-6">Credentials</p>
              <div className="space-y-4">
                {[
                  "CSCMP Supply Chain Professional Certificate",
                  "SAP MM (Materials Management)",
                  "BS Business Administration (Management)",
                  "Bachelor in Economics (University of Punjab)",
                  "IOSH Managing Safely (UK)",
                  "PGD Logistics & Supply Chain",
                  "Certified Oracle 9i DBA",
                ].map((item) => (
                  <p
                    key={item}
                    className="text-sm text-foreground/80 border-l-2 border-accent/20 pl-4 hover:border-accent transition-colors duration-300 font-body"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="h-full p-8 bg-card/80 backdrop-blur-sm rounded-sm border border-border/50"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.55 }}
            >
              <p className="text-label text-accent mb-6">Key Numbers</p>
              <div className="grid grid-cols-2 gap-x-8 gap-y-10">
                <div className="group flex flex-col items-start text-left">
                  <p className="flex min-h-[56px] items-end gap-[1px] text-foreground transition-colors duration-500 group-hover:text-accent">
                    <span className="font-signature text-4xl leading-none tracking-tight lining-nums">15</span>
                    <span className="translate-y-[-2px] font-body text-[2rem] font-semibold leading-none">+</span>
                  </p>
                  <p className="mt-3 font-body text-label text-muted-foreground/60">
                    Years
                  </p>
                </div>

                <div className="group flex flex-col items-start text-left">
                  <p className="flex min-h-[56px] items-end gap-[1px] text-foreground transition-colors duration-500 group-hover:text-accent">
                    <span className="font-signature text-4xl leading-none tracking-tight lining-nums">98</span>
                    <span className="translate-y-[-2px] font-body text-[2rem] font-semibold leading-none">%</span>
                  </p>
                  <p className="mt-3 font-body text-label text-muted-foreground/60">
                    On-Time
                  </p>
                </div>

                <div className="group flex flex-col items-start text-left">
                  <p className="flex min-h-[56px] items-end gap-[1px] text-foreground transition-colors duration-500 group-hover:text-accent">
                    <span className="font-signature text-4xl leading-none tracking-tight lining-nums">50</span>
                    <span className="translate-y-[-2px] font-body text-[2rem] font-semibold leading-none">+</span>
                  </p>
                  <p className="mt-3 font-body text-label text-muted-foreground/60">
                    Suppliers
                  </p>
                </div>

                <div className="group flex flex-col items-start text-left">
                  <p className="min-h-[56px] font-signature text-4xl leading-none tracking-tight lining-nums text-foreground transition-colors duration-500 group-hover:text-accent">
                    5
                  </p>
                  <p className="mt-3 font-body text-label text-muted-foreground/60">
                    Languages
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="h-full p-8 bg-card/80 backdrop-blur-sm rounded-sm border border-border/50"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.65 }}
            >
              <p className="text-label text-accent mb-4">Tools &amp; Tech</p>
              <div className="flex flex-wrap content-start gap-2">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-xs text-foreground/70 px-3 py-1.5 border border-border rounded-full hover:border-accent/40 hover:text-accent transition-all duration-300 font-body font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
