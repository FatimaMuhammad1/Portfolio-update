import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import containersImg from "@/assets/containers.jpg";
import shipBow from "@/assets/ship-bow.jpg";
import portAerial from "@/assets/port-aerial.jpg";

const roles = [
  {
    period: "2024",
    title: "Logistics Manager",
    company: "Avolux Fresh Foodstuff Trading LLC",
    location: "UAE / Mexico / Tanzania",
    highlights: [
      "Implemented new logistics system reducing shipping lead times",
      "Negotiated contracts with freight forwarders securing significant cost savings",
      "Established quality control procedures maintaining avocado freshness across the supply chain",
    ],
  },
  {
    period: "2022 — 2024",
    title: "Supply Chain Manager",
    company: "Hakima Foodstuff Trading LLC",
    location: "UAE",
    highlights: [
      "Reduced operational costs by 15% through supply chain strategy",
      "95% accuracy rate in quarterly demand forecasts",
      "Managed 50+ global supplier relationships, saving AED 80K+ annually",
    ],
  },
  {
    period: "2018 — 2021",
    title: "Managing Director & Founder",
    company: "Prudence Services & General Trading",
    location: "UAE / Pakistan",
    highlights: [
      "Founded and scaled import/export operations across multiple categories",
      "Managed fresh meat, produce, automotive, and paper product supply chains",
      "Built procurement, warehousing, and logistics infrastructure from scratch",
    ],
  },
  {
    period: "2014 — 2018",
    title: "Supply Chain Supervisor",
    company: "Armacell Middle East LLC",
    location: "Saudi Arabia",
    highlights: [
      "20% increase in supply chain efficiency through process optimization",
      "Managed $1M+ quarterly inventory with 18% overstock reduction",
      "Spearheaded ERP SAP adoption improving planning accuracy",
    ],
  },
];

const Portfolio = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-28 relative bg-secondary/20" ref={ref}>
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[minmax(0,1fr)_420px] gap-10 mb-16">
            <div>
              <motion.div
                className="flex items-center gap-4 mb-6"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                <span className="inline-block w-12 h-[2px] bg-accent" />
                <p className="text-label text-accent">Career Timeline</p>
              </motion.div>
              <motion.h2
                className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-[-0.02em]"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                15+ Years of
                <br />
                <span className="italic font-normal text-muted-foreground">Impact</span>
              </motion.h2>
              <motion.p
                className="mt-6 text-muted-foreground text-lg leading-relaxed max-w-md font-body"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.35 }}
              >
                Progressive leadership across logistics, procurement, and international
                trade from Saudi Arabia to the UAE.
              </motion.p>
            </div>

            <motion.div
              className="grid grid-cols-2 grid-rows-[1fr_0.95fr] gap-4 min-h-[22rem]"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="img-zoom rounded-sm overflow-hidden row-span-2 border border-border/40">
                <img
                  src={containersImg}
                  alt="Shipping containers"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={1920}
                  height={1080}
                />
              </div>
              <div className="img-zoom rounded-sm overflow-hidden border border-border/40">
                <img
                  src={shipBow}
                  alt="Cargo ship"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={1920}
                  height={1080}
                />
              </div>
              <div className="img-zoom rounded-sm overflow-hidden border border-border/40">
                <img
                  src={portAerial}
                  alt="Aerial port operations"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={1920}
                  height={800}
                />
              </div>
            </motion.div>
          </div>

          <div className="space-y-0">
            {roles.map((role, i) => (
              <motion.div
                key={i}
                className="group border-t border-border py-8 md:py-10 hover-lift"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
              >
                <div className="grid md:grid-cols-12 gap-4 md:gap-8">
                  <div className="md:col-span-2">
                    <p className="text-label text-accent tabular-nums">{role.period}</p>
                  </div>

                  <div className="md:col-span-4">
                    <h3 className="font-display text-xl font-semibold group-hover:text-accent transition-colors duration-300">
                      {role.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-1 font-body">
                      {role.company}
                    </p>
                    <p className="text-label text-muted-foreground/50 mt-2">{role.location}</p>
                  </div>

                  <div className="md:col-span-6">
                    <ul className="space-y-2">
                      {role.highlights.map((h, j) => (
                        <li
                          key={j}
                          className="text-muted-foreground text-sm leading-relaxed pl-5 relative before:absolute before:left-0 before:top-[0.6em] before:w-2 before:h-[2px] before:bg-accent/40 font-body"
                        >
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-10 text-center"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <a
              href="/work"
              className="group inline-flex items-center gap-3 text-label text-foreground hover:text-accent transition-colors duration-300"
            >
              View Full Experience
              <span className="inline-block w-6 h-[2px] bg-accent group-hover:w-10 transition-all duration-300" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
