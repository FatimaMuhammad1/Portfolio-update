import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import workHero from "@/assets/page-refresh/port-night.jpg";
import workStrip from "@/assets/page-refresh/refrigerated-yard.jpg";
import workStripSecondary from "@/assets/ship-bow.jpg";
import workProjectA from "@/assets/page-refresh/container-ship-aerial.jpg";
import workProjectB from "@/assets/page-refresh/container-ship-twilight.jpg";

const roles = [
  {
    period: "Feb 2024 — Dec 2024",
    title: "Logistics Manager",
    company: "Avolux Fresh Foodstuff Trading LLC",
    location: "UAE",
    about: "UAE/Mexico/Tanzania-based avocado trading company focused on sustainability and global distribution.",
    achievements: [
      "Implemented new logistics system reducing shipping lead times",
      "Negotiated favorable contracts with shipping companies and freight forwarders",
      "Established quality control procedures maintaining freshness throughout supply chain",
      "Implemented farm-to-table traceability system",
      "Led carbon footprint reduction through route optimization",
    ],
  },
  {
    period: "Jan 2022 — Jan 2024",
    title: "Supply Chain Manager",
    company: "Hakima Foodstuff Trading LLC",
    location: "UAE",
    about: "UAE-based food trading company maintaining global supply chain and delivery of premium products in the Gulf region.",
    achievements: [
      "Reduced operational costs by 15% through supply chain strategy",
      "Achieved 95% accuracy in quarterly demand forecasts",
      "Managed 50+ global suppliers, saving AED 80K+ annually",
      "Led team of 20+ achieving 95% satisfaction and 90% retention",
      "Championed lean management increasing efficiency and reducing waste by 10%",
      "Maintained 100% compliance rate over 1.5 years",
    ],
  },
  {
    period: "Dec 2018 — Dec 2021",
    title: "Managing Director & Founder",
    company: "Prudence Services & General Trading",
    location: "UAE / Pakistan",
    about: "Import/export operations spanning fresh chilled meat, produce, A4 papers, Japanese vehicles, and spare parts.",
    achievements: [
      "Founded and scaled multi-category trading operations",
      "Led strategic planning driving increased market share",
      "Oversaw financial management ensuring sustained fiscal health",
      "Built procurement, warehousing, and logistics infrastructure from scratch",
      "Maintained highest levels of corporate governance and regulatory compliance",
    ],
  },
  {
    period: "Jul 2014 — Nov 2018",
    title: "Supply Chain Supervisor",
    company: "Armacell Middle East LLC",
    location: "Saudi Arabia",
    about: "German company pioneering flexible foam innovation for equipment insulation and engineered solutions.",
    achievements: [
      "Increased supply chain efficiency by 20%",
      "Managed $1M+ quarterly inventory, reducing overstock by 18%",
      "Improved on-time delivery rates to 98%",
      "Negotiated 12% average cost savings on bulk purchases",
      "Spearheaded ERP SAP adoption improving planning accuracy",
      "Reduced logistical disruptions by 35% through risk management",
    ],
  },
  {
    period: "Dec 2012 — Jul 2014",
    title: "Logistics & Public Relations Manager",
    company: "Lakesmere Arabia LLC",
    location: "Saudi Arabia",
    about: "UK-based company specializing in roofing, cladding, and specialist glass facades. Projects include KAIA Airport Jeddah.",
    achievements: [
      "Managed 1,000+ monthly shipments with 98.5% on-time delivery",
      "Achieved SAR 2M annual savings through strategic negotiations",
      "Coordinated visas for 2,000+ employees with 99% approval rate",
      "Reduced customs clearance times by 30%",
      "Led diverse team of 20+ with 95% retention rate",
    ],
  },
  {
    period: "Dec 2011 — Dec 2012",
    title: "Logistics Operation Manager",
    company: "Zhejiang Ghonggao Power Technology",
    location: "Saudi Arabia",
    about: "China-based manufacturer of diesel engines and generator sets, with power generation plant services.",
    achievements: [
      "Enhanced on-time delivery rates by 25% through route optimization",
      "Implemented inventory system reducing carrying costs by 15%",
      "Negotiated 10% procurement cost reduction including bank LC transactions",
      "Led cross-functional team to secure ISO 9001 certification",
      "Reduced workplace accidents by 30% through safety initiatives",
    ],
  },
  {
    period: "Dec 2010 — Dec 2011",
    title: "Assistant Procurement Manager",
    company: "Al Zahrani International Est",
    location: "Saudi Arabia",
    about: "Saudi company specializing in fresh chilled meat and vegetable trading across the Gulf region.",
    achievements: [
      "Achieved 15% cost reduction through streamlined procurement",
      "Built strategic vendor partnerships aligned with organizational needs",
      "Developed data-driven inventory strategies improving cash flow",
      "Managed supplier contracts ensuring compliance and risk mitigation",
    ],
  },
];

const Work = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      className="min-h-screen bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navigation />

      {/* Hero banner */}
      <section className="relative pt-20 overflow-hidden">
        <div className="h-[44vh] md:h-[52vh] relative">
          <img
            src={workHero}
            alt="Night port operations with stacked container yards"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 lg:p-20">
            <div className="max-w-4xl">
              <motion.div
                className="flex items-center gap-4 mb-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <span className="inline-block w-12 h-[2px] bg-accent" />
                <p className="text-label text-accent">Career History</p>
              </motion.div>
              <motion.h1
                className="font-display text-4xl md:text-5xl lg:text-7xl font-semibold leading-[0.95] tracking-[-0.03em]"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.3 }}
              >
                Experience
              </motion.h1>
            </div>
          </div>
        </div>
      </section>

      {/* Image strip */}
      <section className="py-6 md:py-8">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid gap-4 md:grid-cols-3">
            <motion.div
              className="img-zoom rounded-sm overflow-hidden h-40 md:h-56 md:col-span-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <img src={workStrip} alt="Cold-chain logistics yard with trailers" className="w-full h-full object-cover" loading="lazy" width={1920} height={1080} />
            </motion.div>
            <motion.div
              className="img-zoom rounded-sm overflow-hidden h-40 md:h-56"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <img src={workStripSecondary} alt="Container terminal operations" className="w-full h-full object-cover" loading="lazy" width={1920} height={1080} />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="pb-10 md:pb-12">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {[
              { value: "7", label: "Leadership Roles" },
              { value: "15+", label: "Years Across Gulf" },
              { value: "50+", label: "Suppliers Managed" },
              { value: "98%", label: "Delivery Performance" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                className="rounded-sm border border-border/60 bg-card/55 backdrop-blur-sm p-5"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.65 + i * 0.08 }}
              >
                <p className="font-display text-2xl md:text-3xl font-semibold leading-none">{item.value}</p>
                <p className="mt-2 text-label text-muted-foreground/80">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="pb-12 md:pb-16" ref={ref}>
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent via-border to-border" />

            {roles.map((role, i) => (
              <motion.div
                key={i}
                className="relative pl-10 md:pl-16 pb-11 last:pb-0"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-4 top-1 w-3 h-3 rounded-full bg-accent -translate-x-[5px] ring-4 ring-background" />

                <div className="p-6 md:p-8 bg-card/50 backdrop-blur-sm rounded-sm border border-border/50 hover:border-accent/20 transition-all duration-500 hover-lift">
                  <div className="flex flex-wrap items-baseline gap-3 mb-4">
                    <p className="text-label text-accent tabular-nums">{role.period}</p>
                    <span className="text-muted-foreground/30">·</span>
                    <p className="text-label text-muted-foreground/60">{role.location}</p>
                  </div>

                  <h2 className="font-display text-xl md:text-2xl font-semibold mb-1">{role.title}</h2>
                  <p className="text-muted-foreground text-sm font-body mb-2">{role.company}</p>
                  <p className="text-muted-foreground/70 text-sm font-body mb-6 leading-relaxed">{role.about}</p>

                  <ul className="space-y-2">
                    {role.achievements.map((a, j) => (
                      <li
                        key={j}
                        className="text-muted-foreground text-sm leading-relaxed pl-5 relative before:absolute before:left-0 before:top-[0.6em] before:w-2 before:h-[2px] before:bg-accent/40 font-body"
                      >
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-10 md:pb-12">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <motion.div
            className="max-w-6xl mx-auto rounded-sm border border-border/60 bg-gradient-to-br from-card/70 via-card/50 to-background/70 p-7 md:p-10"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-label text-accent mb-4">Cross-Role Strengths</p>
            <h2 className="font-display text-2xl md:text-3xl font-semibold leading-tight mb-6">
              Consistent outcomes across trading, manufacturing, and project environments.
            </h2>
            <div className="flex flex-wrap gap-2.5">
              {[
                "Cost Control",
                "Supplier Negotiation",
                "Import/Export Compliance",
                "ERP Execution",
                "Forecast Accuracy",
                "Team Leadership",
                "Process Optimization",
                "Risk Mitigation",
              ].map((chip) => (
                <span key={chip} className="rounded-full border border-border/70 bg-background/55 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-foreground/75">
                  {chip}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="pb-10 md:pb-12">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-4">
            {[
              {
                title: "Industries",
                body: "Food trading, insulation manufacturing, construction projects, and power technology operations.",
              },
              {
                title: "Leadership Scope",
                body: "Managed cross-functional teams, supplier ecosystems, customs workflows, and multi-country logistics.",
              },
              {
                title: "Business Outcomes",
                body: "Lowered operating cost, improved delivery reliability, and strengthened compliance with scalable systems.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="rounded-sm border border-border/60 bg-card/55 backdrop-blur-sm p-5 md:p-6"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <p className="font-display text-lg font-semibold mb-2">{item.title}</p>
                <p className="text-sm leading-relaxed text-muted-foreground font-body">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-10 md:pb-14">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <p className="text-label text-accent mb-4">Project Visuals</p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="img-zoom rounded-sm overflow-hidden border border-border/50 h-36 md:h-44">
                <img
                  src={workProjectA}
                  alt="Operations project site overview"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={1920}
                  height={1080}
                />
              </div>
              <div className="img-zoom rounded-sm overflow-hidden border border-border/50 h-36 md:h-44">
                <img
                  src={workProjectB}
                  alt="Project execution logistics"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={1920}
                  height={1080}
                />
              </div>
              <div className="rounded-sm border border-border/60 bg-card/55 backdrop-blur-sm p-5 md:p-6">
                <p className="font-display text-lg font-semibold mb-2">Built Across Real Operations</p>
                <p className="text-sm leading-relaxed text-muted-foreground font-body">
                  Experience developed in trading, manufacturing, and project logistics environments where execution quality directly impacts cost and reliability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
};

export default Work;
