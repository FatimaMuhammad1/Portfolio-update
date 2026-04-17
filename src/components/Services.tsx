import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BarChart3, Handshake, Ship, Package, ClipboardCheck, Users } from "lucide-react";
import globalRoutes from "@/assets/global-routes.jpg";
import warehouseImg from "@/assets/warehouse.jpg";
import containersImg from "@/assets/containers.jpg";

const expertise = [
  { number: "01", title: "Supply Chain Strategy", description: "End-to-end supply chain optimization — demand forecasting, inventory management, and lean operations that reduce costs by up to 20%.", icon: BarChart3 },
  { number: "02", title: "Procurement & Sourcing", description: "Strategic vendor partnerships, contract negotiations, and cost optimization across 50+ global suppliers with consistent double-digit savings.", icon: Handshake },
  { number: "03", title: "Logistics Operations", description: "International shipping, customs clearance, route optimization, and 3PL management — achieving 98%+ on-time delivery rates.", icon: Ship },
  { number: "04", title: "Warehouse & Inventory", description: "Data-driven inventory optimization, warehouse layout design, and ERP integration (SAP, Odoo) reducing holding costs.", icon: Package },
  { number: "05", title: "Trade Compliance", description: "Import/export documentation, customs regulations, LC/SBLC banking, and port compliance — maintaining 100% adherence.", icon: ClipboardCheck },
  { number: "06", title: "Team Leadership", description: "Building and leading cross-functional teams of 20+ professionals, achieving 95% satisfaction and 90% retention rates.", icon: Users },
];

const Services = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-28 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0">
        <img
          src={globalRoutes}
          alt="Global supply chain network"
          className="w-full h-full object-cover opacity-20 dark:opacity-30"
          loading="lazy"
          width={1920}
          height={800}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/72 via-background/90 to-background" />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[minmax(0,1fr)_360px] gap-8 lg:gap-12 mb-14 md:mb-16">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
              <div>
                <motion.div
                  className="flex items-center gap-4 mb-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.1 }}
                >
                  <span className="inline-block w-12 h-[2px] bg-accent" />
                  <p className="text-label text-accent">Core Expertise</p>
                </motion.div>
                <motion.h2
                  className="relative font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[0.98] tracking-[-0.03em]"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <span className="block bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent [text-shadow:0_10px_30px_rgba(0,0,0,0.18)] dark:[text-shadow:0_14px_34px_rgba(2,6,23,0.75)]">
                    Strategy to Execution
                  </span>
                  <span className="mt-1 block font-serif text-[0.93em] italic font-normal text-foreground/55 dark:text-foreground/60">
                    End-to-End Impact
                  </span>
                </motion.h2>

                <motion.div
                  className="mt-6 flex flex-wrap items-center gap-2.5"
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.32 }}
                >
                  <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-accent">
                    15+ Years
                  </span>
                  <span className="rounded-full border border-border/70 bg-background/50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-foreground/70 backdrop-blur-sm">
                    End-to-End Ops
                  </span>
                  <span className="rounded-full border border-border/70 bg-background/50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-foreground/70 backdrop-blur-sm">
                    Cost + Speed
                  </span>
                </motion.div>
              </div>

              <motion.div
                className="flex items-end"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <p className="text-muted-foreground text-lg leading-relaxed max-w-md font-body">
                  A proven track record of transforming operations, cutting costs, and
                  building scalable systems across the Gulf region and beyond.
                </p>
              </motion.div>
            </div>

            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.35 }}
            >
              <div className="img-zoom rounded-sm overflow-hidden col-span-2 h-40 md:h-48 border border-border/40">
                <img
                  src={warehouseImg}
                  alt="Warehouse operations floor"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={1920}
                  height={1080}
                />
              </div>
              <div className="img-zoom rounded-sm overflow-hidden h-36 md:h-44 border border-border/40">
                <img
                  src={containersImg}
                  alt="Container freight operations"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={1920}
                  height={1080}
                />
              </div>
              <div className="rounded-sm border border-border/50 bg-card/60 backdrop-blur-sm p-5 flex items-end">
                <p className="text-sm text-muted-foreground leading-relaxed font-body">
                  Built across food trading, industrial supply chains, and cross-border
                  operations.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {expertise.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.number}
                  className="group relative p-8 rounded-sm border border-border/50 bg-card/50 backdrop-blur-sm hover:border-accent/30 hover:bg-card transition-all duration-500 hover-lift"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                >
                  <div className="flex items-start justify-between mb-6">
                    <Icon className="w-7 h-7 text-accent" strokeWidth={1.5} />
                    <span className="text-label text-accent/40 tabular-nums group-hover:text-accent/70 transition-colors duration-500">
                      {item.number}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-accent transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed font-body">
                    {item.description}
                  </p>
                  <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-accent/0 group-hover:bg-accent/30 transition-all duration-500" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
